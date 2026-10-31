export const categories = ['Keyboards', 'Switches', 'Keycaps'];

export const products = [
  { slug: 'forge-75', name: 'Forge 75', category: 'Keyboards', price: 149, color: '#0f4c4a', stock: 12, blurb: 'Gasket-mounted 75% board with an aluminium case and hot-swap sockets.' },
  { slug: 'forge-tkl', name: 'Forge TKL', category: 'Keyboards', price: 169, color: '#173f5f', stock: 5, blurb: 'Tenkeyless layout, PBT-ready, with a dampened plate for a deeper sound.' },
  { slug: 'slate-65', name: 'Slate 65', category: 'Keyboards', price: 119, color: '#3b4a54', stock: 0, blurb: 'Compact 65% polycarbonate board. Currently sold out.' },
  { slug: 'linear-red', name: 'Linear Red x70', category: 'Switches', price: 28, color: '#b23a48', stock: 80, blurb: 'Smooth 45g linear switches, factory lubed. Pack of 70.' },
  { slug: 'tactile-amber', name: 'Tactile Amber x70', category: 'Switches', price: 32, color: '#c9821f', stock: 64, blurb: 'Rounded tactile bump at 55g. Pack of 70.' },
  { slug: 'silent-ink', name: 'Silent Ink x70', category: 'Switches', price: 34, color: '#22313f', stock: 40, blurb: 'Silenced linear switches for shared desks. Pack of 70.' },
  { slug: 'pbt-harbor', name: 'Harbor PBT Set', category: 'Keycaps', price: 59, color: '#2a7f8e', stock: 25, blurb: 'Double-shot PBT, Cherry profile, 140 keys.' },
  { slug: 'pbt-ember', name: 'Ember PBT Set', category: 'Keycaps', price: 64, color: '#d1603d', stock: 18, blurb: 'Dye-sublimated PBT with a warm legend palette, 130 keys.' },
];

// Zero-network placeholder art. Swap for real WebP files in /public/img (see README).
export const imageFor = (p) =>
  `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><rect width='400' height='300' fill='${p.color}'/><text x='200' y='175' font-size='110' text-anchor='middle' fill='rgba(255,255,255,.85)' font-family='sans-serif' font-weight='700'>${p.name[0]}</text></svg>`
  )}`;

export const money = (n) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
