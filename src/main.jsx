import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";
import Navbar from "./components/Navbar.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <App />
      {/* src/App.jsx : le composant racine de ton interface. */}
    </BrowserRouter>
  </React.StrictMode>,
);
// src/main.jsx : c’est le point d’entrée du code JavaScript/React. Il importe React, fait le createRoot(document.getElementById('root')).render(<App />) et lance ton composant principal.
