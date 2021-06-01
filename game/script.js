var contComputer=0;
var contUser=0;
function game(){
  var cwg="The computer won the game.";
  var ywg="You won the game.";
  var tieg="Tie Game.";
  if ((document.querySelector('#listYou').innerHTML=' ') && (document.querySelector('#listComputer').innerHTML=' ') && (document.querySelector('#result').innerHTML=' ')) {
    for (var i = 0; i <5; i++) {
      var u=userPlay();
      var c=computerPlay();
      playRound(u,c);
    }
    if (contComputer > contUser){
      alert(cwg);
      document.querySelector('#result').append(cwg);
    } else if (contUser > contComputer){
      alert(ywg);
      document.querySelector('#result').append(ywg);
    }else{
      alert(tieg);
      document.querySelector('#result').append(tieg);
    }
  }
}
function playRound(you, computer){
  var cw="The computer won the round.";
  var yw="You won the round.";
  var tie="Tie round.";
  if(you=="Rock" && computer=="Rock"){
    alert(tie);
  }else if(you=="Rock" && computer=="Scissors"){
    alert(yw);
    contUser++;
  }else if(you=="Rock" && computer=="Paper"){
    alert(cw);
    contComputer++;
  }else if(you=="Scissors" && computer=="Rock"){
    alert(cw);
    contComputer++;
  }else if(you=="Scissors" && computer=="Scissors"){
    alert(tie);
  }else if(you=="Scissors" && computer=="Paper"){
    alert(yw);
    contUser++;
  }else if(you=="Paper" && computer=="Paper"){
    alert(tie);
  }else if(you=="Paper" && computer=="Rock"){
    alert(yw);
    contUser++;
  }else if(you=="Paper" && computer=="Scissors"){
    alert(cw);
    contComputer++;
  }else{
    alert("Wrong value. The computer won the round.");
    contComputer++;
  }
}
function computerPlay(){
  var l=["Rock", "Paper", "Scissors"];
  c=l.length;
  i=Math.floor(Math.random()*c);
  var computerSelection=l[i];
  const li = document.createElement('li');
  li.innerHTML=computerSelection;
  document.querySelector('#listComputer').append(li);
  return computerSelection;
}
function userPlay(){
  e=prompt("Let's play: Rock, Paper or Scissors?");
  var playerSelection = e.charAt(0).toUpperCase()+e.slice(1);
  const li = document.createElement('li');
  li.innerHTML=playerSelection;
  document.querySelector('#listYou').append(li);
  return playerSelection;
}
