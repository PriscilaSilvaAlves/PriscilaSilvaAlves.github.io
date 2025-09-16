import { Link } from "react-router-dom";
import './Navbar.css';
import { IoIosArrowDown } from 'react-icons/io';

const Navbar = () => {

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function mudandoClasse(){
       let htmlValue = document.getElementById("seta");
       htmlValue.style.color="black";
       htmlValue.style.fontSize="100px";
        htmlValue.animate([
            { transform: 'translate(-50%,-50%)' },
            { transform: 'translate(-50%,0)' }
            ], {
            duration: 1000, // Duração em ms
        });  
        await sleep(1000);
        htmlValue.style.color="transparent";
        htmlValue.style.fontSize="0px";
    }

    return(
        <>
            <nav>
                <Link to="/vertical" onClick={() => mudandoClasse()}>Placas na Vertical</Link>
                <Link to="/horizontal" onClick={() => mudandoClasse()}>Placas na Horizontal</Link>
            </nav>
            <IoIosArrowDown id='seta' />
        </>
    )
}

export default Navbar;