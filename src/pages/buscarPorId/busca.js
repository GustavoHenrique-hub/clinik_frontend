import { useState } from "react";
import "./busca.css";
import Logo from "../../Assets/images/LogoClinik .png";

function Busca() {
  const [] = useState();

  return (
    <div className="App">
      <header class="header">
        <img src={Logo} />

        <div class="cards">
          <div class="card">
            <div class="card2">
              <div class="whatsapp">
                <a
                  id="whats"
                  href="https://wa.me/+5511969784999/?text=Olá CliniK, podemos conversar?"
                >
                  <i class="fa fa-whatsapp" aria-hidden="true">
                    {" "}
                    (11-96978-4999)
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <hr id="linha1" />
      <div class="container">
        <h1>Pesquisa de profissional</h1>
        <input
          className="search-name"
          type="text"
          placeholder="pesquisar"
        ></input>
      </div>
    </div>
  );
}

export default Busca;