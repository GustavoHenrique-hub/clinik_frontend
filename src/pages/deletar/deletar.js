import { useState } from "react";
import "./deletar.css";

import logo from "../../assets/images/LogoCliniK2.png";
import fundo from "../../assets/images/capitone.jpg";
import Gif from "../../assets/images/Gif.gif";
import sala from "../../assets/images/manicomio2.jpg";
import sala1 from "../../assets/images/manicomio3.png";
import Queda from "../../assets/images/Queda.gif";

function Delete() {
  const [] = useState();
  return (
    <div className="App">
      <header class="header">
        <img id="logo" src="./images/LogoCliniK2.png" alt="" />

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
            <form action="">
              <div class="form_group">
                <label class="sub_title" for="name"></label>
                <input
                  placeholder="Digite o ID"
                  class="form_style"
                  type="text"
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

      <div class="carousel-container">
        <div class="carousel">
          <div class="slide">
            <img src="./images/manicomio2.JPG" alt="Image 1" />
          </div>
          <div class="slide">
            <img src="./images/manicomio3.jpg" alt="Image 2" />
          </div>
          <div class="slide">
            <img src="./images/Gif.gif" alt="Image 3" />
          </div>
        </div>
        <a class="prev" onclick="moveSlide(-1)">
          &#10094;
        </a>
        <a class="next" onclick="moveSlide(1)">
          &#10095;
        </a>
      </div>
    </div>
  );
}

export default Delete;
