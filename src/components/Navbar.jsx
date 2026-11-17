import { Link } from "react-router";

function Navbar() {
  return (
    <nav className="navbar bg-light shadow-sm">
      <div className="container">
        <Link to="/" className="nav-link">
          Product Manager
        </Link>
        <Link to="/products/add" className="nav-link">
          Ajouter un produit
        </Link>
      </div>
    </nav>
  );
}
export default Navbar;
