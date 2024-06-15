import "./deletar.css";
import LogoCliniK2 from "../../assets/images/LogoCliniK2.png";
import Queda from "../../assets/images/Queda.gif";
import Gif from "../../assets/images/Gif.gif";
import { useState } from "react";

function Delete() {
  const [stateResultadoApi, setStateResultadoApi] = useState("");
  const [stateId, setStateId] = useState("");

  const DeleteID = (e) => {
    e.preventDefault();

    fetch(`http://localhost:8080/medico/delete/${stateId}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
    })
      .then((resposta) => {
        if (!resposta.ok) {
          throw new Error(`Network response was not ok ${resposta.statusText}`);
        }
        return resposta.json();
      })
      .then((dadoAPI) => {
        console.log(dadoAPI);
        setStateResultadoApi(dadoAPI.message);
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

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
      <div class="container">
        <div class="formulario">
          <div class="form_area">
            <p class="title">DELETAR ID</p>
            <form onSubmit={DeleteID} method="DELETE">
              <div class="form_group">
                <label class="sub_title" for="ID"></label>
            <form action="">
              <div class="form_group">
                <label class="sub_title" for="name"></label>
                <input
                  placeholder="Digite o ID"
                  class="form_style"
                  type="text"
                  onChange={(e) => setStateId(e.target.value)}
                />
              </div>
              <div class="buttons">
                <button id="b1">
                  DELETAR <img id="queda" src={Queda} alt="gif" />
                </button>
              </div>
                />
              </div>
              <div class="form_group">
                <button id="b1">
                  DELETAR!
                  <img id="queda" src="./images/Queda.gif" alt="gif" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

              <span>{stateResultadoApi}</span>
            </form>
          </div>
        </div>
        <div>
          <img class="gif" src={Gif} alt="Gif" />
        </div>
      </div>
    </div>
  );
}

export default Delete;
