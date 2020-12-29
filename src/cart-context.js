import { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();
const CartDispatchContext = createContext();

function cartReducer(state, action) {
  // TODO add required types
  switch (action.type) {
    case 'add-item': {
      const item = state.items.find((i) => i.id === action.item.id);

      if (item) {
        return {
          items: state.items.map((i) =>
            i.id === item.id ? { ...item, count: item.count + 1 } : i
          ),
          itemsCount: state.itemsCount + 1
        };
      }

      return {
        items: [...state.items, { ...action.item, count: 1 }],
        itemsCount: state.itemsCount + 1
      };
    }

    default:
      throw new Error(`Unhandled action type ${action.type}`);
  }
}

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    itemsCount: 0
  });

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
