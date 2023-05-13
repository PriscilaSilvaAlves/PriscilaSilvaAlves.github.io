import { myCoordinates } from "./gameboard.js";
import { Gameboard } from "./gameboard.js";
import { Player } from "./player.js";
import { ship } from "./gameboard.js";
import { attackOnTarget, hit, attackPoints } from "./player.js";
import { myShip4, myShip3, myShip2, myShip1 } from "./player.js";
 
var myAttacks=[];
export var position="horizontal";
var verificaHorizontal = true;
var verificaVertical = false;

export function rotate(){
    const btn = document.getElementById("btnRotate");
    if(position==="horizontal"){
        position="vertical";
        btn.innerHTML="Vertical (rotate)";
    }else if(position==="vertical"){
        position="horizontal";
        btn.innerHTML="Horizontal (rotate)";
    }
}

export function receiveAttack(coordinate){ 
    for(let i=0; i<myAttacks.length; i++){
        if(coordinate==myAttacks[i]){
            return false;
        }
    }
    myAttacks.push(coordinate); 
    const game = new Gameboard();
    game.displayAttack(coordinate);
    const issAllSunk = game.receiveAttack(coordinate);
    if(issAllSunk){
        const audioCompleted = new Audio("completed.wav");
        audioCompleted.play();
        game.gameOver();
    }else{
        setTimeout(function(){
            const player = new Player();
            const play = player.makeMove();
            paintCoordinate(play[0]);
            if(play[1]){
                const audioFailure = new Audio("failure.wav");
                audioFailure.play();
                game.gameOver();
            }
        },1000)
    } 
}
export function placeShip(coordinate){
    const audio = new Audio("ring.mp3");
    audio.play();
    paintShips(coordinate);
    const game = new Gameboard();
    const ship = game.placeShips(coordinate);
    if(ship !== undefined || ship !== null || ship !== false){
        if(ship[0]==0){
            printScenario();
            const game = new Gameboard();
            game.displayScenario();
        }
    }
}
export function reload(){
    document.location.reload(true);
}
function paintCoordinate(move){
    document.getElementById(move).style.backgroundColor="#fca5a5";
}
export function generateMove(){
    var move;
    var attack;
    //Verifica se um navio foi afundado no último lance:
    if(verificaHorizontal === true){
        if(hit==true){
            console.log("1.0");
            //Verifica se o penúltimo ataque no alvo é diferente de nulo
            if(attackOnTarget[attackOnTarget.length-2]!=null){
                console.log(1);
                //Verifica se a posição do último ataque no alvo é maior que a do penúltimo
                //Ou seja, verifica se está caminhando da esquerda para a direita
                if(attackOnTarget[attackOnTarget.length-1]>attackOnTarget[attackOnTarget.length-2]){
                    console.log(2);
                    //O próximo movimento será a posição do último ataque no alvo mais um
                    move=attackOnTarget[attackOnTarget.length-1]+1;
                    console.log("Move: "+move);
                    //Percorre o vetor de ataques já lançados
                    for(let i=0; i<attackPoints.length-1; i++){
                        console.log(3);
                        //Se o próximo movimento já foi um ataque lançado anteriormente,
                        //o próximo movimento receberá a posição do último ataque menos um 
                        if(attackPoints[i]==move){
                            console.log(4);
                            move=attackOnTarget[attackOnTarget.length-1]-1;
                            console.log("Move: "+move);
                            //Percorre os ataques já acertados no alvo
                            for(let j=0; j<attackOnTarget.length; j++){
                                console.log(5);
                                //Se o movimento já está em ataques no alvo, o próximo movimento decrementa e o laço reinicia
                                if(move==attackOnTarget[j]){
                                    console.log(6);
                                    move--;
                                    console.log("Move: "+move);
                                    j=-1;
                                }
                            } 
                        }
                    }
                //Verifica se o penúltimo ataque no alvo menos um é igual ao último ataque no alvo
                //Ou seja, verifica se está caminhando da direita para a esquerda
                }else if(attackOnTarget[attackOnTarget.length-2]-1==attackOnTarget[attackOnTarget.length-1]){
                    //Se move mais um passo a esquerda
                    console.log(7);
                    move=attackOnTarget[attackOnTarget.length-1]-1;
                    console.log("Move: "+move);
                }else{
                    //Se não estiver caminhando para a esquerda e se o último ataque no alvo
                    //não fo maior que o penúltimo, o próximo movimento será a posição
                    //do último ataque no alvo mais um
                    console.log(8);
                    move=attackOnTarget[attackOnTarget.length-1]+1;
                    console.log("Move: "+move);
                    //Percorre o vetor de ataques no alvo
                    for(let i=0; i<attackOnTarget.length-1;i++){
                        console.log(9);
                        //Se o próximo movimento já foi um ataque acertado,
                        //o próximo movimento será o último ataque no alvo menos um
                        if(move==attackOnTarget[i]){
                            console.log(10);
                            move=attackOnTarget[attackOnTarget.length-1]-1;
                            console.log("Move: "+move);
                        }
                    }
                    //Verifica se o movimento selecionado já foi um lance feito anteriormente, 
                    //caso positivo joga o último lance menos 1.
                    var cont=0;
                    for(let i=0; i<attackPoints.length; i++){
                        console.log("10.1");
                        if(attackPoints[i]==move && cont<3){
                            console.log("10.2");
                            move=attackOnTarget[attackOnTarget.length-1]-1;
                            console.log("Move: "+move);
                            i=-1;
                            cont++;
                        }
                    }
                    //Caso o último lance menos 1 também já tenha sido uma jogada feita antes,
                    //muda para o alinhamento vertical.
                    if(cont>1){
                        verificaHorizontal = false;
                        verificaVertical = true;
                    }
                }
            //Se não houve um penúltimo ataque no alvo, move recebe o último ataque no alvo mais um
            }else{
                console.log(11);
                move=attackOnTarget[attackOnTarget.length-1]+1;
                console.log("Move: "+move);
            }
        //Se o último ataque não foi no alvo:
        }else{
            console.log(12);
            //Verifica se houve algum ataque no alvo
            if(attackOnTarget[attackOnTarget.length-1]!=null){
                console.log(13);
                //Verifique se o último ataque no alvo é igual ao penúltimo ataque lançado
                if(attackOnTarget[attackOnTarget.length-1]==attackPoints[attackPoints.length-2]){
                    console.log(14);
                    //Ataque recebe o último ataque no alvo menos um:
                    attack=attackOnTarget[attackOnTarget.length-1]-1;
                    //Percorre o vetor de ataques no alvo:
                    for(let i=0; i<attackOnTarget.length; i++){
                        console.log(15);
                        //Se o ataque for igual a algum ataque já lançado no alvo,
                        //ataque decrementa em um e o for reinicia
                        if(attack==attackOnTarget[i]){
                            console.log(16);
                            attack--;
                            i=-1;
                        }
                    }
                    for(let i=0; i<attackPoints.length; i++){
                        if(attackPoints[i]==attack){
                            verificaHorizontal = false;
                            verificaVertical = true;
                        }
                    }
                    move=attack;
                    console.log("Move: "+move);
                }else{
                    console.log(17);
                    verificaHorizontal = false;
                    verificaVertical = true;
                    //move = sortNumber(0);
                }
            //Se não houve nenhum ataque no alvo:
            }else{
                console.log(18);
                move = sortNumber(0);
                console.log("Move: "+move);
            }
        }
    }
    if(verificaVertical === true){
        if(hit==true){
            console.log("21.0");
            //Verifica se o penúltimo ataque no alvo é diferente de nulo
            if(attackOnTarget[attackOnTarget.length-2]!=null){
                console.log(21);
                //Verifica se a posição do último ataque no alvo é maior que a do penúltimo
                //Ou seja, verifica se está caminhando de cima para baixo
                if(attackOnTarget[attackOnTarget.length-1]>attackOnTarget[attackOnTarget.length-2]){
                    console.log(22);
                    //O próximo movimento será a posição do último ataque no alvo mais dez
                    move=attackOnTarget[attackOnTarget.length-1]+10;
                    console.log("Move: "+move);
                    //Percorre o vetor de ataques já lançados
                    for(let i=0; i<attackPoints.length-1; i++){
                        console.log(23);
                        //Se o próximo movimento já foi um ataque lançado anteriormente,
                        //o próximo movimento receberá a posição do último ataque menos um 
                        if(attackPoints[i]==move){
                            console.log(24);
                            move=attackOnTarget[attackOnTarget.length-1]-10;
                            console.log("Move: "+move);
                            //Percorre os ataques já acertados no alvo
                            for(let j=0; j<attackOnTarget.length; j++){
                                console.log(25);
                                //Se o movimento já está em ataques no alvo, o próximo movimento decrementa e o laço reinicia
                                if(move==attackOnTarget[j]){
                                    console.log(26);
                                    move=move-10;
                                    console.log("Move: "+move);
                                    j=-1;
                                }
                            } 
                        }
                    }
                //Verifica se o penúltimo ataque no alvo menos um é igual ao último ataque no alvo
                //Ou seja, verifica se está caminhando da direita para a esquerda
                }else if(attackOnTarget[attackOnTarget.length-2]-1==attackOnTarget[attackOnTarget.length-1]){
                    //Se move mais um passo a esquerda
                    console.log(27);
                    move=attackOnTarget[attackOnTarget.length-1]-10;
                    console.log("Move: "+move);
                }else{
                    //Se não estiver caminhando para a esquerda e se o último ataque no alvo
                    //não fo maior que o penúltimo, o próximo movimento será a posição
                    //do último ataque no alvo mais um
                    console.log(28);
                    move=attackOnTarget[attackOnTarget.length-1]+10;
                    console.log("Move: "+move);
                    //Percorre o vetor de ataques no alvo
                    for(let i=0; i<attackOnTarget.length-1;i++){
                        console.log(29);
                        //Se o próximo movimento já foi um ataque acertado,
                        //o próximo movimento será o último ataque no alvo menos um
                        if(move==attackOnTarget[i]){
                            console.log(30);
                            move=attackOnTarget[attackOnTarget.length-1]-10;
                            console.log("Move: "+move);
                        }
                    }
                }
            //Se não houve um penúltimo ataque no alvo, move recebe o último ataque no alvo mais um
            }else{
                console.log(31);
                move=attackOnTarget[attackOnTarget.length-1]+10;
                console.log("Move: "+move);
            }
        //Caso contrário, não houve acerto na jogada anteior, faça:
        }else{
            console.log(32);
            //Verifica se houve algum ataque no alvo
            if(attackOnTarget[attackOnTarget.length-1]!=null){
                console.log(33);
                //Verifique se o último ataque no alvo é igual ao penúltimo ou antepenúltimo ataque lançado
                if(attackOnTarget[attackOnTarget.length-1]==attackPoints[attackPoints.length-2] || attackOnTarget[attackOnTarget.length-1]==attackPoints[attackPoints.length-3]){
                    console.log(34);
                    //Ataque recebe o último ataque no alvo menos um:
                    attack=attackOnTarget[attackOnTarget.length-1]-10;
                    for(let i=0; i<attackPoints.length; i++){
                        console.log("34.1");
                        if(attackPoints[i]==attack){
                            console.log("34.2");
                            attack=attackOnTarget[attackOnTarget.length-1]+10;
                        }
                    }
                    //Percorre o vetor de ataques no alvo:
                    for(let i=0; i<attackOnTarget.length; i++){
                        console.log(35);
                        //Se o ataque for igual a algum ataque já lançado no alvo,
                        //ataque soma dez e o for reinicia
                        if(attack==attackOnTarget[i]){
                            console.log(36);
                            attack=attack+10;
                            i=-1;
                        }
                    }
                    move=attack;
                    console.log("Move: "+move);
                    //Verifica se o último ataque no alvo é igual ao ante-ante-panúltimo ataque lançado
                }else if(attackOnTarget[attackOnTarget.length-1]==attackPoints[attackPoints.length-4]){
                    console.log(37);
                    //Ataque recebe o último ataque no alvo menos mais dez:
                    attack=attackOnTarget[attackOnTarget.length-1]+10;
                    //Percorre o vetor de ataques no alvo:
                    for(let i=0; i<attackOnTarget.length; i++){
                        console.log(38);
                        //Se o ataque for igual a algum ataque já lançado no alvo,
                        //ataque decrementa em um e o for reinicia
                        if(attack==attackOnTarget[i]){
                            console.log(39);
                            attack=attack+10;
                            i=-1;
                        }
                    }
                    move=attack;
                    console.log("Move: "+move);
                }else{
                    console.log(40);
                    move = sortNumber(0);
                    console.log("Move: "+move);
                    verificaHorizontal = true;
                    verificaVertical = false;
                }
            //Se não houve nenhum ataque no alvo:
            }else{
                console.log(41);
                verificaHorizontal = true;
                verificaVertical = false;
                move = sortNumber(0);
                console.log("Move: "+move);
            }
        }
    }
    
    for(let i=0; i<attackPoints.length; i++){
        if(attackPoints[i]==move){
            console.log(42);
            move = sortNumber(0);
            console.log("Move: "+move);
            i=-1;
            if(verificaHorizontal===false){
                verificaHorizontal = true;
                verificaVertical = false;
            }
        }
    }
    return move;
}
function paintShips(coordinate){
    let iid=coordinate;
    if(position==="horizontal"){
        if(ship==4 || ship==null){
            if(iid!=8 && iid!=9 && iid!=10 && iid!=18 && iid!=19 && iid!=20 && iid!=28 && iid!=29 && iid!=30 && iid!=38 && iid!=39 && iid!=40
                && iid!=48 && iid!=49 && iid!=50 && iid!=58 && iid!=59 && iid!=60
                && iid!=68 && iid!=69 && iid!=70 && iid!=78 && iid!=79 && iid!=80
                && iid!=88 && iid!=89 && iid!=90 && iid!=98 && iid!=99 && iid!=100){
                    const obj = document.getElementById(coordinate);
                    obj.style.backgroundImage="url('ship.jpg')";
                    obj.style.backgroundSize="100%";
                    const obj2 = document.getElementById(coordinate+1);
                    obj2.style.backgroundImage="url('ship.jpg')";
                    obj2.style.backgroundSize="100%";
                    const obj3 = document.getElementById(coordinate+2);
                    obj3.style.backgroundImage="url('ship.jpg')";
                    obj3.style.backgroundSize="100%";
                    const obj4 = document.getElementById(coordinate+3);
                    obj4.style.backgroundImage="url('ship.jpg')";
                    obj4.style.backgroundSize="100%";
            }
        }else if(ship==3){
            if(iid!=9 && iid!=10 && iid!=19 && iid!=20 && iid!=29 && iid!=30 && iid!=39 && iid!=40
                && iid!=49 && iid!=50 && iid!=59 && iid!=60 && iid!=69 
                && iid!=70 && iid!=79 && iid!=80 && iid!=89 && iid!=90 && iid!=99 && iid!=100){
                    const obj = document.getElementById(coordinate);
                    obj.style.backgroundImage="url('ship.jpg')";
                    obj.style.backgroundSize="100%";
                    const obj2 = document.getElementById(coordinate+1);
                    obj2.style.backgroundImage="url('ship.jpg')";
                    obj2.style.backgroundSize="100%";
                    const obj3 = document.getElementById(coordinate+2);
                    obj3.style.backgroundImage="url('ship.jpg')";
                    obj3.style.backgroundSize="100%";
            }
        }else if(ship==2){
            if(iid!=10 && iid!=20 && iid!=30 && iid!=40 && iid!=50 
                && iid!=60 && iid!=70 && iid!=80 && iid!=90 && iid!=100){
                    const obj = document.getElementById(coordinate);
                    obj.style.backgroundImage="url('ship.jpg')";
                    obj.style.backgroundSize="100%";
                    const obj2 = document.getElementById(coordinate+1);
                    obj2.style.backgroundImage="url('ship.jpg')";
                    obj2.style.backgroundSize="100%";
            }
        }else if(ship==1){
            const obj = document.getElementById(coordinate);
            obj.style.backgroundImage="url('ship.jpg')";
            obj.style.backgroundSize="100%";
        }
    }else if(position==="vertical"){
        if(ship==4 || ship==null){
            if(iid<71){
                const obj = document.getElementById(coordinate);
                obj.style.backgroundImage="url('ship.jpg')";
                obj.style.backgroundSize="100%";
                const obj2 = document.getElementById(coordinate+10);
                obj2.style.backgroundImage="url('ship.jpg')";
                obj2.style.backgroundSize="100%";
                const obj3 = document.getElementById(coordinate+20);
                obj3.style.backgroundImage="url('ship.jpg')";
                obj3.style.backgroundSize="100%";
                const obj4 = document.getElementById(coordinate+30);
                obj4.style.backgroundImage="url('ship.jpg')";
                obj4.style.backgroundSize="100%";
            }
        }else if(ship==3){
            if(iid<81){
                const obj = document.getElementById(coordinate);
                obj.style.backgroundImage="url('ship.jpg')";
                obj.style.backgroundSize="100%";
                const obj2 = document.getElementById(coordinate+10);
                obj2.style.backgroundImage="url('ship.jpg')";
                obj2.style.backgroundSize="100%";
                const obj3 = document.getElementById(coordinate+20);
                obj3.style.backgroundImage="url('ship.jpg')";
                obj3.style.backgroundSize="100%";
            }
        }else if(ship==2){
            if(iid<91){
                const obj = document.getElementById(coordinate);
                obj.style.backgroundImage="url('ship.jpg')";
                obj.style.backgroundSize="100%";
                const obj2 = document.getElementById(coordinate+10);
                obj2.style.backgroundImage="url('ship.jpg')";
                obj2.style.backgroundSize="100%";
            }
        }else if(ship==1){
            const obj = document.getElementById(coordinate);
            obj.style.backgroundImage="url('ship.jpg')";
            obj.style.backgroundSize="100%";
        }
    }  
}
export function sortNumber(a){
    var num=Math.floor(Math.random()*100+a);
    while(num==a){
        num=Math.floor(Math.random()*100+a);
    }
    return num;
}
function printScenario(){
    var node = document.getElementById("container");
    if (node.parentNode) {
        node.parentNode.removeChild(node);
    }
    document.body.innerHTML="<div id='container'><div id='title'><h1>Battlership</h1></div><div id='text'><p>Click to attack your opponent!</p></div><div id='area'><div class='battlefield' id='my'></div><div class='battlefield' id='enemy'></div></div></div>";
    var div1="";
    for(let i=1; i<=100; i++){
        div1 += '<div id="'+i+'" class="field"></div>';
    }
    document.getElementById("my").innerHTML=div1;
    var div2="";
    for(let i=101; i<=200; i++){
        div2 += '<div id="'+i+'" class="field opponent" onclick="receiveAttack('+i+')"></div>';
    }
    document.getElementById("enemy").innerHTML=div2;
    for(let i=0; i<myCoordinates.length; i++){
        let id=myCoordinates[i];
        document.getElementById(id).style.backgroundImage="url('ship.png')";
        document.getElementById(id).style.backgroundSize="100%";
    }
}