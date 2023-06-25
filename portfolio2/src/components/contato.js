import "../styles/contato/contato.css";
import "../styles/contato/contato-formulario.css";
import "../styles/contato/contato-input.css";
import "../styles/contato/contato-submit.css";
import "../styles/contato/contato-mensagem.css";
import "../styles/contato/contato-titulo.css";
import { useState } from "react";
import Axios from "axios";

function Contato(){
    const [validacao, setValidacao] = useState("");
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [assunto, setAssunto] = useState("");

    async function handleSubmit(event){
        event.preventDefault();

        const url = "http://localhost/portfolio/javascript/src/api/enviar-mensagem.php";
        
        let formData = new FormData();
        formData.append("nome", nome);
        formData.append("email", email);
        formData.append("mensagem", mensagem);
        formData.append("assunto", assunto);

        try{
            const data = await Axios.post(url, formData);
            if(data.data === "Dados enviados"){
                setValidacao(data.data);
            }else{
                console.log(data.data);
            }
        }catch(erro){
            console.log(erro);
        }
    }

    return (
        <footer id="contato" className="rodape">
            <h1 className="rodape__titulo">Entre em contato</h1>
            <form className="rodape__formulario" onSubmit={ (e) => handleSubmit(e) }>
                <input 
                    className="rodape__input"
                    placeholder="Nome" 
                    type="text"
                    maxLength="100"
                    minLength="10"
                    pattern="([a-zA-Z ç]+)"
                    title="Digite seu nome e sobrenome"
                    required
                    value={nome}
                    onChange={(e) => setNome(e.target.value)} 
                />
                <input 
                    className="rodape__input"
                    placeholder="E-mail" 
                    type="text"
                    maxLength="100"
                    minLength="10"
                    title="Digite o seu e-mail no padrão nome@dominio.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <input 
                    className="rodape__input"
                    placeholder="Assunto" 
                    type="text"
                    maxLength="100"
                    minLength="4"
                    pattern="([a-zA-Z ç0-9]+)"
                    title="Digite o assunto do e-mail, apenas com letras e números"
                    required
                    value={assunto}
                    onChange={(e) => setAssunto(e.target.value)} 
                />
                <textarea 
                    className="rodape__mensagem"
                    placeholder="Mensagem" 
                    type="text"
                    maxLength="400"
                    minLength="10"
                    pattern="([a-zA-Z ç0-9,.-!@]+)"
                    title="Digite a mensagem apenas com letras e números"
                    required
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)} 
                />
                <input 
                    className="rodape__submit" 
                    type="submit" 
                    value="Enviar"
                />
            </form>
            {validacao==="Dados enviados" ? <p>Mensagem enviada com sucesso</p> : null}
        </footer>
    )
}

export default Contato;