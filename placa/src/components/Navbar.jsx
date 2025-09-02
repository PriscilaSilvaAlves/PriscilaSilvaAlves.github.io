import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    return(
        <nav>
            <Link to="/vertical">Placas na Vertical</Link>
            <Link to="/horizontal">Placas na Horizontal</Link>
        </nav>
    )
}

export default Navbar;