import "../styles/projetos.css";
import HarryPotter from "../images/harry-potter.png";
import JSON from "../images/Previsao-do-Tempo.png";
import BatalhaNaval from "../images/Batalha-Naval.png";
import Codificador from "../images/codificador.png";
import Curriculo from "../images/curriculo.png";
import Shopping from "../images/shopping.png";
import Link from "../images/link.png";

function Projetos(){
    const list = [
        {
            id: "1",
            name: "Informações sobre o tempo",
            img: JSON,
            detail: "Site feito em JavaScript e que utiliza JSON para consultar uma API que fornece informações meteorológicas de qualquer lugar do mundo.",
            javascript: "https://github.com/PriscilaSilvaAlves/PriscilaSilvaAlves.github.io/tree/main/meteorologico",
            live: "https://priscilasilvaalves.github.io/meteorologico/index.html",
            typescript: "",
        },
        {
            id: "2",
            name: "Batalha Naval",
            img: BatalhaNaval,
            detail: "Jogo desenvolvido em JavaScript e testado com Jest.",
            javascript: "https://github.com/PriscilaSilvaAlves/PriscilaSilvaAlves.github.io/tree/main/Battlership",
            live: "https://priscilasilvaalves.github.io/Battlership/index.html",
            typescript: "",
        },
        {
            id: "3",
            name: "Codificador de Texto",
            img: Codificador,
            detail: "Aplicativo feito em React para codificar e decodificar o texto informado pelo usuário. Utiliza REGEX para tratar os dados de entrada e WAI-ARIA para adicionar opções de acessibilidade.",
            javascript: "https://github.com/PriscilaSilvaAlves/PriscilaSilvaAlves.github.io/tree/main/encryptDecrypt",
            live: "https://priscilasilvaalves.github.io/encryptDecrypt/typescript/build/",
            typescript: "https://github.com/PriscilaSilvaAlves/PriscilaSilvaAlves.github.io/tree/main/encryptDecrypt/typescript",
        },
        {
            id: "4",
            name: "Gerador de Currículo",
            img: Curriculo,
            detail: "Site feito em React para gerar um currículo automaticamente. Utiliza WAI-ARIA para adicionar opções de acessibilidade.",
            javascript: "https://github.com/PriscilaSilvaAlves/PriscilaSilvaAlves.github.io/tree/main/curriculo",
            live: "https://priscilasilvaalves.github.io/curriculo/build/",
            typescript: "",
        },
        {
            id: "5",
            name: "Jogo da Memória do Harry Potter",
            img: HarryPotter,
            detail: "Jogo desenvolvido em React em que o usuário deve acertar a maior quantidade de cartas diferentes seguidas. O site utiliza WAI-ARIA para adicionar opções de acessibilidade.",
            javascript: "https://github.com/PriscilaSilvaAlves/PriscilaSilvaAlves.github.io/tree/main/memorygame",
            live: "https://priscilasilvaalves.github.io/memorygame/build/",
            typescript: "",
        },
        {
            id: "6",
            name: "Site de compras",
            img: Shopping,
            detail: "Site de compras feito em React, testado com Jest, utilizando LocalStorage para armazenar os itens do carrinho e WAI-ARIA para adicionar opções de acessibilidade.",
            javascript: "https://github.com/PriscilaSilvaAlves/PriscilaSilvaAlves.github.io/tree/main/shopping",
            live: "https://priscilasilvaalves.github.io/shopping/build/",
            typescript: "",
        }];
    return (
        <div id="projetos">
            <h1>Projetos</h1>
            <div id="projetosLista">
                {list.map((item) => (
                    <div className="item" id={"item-"+item.id} key={item.id}>
                        <img src={ item.img } alt={ item.name } className="projImg" aria-describedby={ "text-"+item.id }></img>
                        <div className="text" id={ "text-"+item.id }>
                            <p className="title">{ item.name }</p>
                            <p className="detail">{ item.detail }</p>
                            <a href={ item.live } target="_blank" rel="noreferrer" aria-label={ "Abrir uma nova guia com a visualização da página do projeto "+item.name }>Visualização em tempo real <img src={Link} alt=""></img></a>
                            <a href={ item.javascript } target="_blank" rel="noreferrer" aria-label={ "Abrir uma nova guia com a visualização do código no GitHub do projeto "+item.name }>Código JavaScript no GitHub <i className="devicon-github-original"></i></a>
                            { (item.typescript==="") ? "" : <a href={ item.typescript } target="_blank" rel="noreferrer" aria-label={ "Abrir uma nova guia com a visualização do código no GitHub do projeto "+item.name }>Código TypeScript no GitHub <i className="devicon-github-original"></i></a>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projetos;