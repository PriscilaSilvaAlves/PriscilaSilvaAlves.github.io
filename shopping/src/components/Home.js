import Phone from '../images/fone2.png';
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

function Home(){
    return (
        <div id="home">
            <Helmet><title>Shopping | Início</title></Helmet>
            <div id="homeProduct">
                <div id="homeProductName">
                    <h1>Fone de ouvido com microfone OEX Drop Hs210</h1>
                </div>
                <div id="homeProductButtons">
                    <Link to="/products/11" data-testid="homeItem"><p className="btn">Compre agora</p></Link>
                    <Link to="/products" data-testid="homeItens"><p className="btn">Compre tudo</p></Link>
                </div>
            </div>
            <img src={ Phone } alt="White headset"></img>
        </div>
    );
}

export default Home;