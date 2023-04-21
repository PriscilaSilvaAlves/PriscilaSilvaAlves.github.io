import { Link } from "react-router-dom";
import '../styles/nav.css';
import logo from '../images/logo.png';

function Nav() {
    return (
        <nav>
            <img src={ logo } alt="Logo"></img>
            <ul>
                <Link to="/"><li>Início</li></Link>
                <Link to="/products"><li>Produtos</li></Link>
                <Link to="/carrinho"><li>Carrinho</li></Link>
            </ul>
        </nav>
    );
  }
  
  export default Nav;