var listNum=[];
var listNum1=[];
var listNum2=[];
var publicar='';
var operacaoMatematica='';
function calc(){
  console.log(listNum1)
  console.log(listNum)
  listNum2=listNum;
  console.log(listNum2)
  var stringList1=listNum1.join('');
  console.log(stringList1)
  var stringList2=listNum2.join('');
  console.log(stringList2)
  console.log(operacaoMatematica)
  if(operacaoMatematica=='+'){
    console.log("Entrou no calculo do mais")
    document.getElementById('dados').innerHTML=stringList1 + " + " + stringList2 + " = "
    var result=parseFloat(stringList1) + parseFloat(stringList2);
    console.log(result)
    document.getElementById('resultado').innerHTML=result;
  }else if(operacaoMatematica=='-'){
    console.log("Entrou no calculo do menos")
    document.getElementById('dados').innerHTML=stringList1 + " - " + stringList2 + " = "
    var result=parseFloat(stringList1) - parseFloat(stringList2);
    document.getElementById('resultado').innerHTML=result;
    console.log(result)
  }else if(operacaoMatematica=='/'){
    console.log("Entrou no calculo da divisao")
    document.getElementById('dados').innerHTML=stringList1 + " / " + stringList2 + " = "
    var result=parseFloat(stringList1) / parseFloat(stringList2);
    document.getElementById('resultado').innerHTML=result;
    console.log(result)
  }else if(operacaoMatematica=='x'){
    console.log("Entrou no calculo da multiplicacao")
    document.getElementById('dados').innerHTML=stringList1 + " X " + stringList2 + " = "
    var result=parseFloat(stringList1) * parseFloat(stringList2);
    document.getElementById('resultado').innerHTML=result;
    console.log(result)
  }else if(operacaoMatematica=='^'){
    console.log("Entrou no calculo do expoente")
    document.getElementById('dados').innerHTML=stringList1 + "^" + stringList2 + " = "
    var result=Math.pow(parseFloat(stringList1), parseInt(stringList2));
    document.getElementById('resultado').innerHTML=result;
    console.log(result)
  }else if(operacaoMatematica=='√'){
    console.log("Entrou no calculo da raiz de base 2")
    document.getElementById('dados').innerHTML="√" +stringList1 + " = "
    var result=Math.sqrt(stringList1);
    document.getElementById('resultado').innerHTML=result;
    console.log(result)
  }
}
function delNumber(){
  var num = document.getElementById('resultado').innerHTML;
  listNum=num.split('');
  listNum.pop();
  publicar=listNum.join('');
  document.getElementById('resultado').innerHTML=publicar;
}
function limpar(){
  listNum=[];
  listNum1=[];
  listNum2=[];
  publicar='';
  operacaoMatematica='';
  document.getElementById('resultado').innerHTML=publicar;
}
function sqrt(){
  var cont=0;
  operacaoMatematica = document.getElementById('sqrt').value;
  for (var i = 0; i < listNum.length; i++){
    if(listNum[i]!='+' && listNum[i]!='-' && listNum[i]!='X' && listNum[i]!='/' && listNum[i]!='√' && listNum[i]!='^'){
      cont++;
    }
  }
  if(listNum.length==cont){
    listNum1=listNum;
    listNum=[];
    document.getElementById('resultado').innerHTML=operacaoMatematica;
  }
}
function exp(){
  var cont=0;
  operacaoMatematica = document.getElementById('exp').value;
  console.log(operacaoMatematica)
  for (var i = 0; i < listNum.length; i++){
    if(listNum[i]!='+' && listNum[i]!='-' && listNum[i]!='X' && listNum[i]!='/' && listNum[i]!='√' && listNum[i]!='^'){
      cont++;
    }
  }
  if(listNum.length==cont){
    listNum1=listNum;
    listNum=[];
    document.getElementById('resultado').innerHTML=operacaoMatematica;
  }
}
function mais(){
  var cont=0;
  operacaoMatematica = document.getElementById('mais').value;
  for (var i = 0; i < listNum.length; i++){
    if(listNum[i]!='+' && listNum[i]!='-' && listNum[i]!='X' && listNum[i]!='/' && listNum[i]!='√' && listNum[i]!='^'){
      cont++;
    }
  }
  if(listNum.length==cont){
    listNum1=listNum;
    listNum=[];
    document.getElementById('resultado').innerHTML=operacaoMatematica;
  }
}
function menos(){
  var cont=0;
  operacaoMatematica = document.getElementById('menos').value;
  for (var i = 0; i < listNum.length; i++){
    if(listNum[i]!='+' && listNum[i]!='-' && listNum[i]!='X' && listNum[i]!='/' && listNum[i]!='√' && listNum[i]!='^'){
      cont++;
    }
  }
  if(listNum.length==cont){
    listNum1=listNum;
    listNum=[];
    document.getElementById('resultado').innerHTML=operacaoMatematica;
  }
}
function vezes(){
  var cont=0;
  operacaoMatematica = document.getElementById('vezes').value;
  for (var i = 0; i < listNum.length; i++){
    if(listNum[i]!='+' && listNum[i]!='-' && listNum[i]!='X' && listNum[i]!='/' && listNum[i]!='√' && listNum[i]!='^'){
      cont++;
    }
  }
  if(listNum.length==cont){
    listNum1=listNum;
    listNum=[];
    document.getElementById('resultado').innerHTML=operacaoMatematica;
  }
}
function dividido(){
  var cont=0;
  operacaoMatematica = document.getElementById('dividido').value;
  for (var i = 0; i < listNum.length; i++){
    if(listNum[i]!='+' && listNum[i]!='-' && listNum[i]!='X' && listNum[i]!='/' && listNum[i]!='√' && listNum[i]!='^'){
      cont++;
    }
  }
  if(listNum.length==cont){
    listNum1=listNum;
    listNum=[];
    document.getElementById('resultado').innerHTML=operacaoMatematica;
  }
}
function ponto(){
  var contPonto=0;
  var ponto = document.getElementById('ponto').value;
  for (var i = 0; i < listNum.length; i++){
    if(listNum[i]!='.'){
      contPonto++;
    }else{
      contPonto=0;
    }
  }
  if(listNum.length==contPonto){
    listNum.push('.');
    publicar=listNum.join('');
    document.getElementById('resultado').innerHTML=publicar;
  }
}
function insertUm(){
  var num = document.getElementById('um').value;
  listNum.push(num);
  publicar=listNum.join('');
  document.getElementById('resultado').innerHTML=publicar;
}
function insertDois(){
  var num = document.getElementById('dois').value;
  listNum.push(num);
  publicar=listNum.join('');
  document.getElementById('resultado').innerHTML=publicar;
}
function insertTres(){
  var num = document.getElementById('tres').value;
  listNum.push(num);
  publicar=listNum.join('');
  document.getElementById('resultado').innerHTML=publicar;
}
function insertQuatro(){
  var num = document.getElementById('quatro').value;
  listNum.push(num);
  publicar=listNum.join('');
  document.getElementById('resultado').innerHTML=publicar;
}
function insertCinco(){
  var num = document.getElementById('cinco').value;
  listNum.push(num);
  publicar=listNum.join('');
  document.getElementById('resultado').innerHTML=publicar;
}
function insertSeis(){
  var num = document.getElementById('seis').value;
  listNum.push(num);
  publicar=listNum.join('');
  document.getElementById('resultado').innerHTML=publicar;
}
function insertSete(){
  var num = document.getElementById('sete').value;
  listNum.push(num);
  publicar=listNum.join('');
  document.getElementById('resultado').innerHTML=publicar;
}
function insertOito(){
  var num = document.getElementById('oito').value;
  listNum.push(num);
  publicar=listNum.join('');
  document.getElementById('resultado').innerHTML=publicar;
}
function insertNove(){
  var num = document.getElementById('nove').value;
  listNum.push(num);
  publicar=listNum.join('');
  document.getElementById('resultado').innerHTML=publicar;
}
function insertZero(){
  var num = document.getElementById('zero').value;
  listNum.push(num);
  publicar=listNum.join('');
  document.getElementById('resultado').innerHTML=publicar;
}
