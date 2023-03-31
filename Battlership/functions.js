import { myCoordinates } from "./gameboard.js";
import { Gameboard } from "./gameboard.js";
import { Player } from "./player.js";
import { ship } from "./gameboard.js";
import { attackOnTarget, hit, attackPoints } from "./player.js";

var myAttacks=[];

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
        const player = new Player();
        const play = player.makeMove();
        paintCoordinate(play[0]);
        if(play[1]){
            const audioFailure = new Audio("failure.wav");
            audioFailure.play();
            game.gameOver();
        }
    } 
}
export function placeShip(coordinate){
    const audio = new Audio("ring.mp3");
    audio.play();
    paintShips(coordinate);
    const game = new Gameboard();
    const ship = game.placeShips(coordinate);
    if(ship[0]==0){
        printScenario();
        const game = new Gameboard();
        game.displayScenario();
    }
}
export function reload(){
    document.location.reload(true);
}
function paintCoordinate(move){
    document.getElementById(move).style.backgroundColor="#fca5a5";
}
export function generateMove(){
    if(hit==true){
        if(attackOnTarget[attackOnTarget.length-2]!=null){
            if(attackOnTarget[attackOnTarget.length-1]>attackOnTarget[attackOnTarget.length-2]){
                move=attackOnTarget[attackOnTarget.length-1]+1;
                for(let i=0; i<attackPoints.length-1; i++){
                    console.log("Entrou no for dos pontos já atacados");
                    if(attackPoints[i]==move){
                        console.log("Entrou no if dos pontos já atacados");
                        move=attackOnTarget[attackOnTarget.length-1]-1;
                        console.log("Subtraiu 1 do move");
                        for(let j=0; j<attackOnTarget.length; j++){
                            console.log("Entrou no for dos pontos já acertados");
                            if(move==attackOnTarget[j]){
                                move--;
                                j=0;
                            }
                        } 
                    }
                }
            }else if(attackOnTarget[attackOnTarget.length-2]-1==attackOnTarget[attackOnTarget.length-1]){
                console.log("Verifica se o último alvo é igual ao penúltimo menos 1");
                move=attackOnTarget[attackOnTarget.length-1]-1;
            }else{
                console.log("O último ataque é muito menor que o penúltimo");
                move=attackOnTarget[attackOnTarget.length-1]+1;
                for(let i=0; i<attackOnTarget.length-1;i++){
                    if(move==attackOnTarget[i]){
                        move=attackOnTarget[attackOnTarget.length-1]-1;
                    }
                }
            }
        }else{
            move=attackOnTarget[attackOnTarget.length-1]+1;
        }
    }else{
        if(attackOnTarget[attackOnTarget.length-1]!=null){
            if(attackOnTarget[attackOnTarget.length-1]==attackPoints[attackPoints.length-2]){
                console.log("O último ataque no alvo é igual ao penúltimo ataque?");
                var attack=attackOnTarget[attackOnTarget.length-1]-1;
                for(let i=0; i<attackOnTarget.length; i++){
                    if(attack==attackOnTarget[i]){
                        console.log("Ataque igual a alvo já alvejado");
                        attack=attack-1;
                        i=0;
                        console.log("Attack: "+attack);
                        console.log("i: "+i);
                    }
                }
                move=attack;
            }else{
                var move = sortNumber(0);
            }
        }else{
            var move = sortNumber(0);
        }
    }
    for(let i=0; i<attackPoints.length; i++){
        if(attackPoints[i]==move){
            move = sortNumber(0);
            i=0;
        }
    }
    console.log(move);
    return move;
}
function paintShips(coordinate){
    if(ship==4 || ship==null){
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
    }else if(ship==3){
        const obj = document.getElementById(coordinate);
        obj.style.backgroundImage="url('ship.jpg')";
        obj.style.backgroundSize="100%";
        const obj2 = document.getElementById(coordinate+1);
        obj2.style.backgroundImage="url('ship.jpg')";
        obj2.style.backgroundSize="100%";
        const obj3 = document.getElementById(coordinate+2);
        obj3.style.backgroundImage="url('ship.jpg')";
        obj3.style.backgroundSize="100%";
    }else if(ship==2){
        const obj = document.getElementById(coordinate);
        obj.style.backgroundImage="url('ship.jpg')";
        obj.style.backgroundSize="100%";
        const obj2 = document.getElementById(coordinate+1);
        obj2.style.backgroundImage="url('ship.jpg')";
        obj2.style.backgroundSize="100%";
    }
}
export function sortNumber(a){
    var num=Math.floor(Math.random()*100+a);
    while(num==a){
        var num=Math.floor(Math.random()*100+a);
    }
    return num;
}
function printScenario(){
    var node = document.getElementById("container");
    if (node.parentNode) {
        node.parentNode.removeChild(node);
    }
    document.body.innerHTML="<div id='container'><div id='title'><h1>Battlership</h1></div><div id='text'><p>Attack your opponent!</p></div><div id='area'><div class='battlefield' id='my'></div><div class='battlefield' id='enemy'></div></div></div>";
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