import "../styles/cabecalho/cabecalho.css";
import "../styles/cabecalho/cabecalho-bloco-texto.css";
import "../styles/cabecalho/cabecalho-bloco-nome.css";
import "../styles/cabecalho/cabecalho-bloco.css";
import "../styles/cabecalho/cabecalho-imagem.css";
import "../styles/cabecalho/cabecalho-bloco-imagem.css";
import "../styles/cabecalho/cabecalho-bloco-imagens.css";
import Perfil from "../images/perfil.jpg";
import HTML from "../images/logo-html.png";
import CSS from "../images/logo-css.png";
import JavaScript from "../images/logo-javascript.png";
import React from "../images/react-logo.png";
import PHP from "../images/logo-php.png";
import mysql from "../images/mysql.png"

function Header(){

    return (
        <header id="cabecalho" className="cabecalho">
            <div className="cabecalho__bloco">
                <h1 className="cabecalho__bloco-texto">Bem-vindo(a) ao meu portfólio de projetos</h1>
                <p className="cabecalho__bloco-nome">Priscila Alves - Desenvolvedora Full-Stack</p>
                <div className="cabecalho__bloco-imagens">
                    <img className="cabecalho__bloco-imagem" src={HTML} alt="" />
                    <img className="cabecalho__bloco-imagem" src={CSS} alt="" />
                    <img className="cabecalho__bloco-imagem" src={JavaScript} alt="" />
                    <img className="cabecalho__bloco-imagem" src={React} alt="" />
                    <img className="cabecalho__bloco-imagem" src={PHP} alt="" />
                    <img className="cabecalho__bloco-imagem" src={mysql} alt="" />
                </div>
            </div>
            <img className="cabecalho__imagem" src={ Perfil } alt="Priscila é uma mulher morena de cabelo curto e escovado, vestindo uma blusa verde e usando batom roxo."></img>
        </header>
    )
}

export default Header;