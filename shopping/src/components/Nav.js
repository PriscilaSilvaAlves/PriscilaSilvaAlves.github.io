import { Link } from "react-router-dom";
import '../styles/nav.css';
import logo from '../images/logo.png';

function Nav() {
    return (
        <nav>
            <Link to="/" data-testid="navInicio"><img src={ logo } alt="Logomarca com link para a página inicial"></img></Link>
            <ul>
                <li><Link to="/" data-testid="navInicio">Início</Link></li>
                <li><Link to="/products" data-testid="navProdutos">Produtos</Link></li>
                <li><Link to="/carrinho" data-testid="navCarrinho">Carrinho</Link></li>
            </ul>
        </nav>
    );
  }
  
  export default Nav;