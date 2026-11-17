import { useState } from "react";
import { addProduct } from "../services/productService";

function AddProductPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    console.log({
      name,
      description,
      price,
    });

    const product = {
      name,
      description,
      price: Number(price),
      available: true,
      image: "https://placeholder.com/400x200",
    };
    try {
      const newProduct = await addProduct(product);

      console.log("Produit ajouté :", newProduct);
      alert("Produit ajouté avec succès !");
    } catch (error) {
      console.error("Erreur lors de l'ajout du produit :", error);
      alert("Erreur lors de l'ajout du produit. Veuillez réessayer.");
    }
  }

  return (
    <div className="container mt-5">
      <h3>Ajouter un produit</h3>

      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-3"
          placeholder="nom du produit"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="form-control mb-3"
          placeholder="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          className="form-control mb-3"
          placeholder="prix"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button className="btn btn-primary">Ajouter</button>
      </form>
    </div>
  );
}
export default AddProductPage;
