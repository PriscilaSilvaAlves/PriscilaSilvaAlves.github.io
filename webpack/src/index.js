import _ from 'lodash';
import './style.css';
import Icon from './logo.png';
import Cheff from './cheff.jpeg';
//import myName from './myName';
function limpar(){
  var node = document.getElementById("down");
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  }
  const down = document.createElement('div');
  down.setAttribute('id','down');
  document.getElementById("content").appendChild(down);
}
function quadroBase(){
  const quadro = document.createElement('div');
  quadro.setAttribute('id','quadro');
  document.getElementById("down").appendChild(quadro);
}
function setHome() {
  limpar();
  quadroBase();
  const div1 = document.createElement('div');
  const div2 = document.createElement('div');
  div1.setAttribute('id','title');
  div2.setAttribute('id','messange');
  div1.innerHTML='Welcome to Burger Resto!';
  div2.innerHTML='We invite everyone to come to our establishment and discover our food. We wish you all a great meal.';
  const myCheff = new Image();
  myCheff.src = Cheff;
  document.getElementById('quadro').appendChild(div1);
  document.getElementById('quadro').appendChild(div2);
  document.getElementById('quadro').appendChild(myCheff);
}
function createItem(name, id, pai){
  name = document.createElement('div');
  name.setAttribute('id',id);
  document.getElementById(pai).appendChild(name);
}
function createSelection(name, classe, HTML, pai){
  name = document.createElement('div');
  name.setAttribute('class',classe);
  name.innerHTML=HTML;
  document.getElementById(pai).appendChild(name);
}
function createDescricao(descricao, nome, preco, idD, idNome, idPreco, htmlNome, htmlPreco, paiDescricao, paiNome, paiPreco){
  descricao = document.createElement('div');
  descricao.setAttribute('id',idD);
  nome = document.createElement('div');
  preco = document.createElement('div');
  nome.setAttribute('id',idNome);
  preco.setAttribute('id',idPreco);
  nome.innerHTML=htmlNome;
  preco.innerHTML=htmlPreco;
  document.getElementById(paiDescricao).appendChild(descricao);
  document.getElementById(paiNome).appendChild(nome);
  document.getElementById(paiPreco).appendChild(preco);
}
function setMenu(){
  limpar();
  quadroBase();
  createItem('item1', 'item1', 'quadro');
  createItem('item2', 'item2', 'quadro');
  createItem('item3', 'item3', 'quadro');
  createItem('item4', 'item4', 'quadro');
  createItem('item5', 'item5', 'quadro');
  createItem('item6', 'item6', 'quadro');
  createItem('item7', 'item7', 'quadro');
  createItem('item8', 'item8', 'quadro');
  createItem('item9', 'item9', 'quadro');
  createItem('item10', 'item10', 'quadro');
  document.getElementById('quadro').style.flexDirection='row';
  document.getElementById('quadro').style.flexWrap='wrap';
  createSelection('s1', 'selection', 'X', 'item1');
  createSelection('s2', 'selection', 'X', 'item2');
  createSelection('s3', 'selection', 'X', 'item3');
  createSelection('s4', 'selection', 'X', 'item4');
  createSelection('s5', 'selection', 'X', 'item5');
  createSelection('s6', 'selection', 'X', 'item6');
  createSelection('s7', 'selection', 'X', 'item7');
  createSelection('s8', 'selection', 'X', 'item8');
  createSelection('s9', 'selection', 'X', 'item9');
  createSelection('s10', 'selection', 'X', 'item10');
  createDescricao('descricao1', 'nome1', 'preco1', 'd1', 'nome1', 'preco1', 'X-Burger', '$5,00', 'item1', 'd1', 'd1');
  createDescricao('descricao2', 'nome2', 'preco2', 'd2', 'nome2', 'preco2', 'X-Chicken', '$6,00', 'item2', 'd2', 'd2');
  createDescricao('descricao3', 'nome3', 'preco3', 'd3', 'nome3', 'preco3', 'X-Salad', '$7,00', 'item3', 'd3', 'd3');
  createDescricao('descricao4', 'nome4', 'preco4', 'd4', 'nome4', 'preco4', 'Bauru', '$7,00', 'item4', 'd4', 'd4');
  createDescricao('descricao5', 'nome5', 'preco5', 'd5', 'nome5', 'preco5', 'Double Chicken', '$8,00', 'item5', 'd5', 'd5');
  createDescricao('descricao6', 'nome6', 'preco6', 'd6', 'nome6', 'preco6', 'Double Burger', '$8,00', 'item6', 'd6', 'd6');
  createDescricao('descricao7', 'nome7', 'preco7', 'd7', 'nome7', 'preco7', 'X-Burger', '$5,00', 'item7', 'd7', 'd7');
  createDescricao('descricao8', 'nome8', 'preco8', 'd8', 'nome8', 'preco8', 'X-Burger', '$5,00', 'item8', 'd8', 'd8');
  createDescricao('descricao9', 'nome9', 'preco9', 'd9', 'nome9', 'preco9', 'X-Burger', '$5,00', 'item9', 'd9', 'd9');
  createDescricao('descricao10', 'nome10', 'preco10', 'd10', 'nome10', 'preco10', 'X-Burger', '$5,00', 'item10', 'd10', 'd10');
}
function setContact(){
  limpar();
  quadroBase();
  const address = document.createElement('div');
  const phone = document.createElement('div');
  const iframe = document.createElement('iframe');
  address.setAttribute('id','address');
  phone.setAttribute('id','phone');
  iframe.setAttribute('src','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.1071568481793!2d-35.21171678599866!3d-5.8405179957681606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b2ff8b8d65e961%3A0xe005edc23b8cce1!2sVia%20Direta%20Shopping!5e0!3m2!1spt-BR!2sbr!4v1659650136787!5m2!1spt-BR!2sbr');
  iframe.setAttribute('style', 'border:0');
  iframe.setAttribute('allowfullscreen','');
  iframe.setAttribute('loading','lazy');
  iframe.setAttribute('referrerpolicy','no-referrer-when-downgrade');
  address.innerHTML='<b>Address:</b> 2233, Av. Salgado Filho, Natal, Brazil.';
  phone.innerHTML='<b>Phone number:</b> +55 84 99666-7788.';
  document.getElementById('quadro').appendChild(address);
  document.getElementById('quadro').appendChild(phone);
  document.getElementById('quadro').appendChild(iframe);
  document.getElementById('quadro').style.flexDirection='column';
  document.getElementById('quadro').style.flexWrap='unset';
}
window.setHome = setHome;
window.setMenu = setMenu;
window.setContact = setContact;
function main() {
  const top = document.createElement('div');
  top.setAttribute('id','top');
  const down = document.createElement('div');
  down.setAttribute('id','down');

  const topRight = document.createElement('div');
  topRight.setAttribute('id','topRight');
  const topLeft = document.createElement('div');
  topLeft.setAttribute('id','topLeft');

  const menu = document.createElement('div');
  menu.setAttribute('id','menu');
  const menuA = document.createElement('button');
  menuA.setAttribute('class','menu');
  menuA.setAttribute('id','menuA');
  menuA.setAttribute('onclick','setHome()');
  menuA.innerHTML='Home';
  const menuB = document.createElement('button');
  menuB.setAttribute('class','menu');
  menuB.setAttribute('id','menuB');
  menuB.setAttribute('onclick','setMenu()');
  menuB.innerHTML='Menu';
  const menuC = document.createElement('button');
  menuC.setAttribute('class','menu');
  menuC.setAttribute('id','menuC');
  menuC.setAttribute('onclick','setContact()');
  menuC.innerHTML='Contact';
  //const img = document.createElement('img');
  //img.setAttribute('src','logo.png');
  const myIcon = new Image();
  myIcon.src = Icon;

  const div1 = document.createElement('div');
  const div2 = document.createElement('div');
  div1.setAttribute('id','title');
  div2.setAttribute('id','messange');
  div1.innerHTML='Welcome to Burger Resto!';
  div2.innerHTML='We invite everyone to come to our establishment and discover our food. We wish you all a great meal.';
  const myCheff = new Image();
  myCheff.src = Cheff;
  const quadro = document.createElement('div');
  quadro.setAttribute('id','quadro');
  
  addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("content").appendChild(top);
    document.getElementById("content").appendChild(down);
    document.getElementById("top").appendChild(topRight);
    document.getElementById("top").appendChild(topLeft);
    document.getElementById("topLeft").appendChild(menu);
    document.getElementById("menu").appendChild(menuA);
    document.getElementById("menu").appendChild(menuB);
    document.getElementById("menu").appendChild(menuC);
    document.getElementById("topRight").appendChild(myIcon);
    document.getElementById("down").appendChild(quadro);  
    document.getElementById("quadro").appendChild(div1);
    document.getElementById("quadro").appendChild(div2);
    document.getElementById("quadro").appendChild(myCheff);
  });
}
main();
