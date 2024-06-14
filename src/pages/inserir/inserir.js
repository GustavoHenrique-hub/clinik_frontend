import { useState } from "react";
import "./inserir.css";
import LogoCliniK2 from "../../assets/images/LogoCliniK2.png";
import Queda from "../../assets/images/Queda.gif";
import MoveSlide from "../../components/moveSlide/moveSlide";

function Insert() {
  const [stateName, setStateName] = useState("");
  const [stateCRM, setStateCRM] = useState("");
  const [stateTelefone, setStateTelefone] = useState("");

  const InsertPost = (e) => {
    e.preventDefault();

    fetch(`http://localhost:8080/medico/inserir`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        nome: stateName,
        crm: stateCRM,
        telefone: stateTelefone,
      }),
    })
      .then((resposta) => {
        return resposta.json();
      })
      .then((dadoAPI) => {
        console.log(dadoAPI);
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
            <p class="title">CADASTRO</p>
            <form onSubmit={InsertPost} method="POST">
              <div class="form_group">
                <label class="sub_title" for="name">
                  Nome
                </label>
                <input
                  placeholder="Digite seu nome"
                  class="form_style"
                  type="text"
                  onChange={(e) => setStateName(e.target.value)}
                />
              </div>
              <div class="form_group">
                <label class="sub_title" for="name">
                  Telefone
                </label>
                <input
                  placeholder="Digite seu telefone"
                  class="form_style"
                  type="text"
                  onChange={(e) => setStateTelefone(e.target.value)}
                />
              </div>
              <div class="form_group">
                <label class="sub_title" for="CRM">
                  CRM
                </label>
                <input
                  placeholder="Digite seu CRM"
                  id="number"
                  class="form_style"
                  type="number"
                  onChange={(e) => setStateCRM(e.target.value)}
                />
              </div>
              <div class="form_group">
                <label class="sub_title" for="password">
                  Senha
                </label>
                <input
                  placeholder="Digite uma senha"
                  id="SENHA"
                  class="form_style"
                  type="password"
                />
              </div>
              <div class="buttons">
                <button id="b1">CLARO!</button>
                <img id="queda" src={Queda} alt="gif" />
                <button id="b2">EU NÃO!</button>
              </div>
              <p class="log">
                Já possui uma conta?
                <a class="link" href="">
                  Faça seu Login!
                </a>
              </p>
            </form>
          </div>
        </div>
        <div>
          <MoveSlide />
        </div>
      </div>
    </div>
  );
}

export default Insert;
