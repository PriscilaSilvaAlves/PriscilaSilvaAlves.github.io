import './App.css';
import ImageLogo from './images/Logo.svg';
import ImageAlert from './images/Vector.svg';
import Image from "./images/lupa.svg";
import { useState } from 'react';

function changeLetter(letter){
  if(letter==="e"){
      return "enter";
  }else if(letter==="i"){
      return "imes";
  }else if(letter==="a"){
      return "ai";
  }else if(letter==="o"){
      return "ober";
  }else if(letter==="u"){
      return "ufat";
  }else{
      return letter;
  }
}

function App() {
  const title = "Nenhuma mensagem encontrada";
  const text = "Digite um texto que você gostaria de criptografar ou decriptografar."
  var [valorInput, setValorInput] = useState('');
  var [right, setRight ] = useState(
    <div id="right">
        <img src={ Image } alt="Imagem azul de menino segurando uma lupa"></img>
        <div id="text">
            <h1>{ title }</h1>
            <p>{ text }</p>
        </div>
    </div>
  );

  function Encrypt(){
    var encryptText="";
    for(let i=0; i<valorInput.length; i++){
      if(valorInput[i] === valorInput[i].toUpperCase()){
        return false;
      }else if(valorInput[i] === "à" || valorInput[i] === "á" ||valorInput[i] === "é" ||valorInput[i] === "í" ||valorInput[i] === "ó" ||valorInput[i] === "ú"){
        return false;
      }else if(valorInput[i] === "ç" || valorInput[i] === "@" || valorInput[i] === "!" || valorInput[i] === "#" || valorInput[i] === "$" || valorInput[i] === "&" || valorInput[i] === "*" || valorInput[i] === "^"){
        return false;
      }else{
        encryptText = encryptText + changeLetter(valorInput[i]);
      } 
    }
    setRight(<div id="right"><div id="formatRight"><div id="encryptText"><textarea id="pText" value={ encryptText }></textarea></div><button id="copy" onClick={ Copy }>Copiar</button></div></div>);
  }

  function Decrypt(){
    var decryptText="";
    for(let i=0; i<valorInput.length; i++){
      if(valorInput[i]==="e" && valorInput[i+1]==="n" && valorInput[i+2]==="t" && valorInput[i+3]==="e" && valorInput[i+4]==="r"){
        decryptText=decryptText+"e";
        i=i+4;
      }else if(valorInput[i]==="i" && valorInput[i+1]==="m" && valorInput[i+2]==="e" && valorInput[i+3]==="s"){
        decryptText = decryptText + "i";
        i=i+3;
      }else if(valorInput[i]==="a" && valorInput[i+1]==="i"){
        decryptText = decryptText + "a";
        i=i+1;
      }else if(valorInput[i]==="o" && valorInput[i+1]==="b" && valorInput[i+2]==="e" && valorInput[i+3]==="r"){
        decryptText = decryptText + "o";
        i=i+3;
      }else if(valorInput[i]==="u" && valorInput[i+1]==="f" && valorInput[i+2]==="a" && valorInput[i+3]==="t"){
        decryptText = decryptText + "u";
        i=i+3;
      }else{
        decryptText = decryptText + valorInput[i];
      }
    }
    setRight(<div id="right"><div id="formatRight"><div id="encryptText"><textarea id="pText" value={ decryptText }></textarea></div><button id="copy" onClick={ Copy }>Copiar</button></div></div>);
  }

  function Copy(){
    let textoCopiado = document.getElementById("pText");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999)
    document.execCommand("copy");
  }

  function HandleSubmit(event){
    event.preventDefault();
  }

  function HandleChangeInput(event){
    setValorInput(event.target.value);
  }

  return (
      <main>
        <div id="left">
          <form id="formId" onSubmit={ HandleSubmit }>
            <div id="left-top">
                <img src={ ImageLogo } alt="Letra A símbolo da Alura"></img>
                <div id="input">
                  <input id="textInput" placeholder="Digite o seu texto" pattern="([a-z ]+)" maxLength="150" title="Apenas letas minúsculas, sem acentos e sem caracteres especiais" onChange={ HandleChangeInput } required></input>
                </div>
            </div>
            <div id="left-down">
                <div id="alert">
                    <img src={ ImageAlert } alt="Símbolo de alerta"></img>
                    <p>Apenas letras minúsculas e sem acento.</p>
                </div>
                <div id="buttons">
                    <button id="btn1" name="btn1" onClick={ Encrypt }>Criptografar</button>
                    <button id="btn2" name="btn2" onClick={ Decrypt }>Decriptografar</button>
                </div>
            </div>
          </form>
        </div>
        { right }
      </main>
  );
}

export default App;
