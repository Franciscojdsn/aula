import Botao from "../botao";
import logo from '../../assets/imagens/logo.png';
import { Link, Route } from "react-router-dom";

function Barra () {
    
    return (
        <header>
          <nav className="navbar navbar-expand-sm bg-dark navbar-dark" >
          <img src={logo} alt="logo do assasins creed" id="logo"/>
            <div className="container-fluid">
              <Botao title="Inicio"/>
              <a className="navbar-brand" href="#">
                <img src="#" alt="" className="rounded-pill"/>
              </a>
            </div>
            <Botao 
            title="Login"
            id="botao"
            />
            <Botao 
            title="Entrar"
            id="botao"
            />
            <div>
              <Botao 
              title="Sobre"
              id="botao"
              sobre="/Sobre"
              />
            </div>
          </nav>
        </header>      
    )
}

export default Barra;