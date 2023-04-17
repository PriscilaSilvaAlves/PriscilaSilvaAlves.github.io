import '../styles/header.css';
import cv from '../images/cv2.webp';

function Header(){
    return(
        <header>
            <h1>Curriculum Generator</h1>
            <img src={ cv } alt="Printed resumes on top of a table, next to a keyboard and a plant."></img>
        </header>
    );
}

export default Header;