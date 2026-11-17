import { getProducts } from "../services/productService";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts()
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="container mt-5">
      <h1>Bienvenue sur Product Manager</h1>
      <div className="row">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
