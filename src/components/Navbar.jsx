import { Link } from "react-router";

function Navbar() {
  return (
    <nav className="navbar bg-light shadow-sm text-center">
      <div className="container text-center">
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
