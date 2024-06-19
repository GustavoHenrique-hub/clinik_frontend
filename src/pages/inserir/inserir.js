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
        
        <div id="form_area-inserir">
            
        <label className="title" htmlFor="ID">Cadastro de Profissional</label>
            
            <form onSubmit={InsertPost} method="POST">
              
                <div id="form_group-inserir">
                
                <label className="sub_title" for="name">Nome: </label>

                <input
                  placeholder="Digite o nome"
                  type="text"
                  onChange={(e) => setStateName(e.target.value)}
                />

              <br/>
                
                <label className="sub_title" for="name">Telefone: </label>
                
                <input
                  placeholder="Digite o telefone"
                  type="text"
                  onChange={(e) => setStateTelefone(e.target.value)}
                />
              
              <br/>

                <label className="sub_title" for="CRM">CRM: </label>

                <input
                  placeholder="Digite o CRM"
                  id="number"
                  type="text"
                  minlength="2"
                  maxlength="6"
                  onChange={(e) => setStateCRM(e.target.value)}
                />

              
                  
                </div>

                

                
                
              
             
            </form>
              
            <button id="b1">Enviar</button>
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

export default Inserir;