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

import ScrollLock from "react-scrolllock";

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
            <form method="GET">
            <label className="title" htmlFor="ID">Pesquisa por ID</label>
        <input
          className="search-name"
          type="text"
          placeholder="pesquisar"
          onChange={(e) => {
            setStateId(e.target.value);
            console.log(e.target.value)
          }}
        ></input>
        <button id="b1" onClick={callApi}>Buscar</button>

 
        <div className="resposta">
        <label className="sub_title" htmlFor="name">Nome: 
        <input type="text" value={stateName}></input>
          </label>
          <br/>
          <label className="sub_title" htmlFor="CRM">CRM: 
            <input type="text" value={stateCrm}></input>
            </label> 
          
          
          <br/>

          <label className="sub_title" htmlFor="Telefone">Telefone: 
          <input type="text" value={stateTel}></input>
          </label>
        </div>
        
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

export default Busca;



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