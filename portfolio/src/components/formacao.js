import "../styles/formacao.css";
import Livros from "../images/pilha-de-livros.png";

function Formacao(){
    return (
        <div id="formacao">
            <h1>Minha formação</h1>
            <div id="formacaoLista">
                <img src={ Livros } alt="Pilha de livros"></img>
                <ul>
                    <li>Bacharelado em Engenharia de Telecomunicações (2018), pela Universidade 
                        Federal do Rio Grande do Norte
                    </li>
                    <li>Bacharelado em Ciências e Tecnologia (2015), pela 
                        Universidade Federal do Rio Grande do Norte
                    </li>
                    <li>Técnico Integrado em Informática (2011), pelo Instituto 
                        Federal de Educação, Ciência e Tecnologia do Rio Grande 
                        do Norte
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Formacao;