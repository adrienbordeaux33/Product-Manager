import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router";
import { getProductById, deleteProduct } from "../services/productService";

function ProductDetailsPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  async function handleDelete() {
    try {
      await deleteProduct(id);
      alert("Produit supprimé avec succès !");
      navigate("/");
    } catch (error) {
      console.error("Erreur lors de la suppression du produit :", error);
      alert("Erreur lors de la suppression du produit. Veuillez réessayer.");
    }
  }

  useEffect(() => {
    getProductById(id)
      .then((data) => setProduct(data))
      .catch((error) => console.error(error));
  }, [id]);

  if (!product) {
    return <p className="container mt-5">Loading...</p>;
  }
  return (
    <div className="container mt-5">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} width="300" />
      <p>{product.description}</p>
      <p className="fw-bold ">{product.price}</p>
      <Link to="/" className="btn btn-secondary">
        Retour aux produits
      </Link>
      <button className="btn btn-danger ms-2" onClick={handleDelete}>
        Supprimer le produit
      </button>
    </div>
  );
}
export default ProductDetailsPage;
