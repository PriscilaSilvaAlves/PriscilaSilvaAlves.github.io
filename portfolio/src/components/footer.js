import "../styles/footer/footer-contato-link.css";
import "../styles/footer/footer.css";
import "../styles/footer/footer-titulo.css";
import "../styles/footer/footer-contato.css";
import "../styles/footer/footer-contato-title.css";
import "../styles/footer/footer-contato-item.css";
import "../styles/footer/footer-contato-info.css";

function Footer(){
    return (
        <footer className="footer" id="contato">
            <h1 className="footer__titulo">Entre em contato</h1>
            <div className="footer__contato">
                <div className="footer__contato-item">
                    <p className="footer__contato-title">E-mail:</p>
                    <p className="footer__contato-info">priscila.contato@live.com</p>
                </div>
                <div className="footer__contato-item">
                    <p className="footer__contato-title">Telefone/Whatsapp:</p>
                    <p className="footer__contato-info">+55 84 99654 2787</p>
                </div>
                <div className="footer__contato-item">
                    <p className="footer__contato-title"><a className="footer__contato-link" target="_blank" rel="noreferrer" aria-label="Abre a página do LinkedIn de Priscila em uma nova aba." href="https://www.linkedin.com/in/priscila-alves-015b02169/">Me adicione no LinkedIn</a></p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;