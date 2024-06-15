import "./inserir.css";
import { Link } from "react-router-dom";
import Logo from "../../Assets/images/LogoClinik .png";
import Manicomio2 from "../../Assets/images/manicomio2.jpg";
import Manicomio3 from "../../Assets/images/manicomio3.png";
import Gif from "../../Assets/images/Gif.gif";
import Whats from "../../Assets/images/whatsapp.png";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from "react";

import ScrollLock from "react-scrolllock";

function Inserir() {
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
        alert(`Medico ${dadoAPI.nome} cadastrado!`);
      })
      .catch((erro) => {
        console.log(erro);
      });
  };
  return (
    <ScrollLock>
    <div className="App">
      <div id="all">
     
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

        <div className="container">
          <div className="formulario">
            <div className="form_area">
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
                  type="text"
                  minlength="2"
                  maxlength="6"
                  onChange={(e) => setStateCRM(e.target.value)}
                />
              </div>
              <div class="buttons">
                <button id="b1">Enviar</button>
                
              </div>
              <p class="log">
                Já possui uma conta?
                <a class="link">
                  Faça seu Login!
                </a>
              </p>
            </form>
              
        
        </div>
        </div> 




            
             <div class="carousel-container">
          <Carousel onAnimationStart={2}>
              <Carousel.Item interval={3000}>
                <img className="slide" src={Manicomio2} alt="Image 1" />
              </Carousel.Item>
              <Carousel.Item interval={200}>
                <img className="slide" src={Manicomio3} alt="Image 2" />
              </Carousel.Item>

              <Carousel.Item interval={5000}>
                <img className="slide" src={Gif} alt="Image 3" />
              </Carousel.Item>
            </Carousel>
          </div>
          </div>
          </div>
          </div>
          
          </ScrollLock>
  );
}

export default Inserir;



 {/* <button id="b1">
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
        </button> */}