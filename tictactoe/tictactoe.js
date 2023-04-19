const gameboard = (() => {
  var array=[];
  const creatArray = () => array=["","","","","","","","",""];
  return { creatArray };
})();
const displayController = (() => {
  var playwinner;
  const creatWinner = () => playwinner="";
  return { creatWinner };
})();
const player = (type) => {
  var p=type;
  return p;
};
var table=gameboard.creatArray();
var vencedor=displayController.creatWinner();
var contador=0
function print(vector){
    for(var i=0; i<9; i++){
        if(vector[i]!=""){
          var j=i+1;
          if(document.getElementById("bt"+j).innerHTML==""){
            document.getElementById("bt"+j).removeAttribute("style");
            document.getElementById("bt"+j).innerHTML=vector[i];
          }
        }
    }
}
function selectPlayer(n){
  if((n % 2) == 0){
    var gamble = player("X");
  }else{
    var gamble = player("O");
  }
  return gamble;
}
function updateBoard(i, player){
  if(table[i] == ""){
    table[i]=player;
  }
  return table;
}
function winner(list){
  vencedor=displayController.creatWinner();
    if(list[0]==="X" && list[1]==="X" && list[2]==="X"){
      vencedor="X";
    }
    if(list[0]==="O" && list[1]==="O" && list[2]==="O"){
      vencedor="O";
    }
    if(list[0]==="O" && list[3]==="O" && list[6]==="O"){
      vencedor="O";
    }
    if(list[0]==="X" && list[3]==="X" && list[6]==="X"){
      vencedor="X";
    }
    if(list[0]==="O" && list[4]==="O" && list[8]==="O"){
      vencedor="O";
    }
    if(list[0]==="X" && list[4]==="X" && list[8]==="X"){
      vencedor="X";
    }
    if(list[1]==="O" && list[4]==="O" && list[7]==="O"){
      vencedor="O";
    }
    if(list[1]==="X" && list[4]==="X" && list[7]==="X"){
      vencedor="X";
    }
    if(list[2]==="X" && list[5]==="X" && list[8]==="X"){
      vencedor="X";
    }
    if(list[2]==="O" && list[5]==="O" && list[8]==="O"){
      vencedor="O";
    }
    if(list[2]==="O" && list[4]==="O" && list[6]==="O"){
      vencedor="O";
    }
    if(list[2]==="X" && list[4]==="X" && list[6]==="X"){
      vencedor="X";
    }
    if(list[3]==="X" && list[4]==="X" && list[5]==="X"){
      vencedor="X";
    }
    if(list[3]==="O" && list[4]==="O" && list[5]==="O"){
      vencedor="O";
    }
    if(list[6]==="O" && list[7]==="O" && list[8]==="O"){
      vencedor="O";
    }
    if(list[6]==="X" && list[7]==="X" && list[8]==="X"){
      vencedor="X";
    }
    return vencedor;
}
function play(position){
  const p = selectPlayer(contador);
  var listaJogadas = updateBoard(position, p);
  contador++;
  var vencedor = winner(listaJogadas);
  if(vencedor != "X" && vencedor != "O" && vencedor != "empate"){
    print(listaJogadas);
  }
  const bt1 = document.getElementById("bt1").innerHTML;
  const bt2 = document.getElementById("bt2").innerHTML;
  const bt3 = document.getElementById("bt3").innerHTML;
  const bt4 = document.getElementById("bt4").innerHTML;
  const bt5 = document.getElementById("bt5").innerHTML;
  const bt6 = document.getElementById("bt6").innerHTML;
  const bt7 = document.getElementById("bt7").innerHTML;
  const bt8 = document.getElementById("bt8").innerHTML;
  const bt9 = document.getElementById("bt9").innerHTML;
  if(contador==9 && vencedor==""){
    if(bt1=="X" || bt1=="O"){
      if(bt2=="X" || bt2=="O"){
        if(bt3=="X" || bt3=="O"){
          if(bt4=="X" || bt4=="O"){
            if(bt5=="X" || bt5=="O"){
              if(bt6=="X" || bt6=="O"){
                if(bt7=="X" || bt7=="O"){
                  if(bt8=="X" || bt8=="O"){
                    if(bt9=="X" || bt9=="O"){
                      vencedor="empate";
                    }
                  }
                }
              }
            }
          }
        }
      } 
    }
  }
  if(vencedor=="X" || vencedor=="O"|| vencedor=="empate"){
    print(listaJogadas);
    printWinner(vencedor);
    table=gameboard.creatArray();
  }
}
function printWinner(vencedor){
  if(vencedor=="empate"){
    var text="O jogo empatou";
  }
  if(vencedor=="X"){
    var name = document.getElementById("inputp1").value;
    var text=name+" is the winner!";
  } 
  if(vencedor=="O"){
    var name = document.getElementById("inputp2").value;
    var text=name+" is the winner!";
  }
  document.getElementById("container3").style.height="200px";
  document.getElementById("container3").style.width="500px";
  document.getElementById("container3").style.position="fixed";
  document.getElementById("container3").style.padding="20px";
  document.getElementById("container3").style.backgroundColor="white";
  document.getElementById("container3").style.boxShadow="0 0 4px 1px grey";
  var div = document.createElement("div");
  div.setAttribute("id","text");
  div.innerHTML=text;
  document.getElementById("container3").appendChild(div);
  var button = document.createElement("button");
  button.setAttribute("id","playAgain");
  button.setAttribute("onclick","newGame()");
  button.innerHTML="Jogar novamente";
  document.getElementById("container3").appendChild(button);
  document.getElementById("bt1").style.fontSize="40px";
  document.getElementById("bt1").innerHTML="Game Over";
  document.getElementById("bt2").style.fontSize="40px";
  document.getElementById("bt2").innerHTML="Game Over";
  document.getElementById("bt3").style.fontSize="40px";
  document.getElementById("bt3").innerHTML="Game Over";
  document.getElementById("bt4").style.fontSize="40px";
  document.getElementById("bt4").innerHTML="Game Over";
  document.getElementById("bt5").style.fontSize="40px";
  document.getElementById("bt5").innerHTML="Game Over";
  document.getElementById("bt6").style.fontSize="40px";
  document.getElementById("bt6").innerHTML="Game Over";
  document.getElementById("bt7").style.fontSize="40px";
  document.getElementById("bt7").innerHTML="Game Over";
  document.getElementById("bt8").style.fontSize="40px";
  document.getElementById("bt8").innerHTML="Game Over";
  document.getElementById("bt9").style.fontSize="40px";
  document.getElementById("bt9").innerHTML="Game Over";
}
function newGame(){
  document.getElementById("bt1").innerHTML="";
  document.getElementById("bt2").innerHTML="";
  document.getElementById("bt3").innerHTML="";
  document.getElementById("bt4").innerHTML="";
  document.getElementById("bt5").innerHTML="";
  document.getElementById("bt6").innerHTML="";
  document.getElementById("bt7").innerHTML="";
  document.getElementById("bt8").innerHTML="";
  document.getElementById("bt9").innerHTML="";
  document.getElementById("inputp1").value="";
  document.getElementById("inputp2").value="";
  document.getElementById("container3").removeAttribute("style");
  var node1 = document.getElementById("text");
  var node2 = document.getElementById("playAgain");
  if (node1.parentNode || node2.parentNode) {
      node1.parentNode.removeChild(node1);
      node2.parentNode.removeChild(node2);
  }
  table=gameboard.creatArray();
  vencedor=displayController.creatWinner();
  contador=0;
}
