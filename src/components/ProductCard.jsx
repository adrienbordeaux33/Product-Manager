import { Link } from "react-router";

export default function ProductCard({ product }) {
  return (
    <div className="col-4 text-center d-grid gap-3 border rounded m-1">
      <img
        src={product.image}
        className="card-img-top border rounded-pill p-2 m-2"
        alt={product.name}
      />
      <div className="card-body ">
        <h5 className="card-title  border rounded-pill p-2 m-2 ">
          {product.name}
        </h5>
        <p className="card-text border rounded-pill p-2 m-2 ">
          {product.description}
        </p>
        <p
          className={`fw-bold fs-3 p-2 m-2 rounded-pill ${product.available ? "text-success bg-success bg-opacity-50 " : "text-danger bg-danger bg-opacity-50 "}`}
        >
          {product.available ? "Disponible" : "Indisponible"}
        </p>
        <p className="fw-bold text-primary fs-4">{product.price}$</p>
        <Link to={`/products/${product.id}`} className="btn btn-primary">
          Voir Details
        </Link>
      </div>
    </div>
  );
}
