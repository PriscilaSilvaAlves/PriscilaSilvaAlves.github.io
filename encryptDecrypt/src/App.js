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
    var text = document.getElementById("textInput").value;
    var encryptText=""; 
    for(let i=0; i<text.length; i++){
        encryptText = encryptText + changeLetter(text[i]);
    }
    setRight(<div id="right"><div id="formatRight"><div id="encryptText"><textarea id="pText" value={ encryptText }></textarea></div><button id="copy" onClick={ Copy }>Copiar</button></div></div>);
  }

  function Decrypt(){
    var text = document.getElementById("pText").value;
    var decryptText="";
    for(let i=0; i<text.length; i++){
      if(text[i]==="e" && text[i+1]==="n" && text[i+2]==="t" && text[i+3]==="e" && text[i+4]==="r"){
        decryptText=decryptText+"e";
        i=i+4;
      }else if(text[i]==="i" && text[i+1]==="m" && text[i+2]==="e" && text[i+3]==="s"){
        decryptText = decryptText + "i";
        i=i+3;
      }else if(text[i]==="a" && text[i+1]==="i"){
        decryptText = decryptText + "a";
        i=i+1;
      }else if(text[i]==="o" && text[i+1]==="b" && text[i+2]==="e" && text[i+3]==="r"){
        decryptText = decryptText + "o";
        i=i+3;
      }else if(text[i]==="u" && text[i+1]==="f" && text[i+2]==="a" && text[i+3]==="t"){
        decryptText = decryptText + "u";
        i=i+3;
      }else{
        decryptText = decryptText + text[i];
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

  return (
    <div id="container">
       <div id="left">
            <div id="left-top">
                <img src={ ImageLogo } alt="Letra A símbolo da Alura"></img>
                <div id="input">
                    <input id="textInput" placeholder="Digite o seu texto" required></input>
                </div>
            </div>
            <div id="left-down">
                <div id="alert">
                    <img src={ ImageAlert } alt="Símbolo de alerta"></img>
                    <p>Apenas letras minúsculas e sem acento.</p>
                </div>
                <div id="buttons">
                    <button id="btn1" onClick={ Encrypt }>Criptografar</button>
                    <button id="btn2" onClick={ Decrypt }>Decriptografar</button>
                </div>
            </div>
        </div>
        { right }
    </div>
  );
}

export default App;
