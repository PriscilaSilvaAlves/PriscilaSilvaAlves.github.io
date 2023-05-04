import Phone from '../images/fone2.png';
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

function Home(){
    return (
        <div id="home">
            <Helmet><title>Rektr | Início</title></Helmet>
            <div id="homeProduct">
                <div id="homeProductName">
                    <h1>Fone de ouvido com microfone OEX Drop Hs210</h1>
                </div>
                <div id="homeProductButtons">
                    <Link to="/products/11" data-testid="homeItem"><button className="btn" aria-label="Navegue para a aba de detalhes do fone de ouvido com microfone OEX Drop Hs210">Compre agora</button></Link>
                    <Link to="/products" data-testid="homeItens"><button className="btn" aria-label="Navegue para a aba com todos os produtos">Compre tudo</button></Link>
                </div>
            </div>
            <img src={ Phone } alt="White headset" aria-describedby="homeProductName"></img>
        </div>
    );
}

export default Home;