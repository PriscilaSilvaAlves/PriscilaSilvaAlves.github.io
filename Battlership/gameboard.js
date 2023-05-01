import { Ship } from "./ship.js";
import { sortNumber, position } from "./functions.js";

export var myCoordinates=[];
var enemyCoordinates = [];
export var ship = 4;

var enemyShip4 = new Ship(4, 0, false);
var enemyShip3 = new Ship(3, 0, false);
var enemyShip2 = new Ship(2, 0, false);
var enemyShip1 = new Ship(1, 0, false);

export class Gameboard{
    placeShips(coordinate){
        // place ships at specific coordinates by calling 
        //the ship class
        for(let i=0; i<myCoordinates.length; i++){
            if(myCoordinates[i]==coordinate){
                return false;
            }
            if(position==="horizontal"){
                if(ship==4){
                    if(myCoordinates[i]==coordinate+1){
                        return false;
                    }
                    if(myCoordinates[i]==coordinate+2){
                        return false;
                    }
                    if(myCoordinates[i]==coordinate+3){
                        return false;
                    }
                }
                if(ship==3){
                    if(myCoordinates[i]==coordinate+1){
                        return false;
                    }
                    if(myCoordinates[i]==coordinate+2){
                        return false;
                    }
                }
                if(ship==2){
                    if(myCoordinates[i]==coordinate+1){
                        return false;
                    }
                }
            }else if(position === "vertical"){
                if(ship==4){
                    if(myCoordinates[i]==coordinate+10){
                        return false;
                    }
                    if(myCoordinates[i]==coordinate+20){
                        return false;
                    }
                    if(myCoordinates[i]==coordinate+30){
                        return false;
                    }
                }
                if(ship==3){
                    if(myCoordinates[i]==coordinate+10){
                        return false;
                    }
                    if(myCoordinates[i]==coordinate+20){
                        return false;
                    }
                }
                if(ship==2){
                    if(myCoordinates[i]==coordinate+10){
                        return false;
                    }
                }
            }
            
        }
        let iid=coordinate;
        if(position === "horizontal"){
            if(ship==4){
                if(iid!=8 && iid!=9 && iid!=10 && iid!=18 && iid!=19 && iid!=20 && iid!=28 && iid!=29 && iid!=30 && iid!=38 && iid!=39 && iid!=40
                    && iid!=48 && iid!=49 && iid!=50 && iid!=58 && iid!=59 && iid!=60
                    && iid!=68 && iid!=69 && iid!=70 && iid!=78 && iid!=79 && iid!=80
                    && iid!=88 && iid!=89 && iid!=90 && iid!=98 && iid!=99 && iid!=100){
                        myCoordinates.push(coordinate);
                        myCoordinates.push(coordinate+1);
                        myCoordinates.push(coordinate+2);
                        myCoordinates.push(coordinate+3);
                        ship--;
                        return [ship, myCoordinates];
                }
            }
            if(ship==3){
                if(iid!=9 && iid!=10 && iid!=19 && iid!=20 && iid!=29 && iid!=30 && iid!=39 && iid!=40
                    && iid!=49 && iid!=50 && iid!=59 && iid!=60 && iid!=69 
                    && iid!=70 && iid!=79 && iid!=80 && iid!=89 && iid!=90 && iid!=99 && iid!=100){
                        myCoordinates.push(coordinate);
                        myCoordinates.push(coordinate+1);
                        myCoordinates.push(coordinate+2);
                        ship--;
                        return [ship, myCoordinates];
                }
            }
            if(ship==2){
                if(iid!=10 && iid!=20 && iid!=30 && iid!=40 && iid!=50 
                    && iid!=60 && iid!=70 && iid!=80 && iid!=90 && iid!=100){
                        myCoordinates.push(coordinate);
                        myCoordinates.push(coordinate+1); 
                        ship--;
                        return [ship, myCoordinates];
                }
            }
            if(ship==1){
                myCoordinates.push(coordinate);
                ship--;
                return [ship, myCoordinates];  
            }
        }else if(position === "vertical"){
            if(ship==4){
                if(iid<71){
                        myCoordinates.push(coordinate);
                        myCoordinates.push(coordinate+10);
                        myCoordinates.push(coordinate+20);
                        myCoordinates.push(coordinate+30);
                        ship--;
                        return [ship, myCoordinates];
                }
            }
            if(ship==3){
                if(iid<81){
                        myCoordinates.push(coordinate);
                        myCoordinates.push(coordinate+10);
                        myCoordinates.push(coordinate+20);
                        ship--;
                        return [ship, myCoordinates];
                }
            }
            if(ship==2){
                if(iid<91){
                        myCoordinates.push(coordinate);
                        myCoordinates.push(coordinate+10); 
                        ship--;
                        return [ship, myCoordinates];
                }
            }
            if(ship==1){
                myCoordinates.push(coordinate);
                ship--;
                return [ship, myCoordinates];  
            }
        }
        return false;
    } 
    displayScenario(){
        var sort=200;
        var horizontal = Math.floor(Math.random()*2);
        if(horizontal == 1){
            while(sort==108 || sort==109 || sort==110 || sort==118 || sort==119 || sort==120
            || sort==128 || sort==129 || sort==130 || sort==138 || sort==139 || sort==140
            || sort==148 || sort==149 || sort==150 || sort==158 || sort==159 || sort==160
            || sort==168 || sort==169 || sort==170 || sort==178 || sort==179 || sort==180
            || sort==188 || sort==189 || sort==190 || sort==198 || sort==199 || sort==200){
                sort = sortNumber(100);
            }
            enemyCoordinates.push(sort);
            enemyCoordinates.push(sort+1);
            enemyCoordinates.push(sort+2);
            enemyCoordinates.push(sort+3);
        }else if(horizontal == 0){
            while(sort>=171){
                sort = sortNumber(100);
            }
            enemyCoordinates.push(sort);
            enemyCoordinates.push(sort+10);
            enemyCoordinates.push(sort+20);
            enemyCoordinates.push(sort+30);
        }
        horizontal = Math.floor(Math.random()*2);
        if(horizontal == 1){
            while(sort==109 || sort==110 || sort==119 || sort==120
            || sort==129 || sort==130 ||sort==139 || sort==140
            || sort==149 || sort==150 || sort==159 || sort==160
            || sort==169 || sort==170 || sort==179 || sort==180
            || sort==189 || sort==190 || sort==199 || sort==200
            || sort==enemyCoordinates[0] || sort==enemyCoordinates[1]
            || sort==enemyCoordinates[2] || sort==enemyCoordinates[3]
            || sort+1==enemyCoordinates[0] || sort+1==enemyCoordinates[1]
            || sort+1==enemyCoordinates[2] || sort+1==enemyCoordinates[3]
            || sort+2==enemyCoordinates[0] || sort+2==enemyCoordinates[1]
            || sort+2==enemyCoordinates[2] || sort+2==enemyCoordinates[3]){
                sort = sortNumber(100);
            }
            enemyCoordinates.push(sort);
            enemyCoordinates.push(sort+1);
            enemyCoordinates.push(sort+2);
        }else if(horizontal == 0){
            while(sort>=181 || sort==enemyCoordinates[0] || sort==enemyCoordinates[1]
            || sort==enemyCoordinates[2] || sort==enemyCoordinates[3]
            || sort+10==enemyCoordinates[0] || sort+10==enemyCoordinates[1]
            || sort+10==enemyCoordinates[2] || sort+10==enemyCoordinates[3]
            || sort+20==enemyCoordinates[0] || sort+20==enemyCoordinates[1]
            || sort+20==enemyCoordinates[2] || sort+20==enemyCoordinates[3]){
                sort = sortNumber(100);
            }
            enemyCoordinates.push(sort);
            enemyCoordinates.push(sort+10);
            enemyCoordinates.push(sort+20);
        }
        horizontal = Math.floor(Math.random()*2);
        if(horizontal == 1){
            while(sort==110 || sort==120 || sort==130 || sort==140
            || sort==150 || sort==160 || sort==170 || sort==180
            || sort==190 || sort==200 || sort==enemyCoordinates[0] || sort==enemyCoordinates[1]
            || sort==enemyCoordinates[2] || sort==enemyCoordinates[3]
            || sort==enemyCoordinates[4] || sort==enemyCoordinates[5] || sort==enemyCoordinates[6]
            || sort+1==enemyCoordinates[0] || sort+1==enemyCoordinates[1]
            || sort+1==enemyCoordinates[2] || sort+1==enemyCoordinates[3]
            || sort+1==enemyCoordinates[4] || sort+1==enemyCoordinates[5] || sort+1==enemyCoordinates[6]){
                sort = sortNumber(100);
            }
            enemyCoordinates.push(sort);
            enemyCoordinates.push(sort+1); 
        }else if(horizontal == 0){
            while(sort>=191 || sort==enemyCoordinates[0] || sort==enemyCoordinates[1]
            || sort==enemyCoordinates[2] || sort==enemyCoordinates[3]
            || sort==enemyCoordinates[4] || sort==enemyCoordinates[5] || sort==enemyCoordinates[6]
            || sort+10==enemyCoordinates[0] || sort+10==enemyCoordinates[1]
            || sort+10==enemyCoordinates[2] || sort+10==enemyCoordinates[3]
            || sort+10==enemyCoordinates[4] || sort+10==enemyCoordinates[5] || sort+10==enemyCoordinates[6]){
                sort = sortNumber(100);
            }
            enemyCoordinates.push(sort);
            enemyCoordinates.push(sort+10);
        }
        horizontal = Math.floor(Math.random()*2);
        if(horizontal == 1){
            while(sort==enemyCoordinates[0] || sort==enemyCoordinates[1]
            || sort==enemyCoordinates[2] || sort==enemyCoordinates[3]
            || sort==enemyCoordinates[4] || sort==enemyCoordinates[5]
            || sort==enemyCoordinates[6] || sort==enemyCoordinates[7] || sort==enemyCoordinates[8]){
                sort = sortNumber(100);
            }
            enemyCoordinates.push(sort);
        }else if(horizontal == 0){
            while(sort==enemyCoordinates[0] || sort==enemyCoordinates[1]
            || sort==enemyCoordinates[2] || sort==enemyCoordinates[3]
            || sort==enemyCoordinates[4] || sort==enemyCoordinates[5]
            || sort==enemyCoordinates[6] || sort==enemyCoordinates[7] || sort==enemyCoordinates[8]){
                sort = sortNumber(100);
            }
            enemyCoordinates.push(sort);
        }    
        return enemyCoordinates;
    }
    receiveAttack(coordinate){
        //takes a pair of coordinates, determines whether 
        //or not the attack hit a ship and then sends the 
        //‘hit’ function to the correct ship, or records 
        //the coordinates of the missed shot.
        const tiro = new Audio("tiro.mp3");
        tiro.play();
        for(let i=0; i<enemyCoordinates.length; i++){
            if(coordinate==enemyCoordinates[i]){
                if(i==0 || i==1 || i==2 || i==3){
                    enemyShip4.hit();
                }
                if(i==4 || i==5 || i==6){
                    enemyShip3.hit();
                }
                if(i==7 || i==8){
                    enemyShip2.hit();
                }
                if(i==9){
                    enemyShip1.hit();
                }
                const audio = new Audio("sound.mp3");
                audio.play();
            }
        }
        const issAllSunk = this.isAllSunk(enemyShip1, enemyShip2, enemyShip3, enemyShip4);
        return issAllSunk;
    }
    displayAttack(coordinate){
        //should keep track of missed attacks so they can 
        //display them properly
        document.getElementById(coordinate).style.backgroundColor="#fca5a5";
        for(let i=0; i<enemyCoordinates.length; i++){
            if(coordinate==enemyCoordinates[i]){
                document.getElementById(coordinate).style.backgroundImage="url('ship.png')";
                document.getElementById(coordinate).style.backgroundSize="100%";
            }
        }
    }
    isAllSunk(ship1, ship2, ship3, ship4){
        //Gameboards should be able to report whether or 
        //not all of their ships have been sunk.
        const isShip4Sunk = ship4.isSunk();
        const isShip3Sunk = ship3.isSunk();
        const isShip2Sunk = ship2.isSunk();
        const isShip1Sunk = ship1.isSunk();
        if(isShip4Sunk==true && isShip3Sunk==true
            && isShip2Sunk==true && isShip1Sunk==true){
                return true;
            }
        return false;
    }
    gameOver(){
        //Create conditions so that the game ends once 
        //one players ships have all been sunk
        const alert = document.createElement("div");
        alert.setAttribute("id", "alert");
        document.body.appendChild(alert);
        const text = document.createElement("div");
        text.setAttribute("id", "text2");
        text.innerHTML="Game Over";
        document.getElementById("alert").appendChild(text);
        const button = document.createElement("button");
        button.setAttribute("onclick", "reload()");
        button.innerHTML="Play Again";
        document.getElementById("alert").appendChild(button);
    }
}
