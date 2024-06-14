import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Busca from "./pages/buscarPorId/busca";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Busca />
  </React.StrictMode>
);
