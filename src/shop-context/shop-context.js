import { createContext, useContext, useReducer } from 'react';
import { ITEMS } from './mock-data';

const ShopContext = createContext();
const ShopDispatchContext = createContext();

function shopReducer(state, action) {
  switch (action.type) {
    case 'decrement-item':
      return {
        items: state.items.map((i) =>
          i.id === action.item.id ? { ...i, count: i.count - 1 } : i
        )
      };

    case 'increment-item':
      return {
        items: state.items.map((i) =>
          i.id === action.item.id ? { ...i, count: i.count + 1 } : i
        )
      };

    case 'restore-item':
      return {
        items: state.items.map((i) =>
          i.id === action.item.id
            ? { ...i, count: i.count + action.item.count }
            : i
        )
      };

    case 'reset-shop':
      return {
        items: [...ITEMS]
      };

    default:
      throw new Error(`Unhandled action type ${action.type}`);
  }
}

function ShopProvider({ children }) {
  const [state, dispatch] = useReducer(shopReducer, { items: ITEMS });

  return (
    <ShopContext.Provider value={state}>
      <ShopDispatchContext.Provider value={dispatch}>
        {children}
      </ShopDispatchContext.Provider>
    </ShopContext.Provider>
  );
}

function useShopState() {
  const context = useContext(ShopContext);

  if (!context) {
    throw new Error('useShopState must be used within a ShopProvider');
  }

  return context;
}

function useShopDispatch() {
  const context = useContext(ShopDispatchContext);

  if (!context) {
    throw new Error('useShopDispatch must be used within a ShopProvider');
  }

  return context;
}

function useShop() {
  return [useShopState(), useShopDispatch()];
}

export { ShopProvider, useShopState, useShopDispatch, useShop };
