import "../styles/footer.css";

function Footer(){
    return (
        <footer>
            <h1>Entre em contato</h1>
            <div id="contact">
                <div className="contactItem">
                    <p className="contactTitle">E-mail:</p>
                    <p className="contactInfo">priscila.contato@live.com</p>
                </div>
                <div className="contactItem">
                    <p className="contactTitle">Telefone/Whatsapp:</p>
                    <p className="contactInfo">+55 84 99654 2787</p>
                </div>
                <div className="contactItem">
                    <p className="contactTitle"><a href="https://www.linkedin.com/in/priscila-alves-015b02169/">Me adicione no LinkedIn</a></p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;