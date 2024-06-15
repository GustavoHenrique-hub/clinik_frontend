import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Alterar from "./pages/alterar/alterar";
import Home from "./pages/home/home";
import Busca from "./pages/busca/busca";
import Delete from "./pages/delete/delete";
import Inserir from "./pages/inserir/inserir";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Alterar />} path="/alterar" />
          <Route element={<Busca />} path="/busca" />
          <Route element={<Delete />} path="/deletar" />
          <Route element={<Inserir />} path="/inserir" />
           
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
