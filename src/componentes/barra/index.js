import Botao from "../botao";
import logo from '../../assets/imagens/logo.png'

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
            <Botao title="Login"/>
            <Botao title="Entrar"/>
            <Botao title="Sobre"/>

          </nav>
        </header>      
    )
}

export default Barra;