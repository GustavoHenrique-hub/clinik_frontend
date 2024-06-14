import { useState } from "react";
import "./inserir.css";
import LogoCliniK2 from "../../assets/images/LogoCliniK2.png";
import Queda from "../../assets/images/Queda.gif";
import manicomio2 from "../../assets/images/manicomio2.jpg";
import manicomio3 from "../../assets/images/manicomio3.JPG";
import Gif from "../../assets/images/Gif.gif";

function Insert() {
  const [stateNome, setStateNome] = useState("");
  const [stateCRM, setStateCRM] = useState("");
  const [stateTelefone, setStateTelefone] = useState("");

  let slideIndex = 0;

  function moveSlide(n) {
    const slides = document.querySelectorAll(".slide");
    slideIndex += n;

    if (slideIndex >= slides.length) {
      slideIndex = 0;
    }
    if (slideIndex < 0) {
      slideIndex = slides.length - 1;
    }

    const offset = -slideIndex * 100;
    document.querySelector(
      ".carousel"
    ).style.transform = `translateX(${offset}%)`;
  }

  const InsertPost = (e) => {
    fetch(`http://localhost:8080/medico/inserir`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        nome: stateNome,
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
        alert("ERRO:", erro);
      });
  };

  return (
    <div className="App">
      <header class="header">
        <img id="logo" src={LogoCliniK2} alt="" />

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
            <form action="">
              <div class="form_group">
                <label class="sub_title" for="name">
                  Nome
                </label>
                <input
                  placeholder="Digite seu nome"
                  class="form_style"
                  type="text"
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
                />
              </div>
              <div class="form_group">
                <label class="sub_title" for="CRM">
                  CRM
                </label>
                <input
                  placeholder="Digite seu CRM"
                  id="email"
                  class="form_style"
                  type="email"
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
                <button id="b2">
                  <a href="./crazy/crazy.html">EU NÃO!</a>
                </button>
              </div>
              <p class="log">
                Já possui uma conta?{" "}
                <a class="link" href="">
                  Faça seu Login!
                </a>
              </p>
            </form>
          </div>
        </div>
        <div class="carousel-container">
          <div class="carousel">
            <div class="slide">
              <img src={manicomio2} alt="Image 1" />
            </div>
            <div class="slide">
              <img src={manicomio3} alt="Image 2" />
            </div>
            <div class="slide">
              <img src={Gif} alt="Image 3" />
            </div>
          </div>
          <a class="prev" onclick={moveSlide(-1)}>
            &#10094;
          </a>
          <a class="next" onclick={moveSlide(1)}>
            &#10095;
          </a>
        </div>
      </div>
    </div>
  );
}

export default Insert;
