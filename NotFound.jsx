import { Link } from 'react-router-dom';
export default function NotFound() {
  return <p className="status">That page doesn’t exist. <Link to="/">Return to the shop</Link>.</p>;
}
