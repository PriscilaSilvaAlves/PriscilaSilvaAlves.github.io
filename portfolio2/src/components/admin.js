import { useEffect, useState } from "react";
import "../styles/admin/admin.css";
import "../styles/admin/admin-titulo.css";
import "../styles/admin/admin-mensagem.css";
import "../styles/admin/admin-mensagem-item.css";

function Admin(){
    const [dados, setDados] = useState("");
    
    async function pegarDados(){
        let url = "http://localhost/portfolio/javascript/src/api/recuperar-mensagem.php";
        try{
            const response = await fetch (url, {mode: 'cors'});
            const getData = await response.json();
            let arr = [];
            let j =0;
            for(let i=getData.length-1; i>=0; i--){
                arr[i]=getData[j];
                j++;
            }
            setDados(arr);
        }catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        pegarDados();
    }, []);

    return (
        <section className="admin">
            <h1 className="admin__titulo">Caixa de Entrada</h1>
            {
                dados !== "" ?
                dados.map((elemento) => (
                    <div className="admin__mensagem" key={elemento.id}>
                        <p className="admin__mensagem-item">Nome: {elemento.nome}</p>
                        <p className="admin__mensagem-item">E-mail: {elemento.email}</p>
                        <p className="admin__mensagem-item">Assunto: {elemento.assunto}</p>
                        <p className="admin__mensagem-item">Mensagem: {elemento.mensagem}</p>
                    </div>
                ))
                : null
            }
        </section>
    );
}

export default Admin;