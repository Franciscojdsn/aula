import { Link } from "react-router-dom"

function botao (props) {
    return (
        <Link to={props.sobre}id={props.id}>{props.title}</Link> 
        /*<button onClick={props.funcao} type="button" id="botao" className="btn btn-outline-light">{props.title}</button>*/
    )
}

export default botao