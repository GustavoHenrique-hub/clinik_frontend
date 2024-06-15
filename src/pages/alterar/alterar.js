import "./alterar.css";
import { useState } from "react";
import Logo from "../../Assets/images/LogoClinik .png";
import Manicomio2 from "../../Assets/images/manicomio2.jpg";
import Manicomio3 from "../../Assets/images/manicomio3.png";
import Gif from "../../Assets/images/Gif.gif";
import Whats from "../../Assets/images/whatsapp.png";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import ScrollLock from "react-scrolllock";

function Alterar() {
  const [stateId, setStateId] = useState("");
  const [satateNewName, setStateNewName] = useState("");
  const [satateNewCRM, setStateNewCRM] = useState("");
  const [satateNewTel, setStateNewTel] = useState("");

  const [stateName, setStateName] = useState("");
  const [stateCRM, setStateCRM] = useState("");
  const [stateTel, setStateTel] = useState("");

  const callPutApi = (e) => {
    const alterById = `http://localhost:8080/medico/altera/${stateId}`;

    e.preventDefault();
    try {
      fetch(alterById, {
        method: 'PUT',
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          nome: satateNewName,
          crm: satateNewCRM,
          telefone: satateNewTel
        }),
      })
        .then((response) => {
          console.log("Response received:", response);

          return response.json();
        })
        .then((dadoUsuario) => {
          console.log(dadoUsuario);
          alert("Usuário alterado com sucesso!!")
        });
    } catch (err) {
      console.log("ERRO: ", err);
    }
  }

  const callSearchApi = (e) => {
    const buscaPorId = `http://localhost:8080/medico/busca/${stateId}`;

    e.preventDefault();
    try {
      fetch(buscaPorId)
        .then((response) => {
          console.log("Response received:", response);

          return response.json();
        })
        .then((dadoUsuario) => {
          console.log(dadoUsuario);
          setStateName(dadoUsuario.nome);
          setStateCRM(dadoUsuario.crm)
          setStateTel(dadoUsuario.telefone);
        });
    } catch (err) {
      console.log("ERRO: ", err);
    }
  }

  return (
    <ScrollLock>
    <div className="App">
      <div id="all">     
        <header>
          <img id="logo" src={Logo} />
          <h2>
            Fale conosco: 11 96978 - 4999
            <a href="https://wa.me/+5511969784999/?text=Olá CliniK, podemos conversar?"target="_blank">
              <img id="logo-whats" src={Whats} />
            </a>
          </h2>
        </header>
        
        <hr id="linha1" />

        <div className="container">
          <div className="formulario">
            <div className="form_area">
            <label className="title" htmlFor="ID">Alterar dados</label>
            <form method="PUT">
              <div className="form_group">
                <label className="sub_title" htmlFor="ID">Id</label>
                <input placeholder="Digite o Id" className="form_style" type="text" onChange={(e) => {
                    setStateId(e.target.value);
                    setStateNewName("")
                    setStateNewCRM("")
                    setStateNewTel("")
                  }}/>
                  <button id="b1" onClick={callSearchApi}>Buscar</button>
                  </div>
                
              
              <div className="form_group">
                <label className="sub_title" htmlFor="name">
                  Nome
                </label>
                <input
                  placeholder={stateName}
                  className="form_style"
                  type="text"
                  onChange={(e) => setStateNewName(e.target.value)}
                />
              </div>
              <div className="form_group">
                <label className="sub_title" htmlFor="CRM">
                  CRM
                </label>
                <input
                  placeholder={stateCRM}
                  id="email"
                  type="text"
                  minLength="2"
                  maxLength="6"
                  onChange={(e) => setStateNewCRM(e.target.value)}
                />
              </div>
              <div className="form_group">
                <label className="sub_title" htmlFor="Telefone">
                  Telefone
                </label>
                <input
                  placeholder={stateTel}
                  id="email"
                  className="form_style"
                  type="text"
                  onChange={(e) => setStateNewTel(e.target.value)}
                />
                <button id="b1" onClick={callPutApi}>Enviar</button>
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

export default Alterar;



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