import "../styles/nav/nav.css";
import "../styles/nav/nav-ul.css";
import "../styles/nav/nav-li.css";
import "../styles/nav/nav-a.css";
import "../styles/nav/nav-imagem.css";
import "../styles/nav/nav-button.css";
import Tracos from "../images/tracos.png";
import { Link } from "react-router-dom";

function Nav(){
    function showMenu(){
        let ul = document.querySelector(".nav__ul");
        if(ul.style.display===""){
            ul.style.display="flex";
        }else if(ul.style.display==="flex"){
            ul.style.display="";
        }
    }
    return (
        <nav className="nav">
            <button className="nav__button" onClick={ () => showMenu() }>
                <img className="nav__imagem" src={ Tracos } alt="" />
            </button>
            <ul className="nav__ul">
                <li className="nav__li"><Link className="nav__a" to="#cabecalho">Início</Link></li>
                <li className="nav__li"><Link className="nav__a" to="#quem-e">Quem é Priscila?</Link></li>
                <li className="nav__li"><Link className="nav__a" to="#formacao">Formação</Link></li>
                <li className="nav__li"><Link className="nav__a" to="#projetos">Projetos</Link></li>
                <li className="nav__li"><Link className="nav__a" to="#contato">Contato</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;