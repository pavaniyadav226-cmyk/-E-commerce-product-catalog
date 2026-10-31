import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard.jsx';
import { products, categories } from '../data/products.js';

export default function Catalog() {
  // Filter state lives in the URL so filtered views are shareable and survive refresh.
  const [params, setParams] = useSearchParams();
  const q = params.get('q') || '';
  const cat = params.get('cat') || '';
  const sort = params.get('sort') || '';

  const set = (key, val) => {
    const next = new URLSearchParams(params);
    val ? next.set(key, val) : next.delete(key);
    setParams(next, { replace: true });
  };

  const list = useMemo(() => {
    let out = products.filter((p) =>
      (!cat || p.category === cat) && p.name.toLowerCase().includes(q.toLowerCase()));
    if (sort === 'low') out = [...out].sort((a, b) => a.price - b.price);
    if (sort === 'high') out = [...out].sort((a, b) => b.price - a.price);
    return out;
  }, [q, cat, sort]);

  return (
    <section>
      <h1>Build the board you’ll keep</h1>
      <div className="tools">
        <input type="search" placeholder="Search products" aria-label="Search products" value={q} onChange={(e) => set('q', e.target.value)} />
        <select aria-label="Category" value={cat} onChange={(e) => set('cat', e.target.value)}>
          <option value="">All categories</option>
          {categories.map((c) => <option key={c}>{c}</option>)}
        </select>
        <select aria-label="Sort" value={sort} onChange={(e) => set('sort', e.target.value)}>
          <option value="">Featured</option>
          <option value="low">Price: low to high</option>
          <option value="high">Price: high to low</option>
        </select>
      </div>
      {list.length ? (
        <div className="grid">{list.map((p) => <ProductCard key={p.slug} p={p} />)}</div>
      ) : (
        <p className="status">No products match. Clear the search or pick another category.</p>
      )}
    </section>
  );
}
