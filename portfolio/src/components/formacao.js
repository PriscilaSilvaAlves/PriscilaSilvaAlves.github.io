import "../styles/formacao/formacao.css";
import "../styles/formacao/formacao-titulo.css";
import "../styles/formacao/formacao-item.css";
import "../styles/formacao/formacao-itens.css";
import "../styles/formacao/formacao-item-texto.css";
import "../styles/formacao/formacao-item-imagem.css";
import ufrn from "../images/brasao-ufrn.png";
import ifrn from "../images/logo-ifrn.png";
import odin from "../images/odin.png";
import one from "../images/one.png";

function Formacao(){
    const lista = [
        {
            id: "1",
            nome: "Engenharia de Telecomunicações",
            ano: "2018",
            foto: ufrn,
        },
        {
            id: "2",
            nome: "Ciências e Tecnologia",
            ano: "2015",
            foto: ufrn,
        },
        {
            id: "3",
            nome: "Técnico em Informática",
            ano: "2011",
            foto: ifrn,
        },
        {
            id: "4",
            nome: "Front-End",
            ano: "Atualmente",
            foto: one,
        },
        {
            id: "5",
            nome: "Front-End",
            ano: "Atualmente",
            foto: odin,
        }
    ];
    return (
        <div id="formacao" className="formacao">
            <h1 className="formacao__titulo">Minha formação</h1>
            <div className="formacao__itens">
            {
                lista.map((item) => (
                    <div className="formacao__item" key={ item.id }>
                        <img className="formacao__item-imagem" src={ item.foto } alt="Logo da instituição"/>
                        <p className="formacao__item-texto">{ item.nome }</p>
                        <p className="formacao__item-texto">{ item.ano }</p>
                    </div>
                ))
            }
            </div>
        </div>
    );
}

export default Formacao;