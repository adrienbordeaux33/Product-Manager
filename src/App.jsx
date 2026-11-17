import { Routes, Route, Navigate } from "react-router";
import ProductPage from "./pages/ProductPage";
import AddProductPage from "./pages/AddProductPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProductPage />} />
      <Route path="/products/add" element={<AddProductPage />} />
      <Route path="/products/:id" element={<ProductDetailsPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
export default App;
// src/App.jsx : le composant racine de ton interface.
