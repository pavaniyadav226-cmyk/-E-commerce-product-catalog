import { createContext, useContext, useEffect, useMemo, useReducer } from 'react';

const CartContext = createContext(null);
const KEY = 'keyhouse-cart';

function reducer(state, a) {
  switch (a.type) {
    case 'add': return { ...state, [a.slug]: (state[a.slug] || 0) + 1 };
    case 'set': {
      const next = { ...state };
      if (a.qty <= 0) delete next[a.slug]; else next[a.slug] = a.qty;
      return next;
    }
    case 'clear': return {};
    default: return state;
  }
}

function load() {
  try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch { return {}; }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(reducer, undefined, load);
  useEffect(() => { try { localStorage.setItem(KEY, JSON.stringify(items)); } catch {} }, [items]);
  const count = useMemo(() => Object.values(items).reduce((s, q) => s + q, 0), [items]);
  const value = useMemo(() => ({ items, count, dispatch }), [items, count]);
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => useContext(CartContext);
