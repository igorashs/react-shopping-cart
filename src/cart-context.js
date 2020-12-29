import { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();
const CartDispatchContext = createContext();

const INITIAL = {
  items: [],
  itemsCount: 0
};

function cartReducer(state, action) {
  switch (action.type) {
    case 'increment-item': {
      const item = state.items.find((i) => i.id === action.item.id);

      // check if item exists in cart
      if (item) {
        return {
          items: state.items.map((i) =>
            i.id === item.id ? { ...item, count: item.count + 1 } : i
          ),
          itemsCount: state.itemsCount + 1
        };
      }

      // add new item in cart
      return {
        items: [...state.items, { ...action.item, count: 1 }],
        itemsCount: state.itemsCount + 1
      };
    }

    case 'decrement-item': {
      // remove one instance of item from cart
      if (action.item.count > 1) {
        return {
          items: state.items.map((i) =>
            i.id === action.item.id
              ? { ...action.item, count: action.item.count - 1 }
              : i
          ),
          itemsCount: state.itemsCount - 1
        };
      }

      // remove item from cart
      return {
        items: state.items.filter((i) => i.id !== action.item.id),
        itemsCount: state.itemsCount - 1
      };
    }

    case 'remove-item': {
      return {
        items: state.items.filter((i) => i.id !== action.item.id),
        itemsCount: state.itemsCount - action.item.count
      };
    }

    case 'reset-cart': {
      return {
        ...INITIAL
      };
    }

    default:
      throw new Error(`Unhandled action type ${action.type}`);
  }
}

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { ...INITIAL });

  return (
    <CartContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
}

function useCartState() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCartState must be used within a CartProvider');
  }

  return context;
}

function useCartDispatch() {
  const context = useContext(CartDispatchContext);

  if (!context) {
    throw new Error('useCartDispatch must be used within a CartProvider');
  }

  return context;
}

function useCart() {
  return [useCartState(), useCartDispatch()];
}

export { CartProvider, useCartState, useCartDispatch, useCart };
