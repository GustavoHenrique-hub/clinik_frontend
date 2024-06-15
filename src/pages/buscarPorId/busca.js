import { useState } from "react";
import "./busca.css";
import Logo from "../../Assets/images/LogoCliniK2.png";
import Queda from "../../Assets/images/Queda.gif";
import Manicomio2 from "../../Assets/images/manicomio2.jpg";
import Manicomio3 from "../../Assets/images/manicomio3.png";
import Gif from "../../Assets/images/Gif.gif";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import Whats from "../../Assets/images/whatsapp.png";

function Busca() {
  const [] = useState();

  return (
    <div className="App">
      <div id="body">
        <header>
          <img id="logo" src={Logo} />
          <h2>
            Fale conosco: 11 96978 - 4999
            <a
              href="https://wa.me/+5511969784999/?text=Olá CliniK, podemos conversar?"
              target="_blank"
            >
              <img id="logo-whats" src={Whats} />
            </a>
          </h2>
        </header>

        <hr id="linha1" />
        <div class="container">
          <div class="formulario">
            <div class="form_area">
              <p class="title">Busca por ID</p>
              <input
                className="search-name"
                type="text"
                placeholder="pesquisar"
              ></input>
              <button id="b1">buscar</button>
            </div>
          </div>

          <div class="carousel-container">
            <Carousel onAnimationStart={1}>
              <Carousel.Item interval={1500}>
                <img className="slide" src={Manicomio2} alt="Image 1" />
              </Carousel.Item>
              <Carousel.Item interval={200}>
                <img className="slide" src={Manicomio3} alt="Image 2" />
              </Carousel.Item>

              <Carousel.Item interval={1500}>
                <img className="slide" src={Gif} alt="Image 3" />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Busca;

{
  /* <div class="container">
        <h1>Pesquisa de profissional</h1>
        <input
          className="search-name"
          type="text"
          placeholder="pesquisar"
        ></input>
      </div> */
}
