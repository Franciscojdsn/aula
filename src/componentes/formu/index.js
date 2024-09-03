import Barra from "../barra"
import Botao from "../botao"

function Formu (props) {
    return (
        <form action="/action_page.php" id="forms">
 
      <h1 id="principal">Inscreva-se</h1>

  <div className="mb-3 mt-3">
    <label for="email" className="form-label">{props.email}</label>
    <input type="email" className="form-control" id="email" placeholder="Enter email" name="email"/>
  </div>

  <div className="mb-3 mt-3">
    <label for="email" className="form-label">Endereço</label>
    <input type="email" className="form-control" id="email" placeholder="Enter email" name="email"/>
  </div>

  <div className="mb-3 mt-3">
    <label for="email" className="form-label">Nome: </label>
    <input type="email" className="form-control" id="cpf" placeholder="Enter email" name="email"/>
    <label for="email" className="form-label">CPF: </label>
    <input type="email" className="form-control" id="cpf" placeholder="Enter email" name="email"/>
  </div>

  <div className="mb-3">
    <label for="pwd" className="form-label">Password:</label>
    <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd"/>
  </div>

  <div className="form-check mb-3">
    <label className="form-check-label">
      <input className="form-check-input" type="checkbox" name="remember"/> Remember me
    </label>
  </div>
  
  <button type="submit" className="btn btn-primary">Login</button>
  <Botao title="Inicio"/>
</form>

    )
}

export default Formu