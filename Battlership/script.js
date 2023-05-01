import { Gameboard } from "./gameboard.js";
import { ship } from "./gameboard.js";
import { position, rotate, reload, placeShip, receiveAttack } from "./functions.js";

document.addEventListener("DOMContentLoaded", function(){
    const container = document.getElementById("container");
    container.innerHTML="<div id='title'><h1>Battlership</h1></div><div id='text'><p>Click to place your ships in the position you want.</p></div><button id='btnRotate' onclick='rotate()'>Horizontal (rotate)</button><div id='battlefield' class='battlefield'></div>";
    var div = "";
    for(let i=1; i<=100; i++){
        div += '<div id="'+i+'" class="field" onclick="placeShip('+i+')"></div>';
    }
    document.getElementById("battlefield").innerHTML=div;
    document.getElementById("battlefield").addEventListener("mouseover", function(event){
        let id = event.target.attributes.id.value;
        let iid=parseInt(id);
        if(position==="horizontal"){
            if(ship==4){
                if(iid!=8 && iid!=9 && iid!=10 && iid!=18 && iid!=19 && iid!=20 && iid!=28 && iid!=29 && iid!=30 && iid!=38 && iid!=39 && iid!=40
                    && iid!=48 && iid!=49 && iid!=50 && iid!=58 && iid!=59 && iid!=60
                    && iid!=68 && iid!=69 && iid!=70 && iid!=78 && iid!=79 && iid!=80
                    && iid!=88 && iid!=89 && iid!=90 && iid!=98 && iid!=99 && iid!=100){
                        document.getElementById(iid).style.backgroundColor="red";
                        document.getElementById(iid+1).style.backgroundColor="red";
                        document.getElementById(iid+2).style.backgroundColor="red";
                        document.getElementById(iid+3).style.backgroundColor="red";
                }
            }
            if(ship==3){
                if(iid!=9 && iid!=10 && iid!=19 && iid!=20 && iid!=29 && iid!=30 && iid!=39 && iid!=40
                    && iid!=49 && iid!=50 && iid!=59 && iid!=60 && iid!=69 
                    && iid!=70 && iid!=79 && iid!=80 && iid!=89 && iid!=90 && iid!=99 && iid!=100){
                        document.getElementById(iid).style.backgroundColor="red";
                        document.getElementById(iid+1).style.backgroundColor="red";
                        document.getElementById(iid+2).style.backgroundColor="red";
                }
            }
            if(ship==2){
                if(iid!=10 && iid!=20 && iid!=30 && iid!=40 && iid!=50 
                    && iid!=60 && iid!=70 && iid!=80 && iid!=90 && iid!=100){
                        document.getElementById(iid).style.backgroundColor="red";
                        document.getElementById(iid+1).style.backgroundColor="red";
                }
            }
            if(ship==1){
                document.getElementById(iid).style.backgroundColor="red";
            }
        }else if(position=="vertical"){
            if(ship==4){
                if(iid<71){
                        document.getElementById(iid).style.backgroundColor="red";
                        document.getElementById(iid+10).style.backgroundColor="red";
                        document.getElementById(iid+20).style.backgroundColor="red";
                        document.getElementById(iid+30).style.backgroundColor="red";
                }
            }
            if(ship==3){
                if(iid<81){
                        document.getElementById(iid).style.backgroundColor="red";
                        document.getElementById(iid+10).style.backgroundColor="red";
                        document.getElementById(iid+20).style.backgroundColor="red";
                }
            }
            if(ship==2){
                if(iid<91){
                        document.getElementById(iid).style.backgroundColor="red";
                        document.getElementById(iid+10).style.backgroundColor="red";
                }
            }
            if(ship==1){
                document.getElementById(iid).style.backgroundColor="red";
            }
        }
        
        
    });
    document.getElementById("battlefield").addEventListener("mouseout", function(event){
        let id = event.target.attributes.id.value;
        let iid = parseInt(id);
        if(position==="horizontal"){
            if(ship==4){
                document.getElementById(iid).style.backgroundColor="white";
                if(document.getElementById(iid+1) !== null){
                    document.getElementById(iid+1).style.backgroundColor="white";
                }
                if(document.getElementById(iid+2) !== null){
                    document.getElementById(iid+2).style.backgroundColor="white";
                }
                if(document.getElementById(iid+3) !== null){
                    document.getElementById(iid+3).style.backgroundColor="white";
                }
            }
            if(ship==3){
                document.getElementById(iid).style.backgroundColor="white";
                if(document.getElementById(iid+1) !== null){
                    document.getElementById(iid+1).style.backgroundColor="white";
                }
                if(document.getElementById(iid+2) !== null){
                    document.getElementById(iid+2).style.backgroundColor="white";
                }
            }
            if(ship==2){
                document.getElementById(iid).style.backgroundColor="white";
                if(document.getElementById(iid+1) !== null){
                    document.getElementById(iid+1).style.backgroundColor="white";
                }
            }
            if(ship==1){
                document.getElementById(iid).style.backgroundColor="white";
            }
        }else if(position==="vertical"){
            if(ship==4){
                document.getElementById(iid).style.backgroundColor="white";
                if(document.getElementById(iid+10) !== null){
                    document.getElementById(iid+10).style.backgroundColor="white";
                }
                if(document.getElementById(iid+20) !== null){
                    document.getElementById(iid+20).style.backgroundColor="white";
                }
                if(document.getElementById(iid+30) !== null){
                    document.getElementById(iid+30).style.backgroundColor="white";
                }
            }
            if(ship==3){
                document.getElementById(iid).style.backgroundColor="white";
                if(document.getElementById(iid+10) !== null){
                    document.getElementById(iid+10).style.backgroundColor="white";
                }
                if(document.getElementById(iid+20) !== null){
                    document.getElementById(iid+20).style.backgroundColor="white";
                }
            }
            if(ship==2){
                document.getElementById(iid).style.backgroundColor="white";
                if(document.getElementById(iid+10) !== null){
                    document.getElementById(iid+10).style.backgroundColor="white";
                }
            }
            if(ship==1){
                document.getElementById(iid).style.backgroundColor="white";
            }
        }
       
    });
}); 
window.reload=reload;
window.placeShip=placeShip;
window.receiveAttack=receiveAttack;
window.rotate=rotate;