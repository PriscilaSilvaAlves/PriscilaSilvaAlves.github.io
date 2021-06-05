function createDivs(){
  let num = document.getElementById('matriz').value;
  if (num>100){
    alert("This number can't be rendered. The maximum value is 100.");
    num=100;
  }
  let matriz = num*num;
  let h=(512/num)-2;
  let w=(512/num)-2;
  let altura=h+"px";
  let largura=w+"px";
  let escrever='';
  let colunas='';
  for (var i = 0; i<matriz; i++) {
    escrever += `<div id="${i}" class="gridClass" quantidade="1"></div>`
  }
  for (var i = 0; i <num; i++) {
    colunas += "auto "
  }
  document.getElementById(`gd`).innerHTML = escrever;
  document.getElementById(`gd`).style.gridTemplateColumns=colunas;
  for (var i = 0; i<matriz; i++) {
    document.getElementById(`${i}`).style.height=altura;
    document.getElementById(`${i}`).style.width=largura;
  }
}
function cleanDivs(){
  document.getElementById(`gd`).innerHTML = '';
  document.getElementById(`gd`).style.gridTemplateColumns="auto";
}
