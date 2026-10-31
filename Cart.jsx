import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';
import { products, money } from '../data/products.js';

export default function Cart() {
  const { items, dispatch } = useCart();
  const rows = products.filter((p) => items[p.slug]).map((p) => ({ p, qty: items[p.slug] }));
  const total = rows.reduce((s, r) => s + r.p.price * r.qty, 0);

  if (!rows.length) return <p className="status">Your cart is empty. <Link to="/">Browse the shop</Link>.</p>;
  return (
    <section>
      <h1>Cart</h1>
      {rows.map(({ p, qty }) => (
        <div className="row" key={p.slug}>
          <Link to={`/product/${p.slug}`}>{p.name}</Link>
          <input type="number" min="0" max={p.stock} value={qty} aria-label={`Quantity for ${p.name}`}
            onChange={(e) => dispatch({ type: 'set', slug: p.slug, qty: Math.min(p.stock, Number(e.target.value)) })} />
          <span>{money(p.price * qty)}</span>
        </div>
      ))}
      <p className="price total">Total {money(total)}</p>
      <button className="btn" onClick={() => dispatch({ type: 'clear' })}>Clear cart</button>
    </section>
  );
}
