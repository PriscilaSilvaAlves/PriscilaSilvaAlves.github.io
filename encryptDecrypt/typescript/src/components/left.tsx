import ImageAlert from '../images/Vector.svg';
import { useState } from 'react';

interface LeftProps{
    childToParent: (childData: string) => void;
}

function Left({childToParent}: LeftProps){
    var [valorInput, setValorInput] = useState<string>('');

    function changeLetter(letter: string): string{
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

    function encrypt(): false | void{
        var encryptText: string = "";
        let regex = /\W|_/;
        //let regex = /[@!#$%^&*()/\\áéíóúàèìòùãẽĩõũñâêîôûç]/;
        for(let i=0; i<valorInput.length; i++){
          if(valorInput[i] === valorInput[i].toUpperCase() && valorInput[i] !== " " && valorInput[i] !== "," && valorInput[i] !== "." && valorInput[i] !== "!"){
            return false;
          }else if(!isNaN(parseInt(valorInput[i])) && valorInput[i] !== " "){
            return false;
          }else if(regex.test(valorInput[i]) && valorInput[i] !== " " && valorInput[i] !== "," && valorInput[i] !== "." && valorInput[i] !== "!"){
            return false;
          }else{
            encryptText = encryptText + changeLetter(valorInput[i]);
          }
        }
        childToParent(encryptText);
    }
    function decrypt(): false | void{
        var decryptText: string = "";
        let regex = /\W|_/;
        for(let i=0; i<valorInput.length; i++){
            if(valorInput[i] === valorInput[i].toUpperCase() && valorInput[i] !== " " && valorInput[i] !== "," && valorInput[i] !== "." && valorInput[i] !== "!"){
                return false;
            }else if(!isNaN(parseInt(valorInput[i])) && valorInput[i] !== " "){
                return false;
            }else if(regex.test(valorInput[i]) && valorInput[i] !== " " && valorInput[i] !== "," && valorInput[i] !== "." && valorInput[i] !== "!"){
                return false;
            }else{
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
        }
        childToParent(decryptText);
    }
    function handleSubmit(event: React.FormEvent<EventTarget>): void{
        event.preventDefault();
    }
    function handleChangeInput(texto: string): void{
        setValorInput(texto);
    }
    return (
        <section id="left">
            <form id="formId" onSubmit={ (event) => { handleSubmit(event) } }>
                <div id="left-top"> 
                    <div id="input">
                        <input id="textInput" aria-label="Insira um texto para ser criptografado ou decriptografado" placeholder="Digite o seu texto" pattern="([a-z ,.!]+)" maxLength={ 150 } title="Apenas letas minúsculas, sem acentos e sem caracteres especiais" onChange={ (event) => { handleChangeInput(event.target.value as string) } } required></input>
                    </div>
                </div>
                <div id="left-down">
                    <div id="alert">
                        <img src={ ImageAlert } alt=""></img>
                        <p>Apenas letras minúsculas e sem acento.</p>
                    </div>
                    <div id="buttons">
                        <button aria-label="Criptografar o texto" id="btn1" name="btn1" onClick={ () => { encrypt() } }>Criptografar</button>
                        <button aria-label="Decriptografar o texto" id="btn2" name="btn2" onClick={ () => { decrypt() } }>Decriptografar</button>
                    </div>
                </div>
            </form>
        </section>
    );
}

export default Left;