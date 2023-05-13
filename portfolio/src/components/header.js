import "../styles/header.css";
import Perfil from "../images/perfil.jpg";

function Header(){

    return (
        <header>
            <div id="welcome">
                <h1 id="animation">Bem-vindo(a) ao meu portfólio de projetos</h1>
                <p>Priscila Alves - Desenvolvedora Front-End</p>
            </div>
            <img src={ Perfil } alt="Priscila é uma mulher morena de cabelo curto e escovado, vestindo uma blusa verde e usando batom roxo."></img>
        </header>
    )
}

export default Header;