import Barra from '../../componentes/barra';
import Carrossel from '../../componentes/carrossel';
import Formu from '../../componentes/formu';
import Rodape from '../../componentes/rodape';

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
  