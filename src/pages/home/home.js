import "./home.css";
import { Link } from "react-router-dom";
import Logo from "../../Assets/images/LogoClinik .png";
import Manicomio2 from "../../Assets/images/manicomio2.jpg";
import Manicomio3 from "../../Assets/images/manicomio3.png";
import Gif from "../../Assets/images/Gif.gif";
import Whats from "../../Assets/images/whatsapp.png";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';


function Home() {
  
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
            
        <div id="form_area-home">



            <button id="botao-home"><Link to="/inserir">Cadastrar novo médico</Link></button>    
        
            <button id="botao-home"><Link to="/busca">Buscar Médico via ID</Link></button>
        
            <button id="botao-home"><Link to="/alterar">Alterar dados</Link></button>
        
            <button id="botao-home"><Link to="/deletar">Deletar médico</Link></button>
              
        
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

export default Home;