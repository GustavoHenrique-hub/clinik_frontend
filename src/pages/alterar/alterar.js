import "./alterar.css";
import Logo from "../../assets/images/LogoCliniK2.png";
import gif from "../../assets/images/Queda.gif";
import { useState } from "react";

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
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          nome: satateNewName,
          crm: satateNewCRM,
          telefone: satateNewTel,
        }),
      })
        .then((response) => {
          console.log("Response received:", response);

          return response.json();
        })
        .then((dadoUsuario) => {
          console.log(dadoUsuario);
          alert("Usuário alterado com sucesso!!");
        });
    } catch (err) {
      console.log("ERRO: ", err);
    }
  };

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
          setStateCRM(dadoUsuario.crm);
          setStateTel(dadoUsuario.telefone);
        });
    } catch (err) {
      console.log("ERRO: ", err);
    }
  };
  return (
    <div className="App">
      <header className="header">
        <img id="logo" src={Logo} alt="logo" />

        <h1>FALE CONOSCO:</h1>
        <div className="cards">
          <div className="card">
            <div className="card2">
              <div className="whatsapp">
                <a
                  id="whats"
                  href="https://wa.me/+5511969784999/?text=Olá CliniK, podemos conversar?"
                >
                  <i className="fa fa-whatsapp" aria-hidden="true">
                    (11-96978-4999)
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <hr id="linha1" />
      <div className="container">
        <div className="formulario">
          <div className="form_area">
            <p className="title">Alterar</p>
            <form method="PUT">
              <div className="form_group">
                <label className="sub_title" htmlFor="ID">
                  Id
                </label>
                <input
                  placeholder="Digite o Id"
                  className="form_style"
                  type="text"
                  onChange={(e) => {
                    setStateId(e.target.value);
                    setStateNewName("");
                    setStateNewCRM("");
                    setStateNewTel("");
                  }}
                />
                <button id="b1" onClick={callSearchApi}>
                  Buscar
                </button>
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
                  className="form_style"
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
              </div>
              <div className="buttons">
                <button id="b1" onClick={callPutApi}>
                  Enviar
                </button>
                <img id="queda" src={gif} alt="gif" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Alterar;
