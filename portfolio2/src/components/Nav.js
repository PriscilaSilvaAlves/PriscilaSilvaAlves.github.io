import "../styles/nav/nav.css";
import "../styles/nav/nav-ul.css";
import "../styles/nav/nav-li.css";
import "../styles/nav/nav-a.css";
import "../styles/nav/nav-imagem.css";
import "../styles/nav/nav-button.css";
import Tracos from "../images/tracos.png";

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
                <li className="nav__li"><a className="nav__a" href="#cabecalho">Início</a></li>
                <li className="nav__li"><a className="nav__a" href="#quem-e">Quem é Priscila?</a></li>
                <li className="nav__li"><a className="nav__a" href="#formacao">Formação</a></li>
                <li className="nav__li"><a className="nav__a" href="#projetos">Projetos</a></li>
                <li className="nav__li"><a className="nav__a" href="#contato">Contato</a></li>
            </ul>
        </nav>
    );
}

export default Nav;