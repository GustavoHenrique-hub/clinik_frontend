import "./busca.css";
import { Link } from "react-router-dom";
import Logo from "../../Assets/images/LogoClinik .png";
import Manicomio2 from "../../Assets/images/manicomio2.jpg";
import Manicomio3 from "../../Assets/images/manicomio3.png";
import Gif from "../../Assets/images/Gif.gif";
import Whats from "../../Assets/images/whatsapp.png";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from "react";


function Busca() {
  const [stateId, setStateId] = useState("");
  const [stateName, setStateName] = useState("");
  const [stateCrm, setStateCrm] = useState("");
  const [stateTel, setStateTel] = useState("");
 
  const callApi = (e) => {
    e.preventDefault();
 
    fetch(`http://localhost:8080/medico/busca/${stateId}`, {
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
    })
    .then((response) => {
      return response.json();
    }).then((dadoApi) => {
      console.log(dadoApi)
      setStateName(dadoApi.nome)
      setStateCrm(dadoApi.crm)
      setStateTel(dadoApi.telefone)
    })
  }
  return (
        <div className="App">
      
        <div id="all">
     
            <header>
              <img id="logo" src={Logo} />
                <h2>Fale conosco: 11 96978 - 4999
                  <a  href="https://wa.me/+5511969784999/?text=Olá CliniK, podemos conversar?"
                      target="_blank"><img id="logo-whats" src={Whats} />
                  </a>
                </h2>
            </header>
        
        <hr id="linha1" />

        <div className="xaxa">
        
        <div className="formulario">
            
        <div className="form_area">

        <label className="title" htmlFor="ID">Pesquisa por ID</label>

          <form method="GET">

          <div id="form_group-busca">

            
                <input
                className="search-name"
                type="text"
                placeholder="Digite o ID"
                onChange={(e) => {
                setStateId(e.target.value);
                    console.log(e.target.value)
                      }}
                ></input>
        
            <button id="b1" onClick={callApi}>Buscar</button>
            
          </div>

 
          <div id="form_group-busca2">
              
              <label className="sub_title" htmlFor="name">Nome: </label>

              <input type="text" value={stateName}></input>

              <br/>

              <label className="sub_title" htmlFor="CRM">CRM: </label> 

              <input type="text" value={stateCrm}></input>
          
          
                    <br/>

              <label className="sub_title" htmlFor="Telefone">Telefone: </label>

              <input type="text" value={stateTel}></input>
        
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

export default Busca;