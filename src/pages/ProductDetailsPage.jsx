import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router";
import {
  getProductById,
  deleteProduct,
  updateProductAvailability,
} from "../services/productService";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isUpdatingAvailability, setIsUpdatingAvailability] = useState(false);
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

  async function handleUpdate() {
    try {
      await UpdateProduct(id);
      alert("Produit modifié avec succès !");
      navigate("/");
    } catch (error) {
      console.error("Erreur lors de la modification du produit :", error);
      alert("Erreur lors de la modification du produit. Veuillez réessayer.");
    }
  }

  async function handleAvailabilityToggle() {
    const available = !product.available;
    setIsUpdatingAvailability(true);
    try {
      await updateProductAvailability(id, available);
      setProduct((currentProduct) => ({ ...currentProduct, available }));
    } catch (error) {
      console.error("Erreur lors de la mise a jour de la disponibilite :", error);
      alert("Erreur lors de la mise a jour de la disponibilite. Veuillez reessayer.");
    } finally {
      setIsUpdatingAvailability(false);
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

      <button className="btn btn-danger ms-2" onClick={handleUpdate}>
        Modifier le produit
      </button>

      <button
        className={`btn ${product.available ? "btn-danger" : "btn-success"} ms-2`}
        onClick={handleAvailabilityToggle}
        disabled={isUpdatingAvailability}
      >
        {product.available ? "Rendre indisponible" : "Rendre disponible"}
      </button>
    </div>
  );
}
