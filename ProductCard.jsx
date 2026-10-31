import { Link } from 'react-router-dom';
import { imageFor, money } from '../data/products.js';

export default function ProductCard({ p }) {
  return (
    <article className="card">
      <Link to={`/product/${p.slug}`}>
        <img src={imageFor(p)} alt={p.name} width="400" height="300" loading="lazy" decoding="async" />
        <h2>{p.name}</h2>
      </Link>
      <p className="muted">{p.category}</p>
      <p className="price">{p.stock ? money(p.price) : 'Sold out'}</p>
    </article>
  );
}
