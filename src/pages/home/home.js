import "./home.css";
import LogoCliniK2 from "../../assets/images/LogoCliniK2.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="App">
      <header class="header">
        <img id="logo" src={LogoCliniK2} alt="logo" />

        <h1>FALE CONOSCO:</h1>
        <div class="cards">
          <div class="card">
            <div class="card2">
              <div class="whatsapp">
                <a
                  id="whats"
                  href="https://wa.me/+5511969784999/?text=Olá CliniK, podemos conversar?"
                >
                  <i class="fa fa-whatsapp" aria-hidden="true">
                    (11-96978-4999)
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <hr id="linha1" />
      <div className="container">
        <button id="b1">
          <Link to="/busca">Busca</Link>
        </button>
        <button id="b1">
          <Link to="/inserir">Inserir</Link>
        </button>
        <button id="b1">
          <Link to="/alterar">Alterar</Link>
        </button>
        <button id="b1">
          <Link to="/deletar">Deletar</Link>
        </button>
      </div>
    </div>
  );
}

export default Home;
