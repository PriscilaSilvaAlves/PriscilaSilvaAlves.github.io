import { myCoordinates } from "./gameboard.js";
import { Ship } from "./ship.js";
import { Gameboard } from "./gameboard.js";
import { generateMove } from "./functions.js";  

export var attackOnTarget=[];
export var attackPoints = [];
export var hit=false;
export var myShip4 = new Ship(4, 0, false);
export var myShip3 = new Ship(3, 0, false);
export var myShip2 = new Ship(2, 0, false);
export var myShip1 = new Ship(1, 0, false);

export class Player{
    makeMove(){
        //Make automatic moves for the computer player
        var move = generateMove();
        attackPoints.push(move);
        hit=false;
        for(let i=0; i<myCoordinates.length; i++){
            if(myCoordinates[i]==move){ 
                hit=true;
                if(i==0 || i==1 || i==2 || i==3){
                    myShip4.hit();
                    attackOnTarget.push(move);
                    
                }
                if(i==4 || i==5 || i==6){
                    myShip3.hit();
                    attackOnTarget.push(move);
                }
                if(i==7 || i==8){
                    myShip2.hit();
                    attackOnTarget.push(move);
                }
                if(i==9){
                    myShip1.hit();
                    attackOnTarget.push(move);
                }
                const audio = new Audio("sound.mp3");
                audio.play();
            }
        }
        const attack = new Gameboard();
        const issAllSunk = attack.isAllSunk(myShip1, myShip2, myShip3, myShip4);
        return [move, issAllSunk];
    }
}
