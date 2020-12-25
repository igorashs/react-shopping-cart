import { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();
const CartDispatchContext = createContext();

function cartReducer(state, action) {
  // TODO add required types
  switch (action.type) {
    case 'add-item':
      return {
        items: [...state.items, action.payload],
        itemCount: state.itemCount + 1
      };
    default:
      throw new Error(`Unhandled action type ${action.type}`);
  }
}

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    itemCount: 0
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
