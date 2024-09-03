import './App.scss';
import Barra from './componentes/barra';
import Formu from './componentes/formu';
import Botao from './componentes/botao'
import Carrossel from './componentes/carrossel';
import Rodape from './componentes/rodape';

const nomes = [
  {

  }
]

function App() {
  return (
    <div className="App">
      <header>
        <Barra/>
      </header>
      <div>
        <Carrossel/>
      </div>
      <body>
        <section>
          <Formu email="Email:"/>
        </section>
      </body>
      <footer>
        <Rodape/>
      </footer>
    </div>
  )
}

export default App
