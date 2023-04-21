function createDivs(){
  var num = document.getElementById('matriz').value;
  if (num>100){
    alert("This number can't be rendered. The maximum value is 100.");
    num=100;
  }
  if(window.innerHeight > window.innerWidth){
    var h=(832/num)-2;
    var w=(832/num)-2;
  }else{
    var h=(512/num)-2;
    var w=(512/num)-2;
  }
  var matriz = num*num;
  var altura=h+"px";
  var largura=w+"px";
  var escrever='';
  var colunas='';
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
function selectRGB(cor,taxa){
  if(taxa==="1"){
    if(cor=="preto"){
      return `rgb(0, 0, 0)`;
    }else if(cor=="cinza"){
      return `rgb(190, 190, 190)`;
    }else if(cor=="azul"){
      return `rgb(0, 0, 255)`;
    }else if(cor=="ciano"){
      return `rgb(0, 255, 255)`
    }else if(cor=="vermelho"){
      return `rgb(255, 0, 0)`;
    }else if(cor=="amarelo"){
      return `rgb(255, 255, 0)`;
    }else if(cor=="pink"){
      return `rgb(255, 28, 174)`;
    }else if(cor=="rosa"){
      return `rgb(255, 0, 255)`;
    }else if(cor=="verde"){
      return `rgb(33, 94, 33)`;
    }else if(cor=="verdeLimao"){
      return `rgb(0, 255, 0)`;
    }else if(cor=="marrom"){
      return `rgb(184, 115, 51)`;
    }else if(cor=="laranja"){
      return `rgb(255, 165, 0)`;
    }else if(cor=="rosaBebe"){
      return `rgb(233, 194, 166)`;
    }else if(cor=="bege"){
      return `rgb(234, 234, 174)`;
    }
  }else{
    if(cor=="preto"){
      return `rgba(0, 0, 0, ${taxa})`;
    }else if(cor=="cinza"){
      return `rgba(190, 190, 190, ${taxa})`;
    }else if(cor=="azul"){
      return `rgba(0, 0, 255, ${taxa})`;
    }else if(cor=="ciano"){
      return `rgba(0, 255, 255, ${taxa})`
    }else if(cor=="vermelho"){
      return `rgba(255, 0, 0, ${taxa})`;
    }else if(cor=="amarelo"){
      return `rgba(255, 255, 0, ${taxa})`;
    }else if(cor=="pink"){
      return `rgba(255, 28, 174, ${taxa})`;
    }else if(cor=="rosa"){
      return `rgba(255, 0, 255, ${taxa})`;
    }else if(cor=="verde"){
      return `rgba(33, 94, 33, ${taxa})`;
    }else if(cor=="verdeLimao"){
      return `rgba(0, 255, 0, ${taxa})`;
    }else if(cor=="marrom"){
      return `rgba(184, 115, 51, ${taxa})`;
    }else if(cor=="laranja"){
      return `rgba(255, 165, 0, ${taxa})`;
    }else if(cor=="rosaBebe"){
      return `rgba(233, 194, 166, ${taxa})`;
    }else if(cor=="bege"){
      return `rgba(234, 234, 174, ${taxa})`;
    }
  }
}
