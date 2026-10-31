import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { products, imageFor, money } from '../data/products.js';
import { useCart } from '../context/CartContext.jsx';
import NotFound from './NotFound.jsx';

export default function Product() {
  const { slug } = useParams();
  const { dispatch } = useCart();
  const p = products.find((x) => x.slug === slug);

  useEffect(() => {
    document.title = p ? `${p.name} | Keyhouse` : 'Not found | Keyhouse';
    return () => { document.title = 'Keyhouse'; };
  }, [p]);

  if (!p) return <NotFound />;
  return (
    <section className="detail">
      <img src={imageFor(p)} alt={p.name} width="400" height="300" decoding="async" fetchpriority="high" />
      <div>
        <Link to="/" className="muted">Back to shop</Link>
        <h1>{p.name}</h1>
        <p>{p.blurb}</p>
        <p className="price">{money(p.price)}</p>
        <button className="btn" disabled={!p.stock} onClick={() => dispatch({ type: 'add', slug: p.slug })}>
          {p.stock ? 'Add to cart' : 'Sold out'}
        </button>
      </div>
    </section>
  );
}
