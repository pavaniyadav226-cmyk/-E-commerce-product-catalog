import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useCart } from '../context/CartContext.jsx';

export default function Layout() {
  const { count } = useCart();
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);

  return (
    <>
      <header className="bar">
        <Link to="/" className="brand">Keyhouse</Link>
        <nav aria-label="Main">
          <NavLink to="/" end>Shop</NavLink>
          <NavLink to="/cart">Cart ({count})</NavLink>
        </nav>
      </header>
      <main><Outlet /></main>
      <footer className="foot">Keyhouse capstone project. Demo store, no real payments.</footer>
    </>
  );
}
