import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Insert from "./pages/inserir/inserir";
import Alterar from "./pages/alterar/alterar";
import Delete from "./pages/deletar/deletar";
import Busca from "./pages/buscarPorId/busca";
import Home from "./pages/home/home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Busca />} path="/busca" />
          <Route element={<Insert />} path="/inserir" />
          <Route element={<Alterar />} path="/alterar" />
          <Route element={<Delete />} path="/deletar" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
