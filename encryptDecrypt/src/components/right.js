import Image from "../images/lupa.svg";

function Right({ state }){
    const title = "Nenhuma mensagem encontrada";
    const text = "Digite um texto que você gostaria de criptografar ou decriptografar.";
    
    function Html(){
        if(state.text === undefined || state.text === ""){
          return (
            <section id="right">
              <img aria-describedby="text" src={ Image } alt="Imagem azul de menino segurando uma lupa"></img>
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
                      <textarea aria-label="Resultado da operação de criprografia ou decriptografia" id="pText" value={ state.text } readOnly></textarea>
                    </div>
                    <button aria-label="Copiar o texto obtido após a operação de criptografia ou decriptografia" id="copy" onClick={ Copy }>Copiar</button>
                  </div>
                </section>
                );
        }
    }

    function Copy(){
        let textoCopiado = document.getElementById("pText");
        //navigator.clipboard.writeText(text)
        textoCopiado.select();
        textoCopiado.setSelectionRange(0, 99999)
        document.execCommand("copy");
    } 

    return (
        <Html></Html>
    );
}
export default Right;