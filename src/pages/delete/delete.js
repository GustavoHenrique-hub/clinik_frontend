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
      
    <div id="all">
     
        <header>
          <img id="logo" src={Logo} />
          <h2>Fale conosco: 11 96978 - 4999
            <a
              href="https://wa.me/+5511969784999/?text=Olá CliniK, podemos conversar?"
              target="_blank">
              <img id="logo-whats" src={Whats} />
            </a>
          </h2>
        </header>
        
        <hr id="linha1" />

        <div className="xaxa">
        
        <div className="formulario">
        
        <div className="form_area">
            
        <label className="title" htmlFor="ID">Deletar via ID</label>

            <form onSubmit={DeleteID} method="DELETE">

        <div id="form_group-delete">
                
                
                <input
                  placeholder="Digite o ID"
                  class="form_style"
                  type="text"
                  onChange={(e) => setStateId(e.target.value)}
                />

          <button id="b1">DELETAR</button>

          <span>{stateResultadoApi}</span>

        </div>              

            </form>
              
        
        </div>
        </div> 




            
        <div className="carousel-container">
          <Carousel onAnimationStart={100}>
              <Carousel.Item onAnimationStart={100} interval={3000}>
                <img className="slide1" src={Manicomio2} alt="Image 1" />
              </Carousel.Item>
              <Carousel.Item onAnimationStart={100} interval={100}>
                <img className="slide2" src={Manicomio3} alt="Image 2" />
              </Carousel.Item>

              <Carousel.Item onAnimationStart={100} interval={5000}>
                <img className="slide3" src={Gif} alt="Image 3" />
              </Carousel.Item>
            </Carousel>
          </div>
          </div>
          </div>
          </div>
  );
}

export default Delete;