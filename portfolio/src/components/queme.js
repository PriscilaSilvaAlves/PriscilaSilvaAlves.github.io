import "../styles/quem.css";
import Digitando from "../images/pessoa-digitando.png";

function Quem(){
    return (
        <div id="quem">
            <div id="quemText">
                <h1>Quem é Priscila?</h1>
                <p>Sou uma desenvolvedora front-end com experiência em React.
                    Atualmente, sou freelancer e moro em Currais Novos/RN, onde eu dedico o meu 
                    tempo a me qualificar profissionalmente.
                </p>
            </div>
            <img src={ Digitando } alt="Uma pessoa digitando no notebook"></img>
        </div>
    );
}

export default Quem;