import "./delete.css";
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
            <p class="title">DELETAR ID</p>
            <form onSubmit={DeleteID} method="DELETE">
              <div class="form_group">
                <label class="sub_title" for="ID"></label>
                <input
                  placeholder="Digite o ID"
                  class="form_style"
                  type="text"
                  onChange={(e) => setStateId(e.target.value)}
                />
              </div>
              <div class="buttons">
                <button id="b1">
                  DELETAR 
                </button>
              </div>

              <span>{stateResultadoApi}</span>
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

export default Delete;



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