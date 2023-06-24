import "../styles/quemsou/quemsou.css";
import "../styles/quemsou/quemsou-bloco.css";
import "../styles/quemsou/quemsou-bloco-paragrafo.css";
import "../styles/quemsou/quemsou-bloco-titulo.css";
import "../styles/quemsou/quemsou-imagem.css";
import Digitando from "../images/pessoa-digitando.png";

function Quem(){
    return (
        <div id="quem-e" className="quem-sou">
            <div className="quem-sou__bloco">
                <h1 className="quem-sou__bloco__titulo">Quem é Priscila?</h1>
                <p className="quem-sou__bloco__paragrafo"> Eu tenho 30 anos e moro em Currais Novos-RN, Brasil. 
                    Atualmente eu sou uma desenvolvedora Full-Stack com experiência em React e PHP.
                    Uso o meu tempo livre para fazer cursos e me qualificar profissionalmente.
                    Os meus hobbies são ver filmes e fazer musculação.
                    As minhas características principais são ser uma pessoa com pensamento analítico,
                    aprendizagem ativa, capacidade de ouvir e compreender questões humanas, tímida 
                    e direta.
                </p>
            </div>
            <img className="quem-sou__imagem" src={ Digitando } alt="Uma pessoa digitando no notebook"></img>
        </div>
    );
}

export default Quem;