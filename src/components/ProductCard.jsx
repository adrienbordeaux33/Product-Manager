import { Link } from "react-router";

function ProductCard({ product }) {
  return (
    <div className="col-4">
      <img src={product.image} className="card-img-top" alt={product.name} />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <p className="fw-bold text-primary">${product.price}</p>
        <Link to={`/products/${product.id}`} className="btn btn-primary">
          Voir Details
        </Link>
      </div>
    </div>
  );
}
export default ProductCard;
