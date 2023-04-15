import Image from "../images/lupa.svg";

function Right({ state }){
    const title = "Nenhuma mensagem encontrada";
    const text = "Digite um texto que você gostaria de criptografar ou decriptografar.";
    
    function Html(){
        if(state.text === undefined || state.text === ""){
          return (
            <section id="right">
              <img src={ Image } alt="Imagem azul de menino segurando uma lupa"></img>
              <div id="text">
                  <h1>{ title }</h1>
                  <p>{ text }</p>
              </div>
            </section>
          );
        }else{
          return (
                <section id="right">
                  <div id="formatRight">
                    <div id="encryptText">
                      <textarea id="pText" value={ state.text } readOnly></textarea>
                    </div>
                    <button id="copy" onClick={ Copy }>Copiar</button>
                  </div>
                </section>
                );
        }
    }

    function Copy(){
        let textoCopiado = document.getElementById("pText");
        textoCopiado.select();
        textoCopiado.setSelectionRange(0, 99999)
        document.execCommand("copy");
    } 

    return (
        <Html></Html>
    );
}
export default Right;