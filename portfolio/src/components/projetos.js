import "../styles/projetos/projetos.css";
import "../styles/projetos/projetos-titulo.css";
import "../styles/projetos/projetos-lista.css";
import "../styles/projetos/projetos-lista-item.css";
import "../styles/projetos/projetos-lista-iframe.css";
import "../styles/projetos/projetos-lista-item-title.css";
import "../styles/projetos/projetos-lista-item-text.css";
import "../styles/projetos/projetos-lista-item-link.css";
import "../styles/projetos/projetos-lista-item-detail.css";
import "../styles/projetos/projetos-lista-item-img.css";
import Link from "../images/link.png";

function Projetos(){
    const list = [
        {
            id: "1",
            name: "Informações sobre o tempo",
            vidio: <iframe className="projetos__lista-iframe" src="https://www.youtube.com/embed/5TTGKWaRVis" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
            detail: "Site feito em JavaScript e que utiliza JSON para consultar uma API que fornece informações meteorológicas de qualquer lugar do mundo.",
            javascript: "https://github.com/PriscilaSilvaAlves/PriscilaSilvaAlves.github.io/tree/main/meteorologico",
            live: "https://priscilasilvaalves.github.io/meteorologico/index.html",
            typescript: "",
        },
        {
            id: "2",
            name: "Batalha Naval",
            vidio: <iframe className="projetos__lista-iframe" src="https://www.youtube.com/embed/D8oE8s4zk34" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
            detail: "Jogo desenvolvido em JavaScript utilizando Orientação a Objetos e testado com Jest.",
            javascript: "https://github.com/PriscilaSilvaAlves/PriscilaSilvaAlves.github.io/tree/main/Battlership",
            live: "https://priscilasilvaalves.github.io/Battlership/index.html",
            typescript: "",
        },
        {
            id: "3",
            name: "Codificador de Texto",
            vidio: <iframe className="projetos__lista-iframe" src="https://www.youtube.com/embed/O7PVTauIpt4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
            detail: "Aplicativo feito em React para codificar e decodificar o texto informado pelo usuário. Utiliza REGEX para tratar os dados de entrada e WAI-ARIA para adicionar opções de acessibilidade.",
            javascript: "https://github.com/PriscilaSilvaAlves/PriscilaSilvaAlves.github.io/tree/main/encryptDecrypt",
            live: "https://priscilasilvaalves.github.io/encryptDecrypt/typescript/build/",
            typescript: "https://github.com/PriscilaSilvaAlves/PriscilaSilvaAlves.github.io/tree/main/encryptDecrypt/typescript",
        },
        {
            id: "4",
            name: "Gerador de Currículo",
            vidio: <iframe className="projetos__lista-iframe" src="https://www.youtube.com/embed/TmUuL8n7yv8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
            detail: "Site feito em React para gerar um currículo automaticamente. Utiliza WAI-ARIA para adicionar opções de acessibilidade.",
            javascript: "https://github.com/PriscilaSilvaAlves/PriscilaSilvaAlves.github.io/tree/main/curriculo",
            live: "https://priscilasilvaalves.github.io/curriculo/build/",
            typescript: "",
        },
        {
            id: "5",
            name: "Jogo da Memória do Harry Potter",
            vidio: <iframe className="projetos__lista-iframe" src="https://www.youtube.com/embed/aSKdymWP-pI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
            detail: "Jogo desenvolvido em React em que o usuário deve acertar a maior quantidade de cartas diferentes seguidas. O site utiliza WAI-ARIA para adicionar opções de acessibilidade.",
            javascript: "https://github.com/PriscilaSilvaAlves/PriscilaSilvaAlves.github.io/tree/main/memorygame",
            live: "https://priscilasilvaalves.github.io/memorygame/build/",
            typescript: "",
        },
        {
            id: "6",
            name: "Site de compras",
            vidio: <iframe className="projetos__lista-iframe" src="https://www.youtube.com/embed/txr3SZwH8_8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
            detail: "Site de compras feito em React, testado com Jest, utilizando LocalStorage para armazenar os itens do carrinho e WAI-ARIA para adicionar opções de acessibilidade.",
            javascript: "https://github.com/PriscilaSilvaAlves/PriscilaSilvaAlves.github.io/tree/main/shopping",
            live: "https://priscilasilvaalves.github.io/shopping/build/",
            typescript: "",
        },
        {
            id: "7",
            name: "Portfólio",
            vidio: <iframe className="projetos__lista-iframe" src="https://www.youtube.com/embed/L3LnX4oT8qg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
            detail: "Projeto Full-Stack feito em React e PHP. No Front-End foram utilizados conceitos de Mobile First, Atomic Designer e BEM. No Back-End foi utilizada uma API para integração com o banco de dados MySQL. A comunicação foi feita utilizando Axios e JSON",
            javascript: "https://github.com/PriscilaSilvaAlves/PriscilaSilvaAlves.github.io/tree/main/portfolio2",
            live: "https://priscilasilvaalves.github.io/portfolio2/build",
            typescript: "",
        }
    ];
    return (
        <div id="projetos" className="projetos">
            <h1 className="projetos__titulo">Projetos</h1>
            <div className="projetos__lista">
                {list.map((item) => (
                    <div className="projetos__lista-item" key={item.id}>
                        { item.vidio }
                        <div className="projetos__lista-item-text">
                            <p className="projetos__lista-item-title">{ item.name }</p>
                            <p className="projetos__lista-item-detail">{ item.detail }</p>
                            <a className="projetos__lista-item-link" href={ item.live } target="_blank" rel="noreferrer" aria-label={ "Abrir uma nova guia com a visualização da página do projeto "+item.name }>Visualização em tempo real <img className="projetos__lista-item-img" src={Link} alt=""></img></a>
                            <a className="projetos__lista-item-link" href={ item.javascript } target="_blank" rel="noreferrer" aria-label={ "Abrir uma nova guia com a visualização do código no GitHub do projeto "+item.name }>Código JavaScript no GitHub <i className="devicon-github-original"></i></a>
                            { (item.typescript==="") ? "" : <a className="projetos__lista-item-link" href={ item.typescript } target="_blank" rel="noreferrer" aria-label={ "Abrir uma nova guia com a visualização do código no GitHub do projeto "+item.name }>Código TypeScript no GitHub <i className="devicon-github-original"></i></a>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projetos;