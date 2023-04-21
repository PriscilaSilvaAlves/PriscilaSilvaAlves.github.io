import React from "react";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import App from "../App.js";
import Products from "./Products.js";
import Item from './Item.js';
import Carrinho from './Carrinho.js';
import Nav from "./Nav.js";
import { useState } from 'react';
import teclado from '../images/teclado.png';
import teclado2 from '../images/teclado2.png'
import carregador from '../images/carregador.png';
import caixa from '../images/caixa-de-som.png';
import caixa2 from '../images/caixa-de-som2.png';
import hd from '../images/hd.png';
import mouse from '../images/mouse.png';
import mouse2 from '../images/mouse2.png';
import fone from '../images/fone1.png';
import fone2 from '../images/fone2.png';
import fone3 from '../images/fone3.png';
import fone4 from '../images/fone4.png';
import pendrive from '../images/pendrive.png';
import hubusb from '../images/hubusb.png';
import hubusb2 from '../images/hubusb2.png';

const RouteSwitch = () => {
  const [itens]=useState([
    {
      id: "1",
      nome: "Teclado retroiluminado",
      preco: 60,
      promo: 40,
      src: teclado,
      detalhes: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
    },
    {
      id: "2",
      nome: "Carregador sem fio",
      preco: 80,
      promo: 70,
      src: carregador,
      detalhes: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
    },
    {
      id: "3",
      nome: "HD externo",
      preco: 200,
      promo: 160,
      src: hd,
      detalhes: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.", 
    },
    {
      id: "4",
      nome: "Teclado retroiluminado",
      preco: 120,
      promo: 0,
      src: teclado2,
      detalhes: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
    },
    {
      id: "5",
      nome: "Caixa de som USB",
      preco: 100,
      promo: 0,
      src: caixa,
      detalhes: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
    },
    {
      id: "6",
      nome: "Caixa de som USB",
      preco: 190,
      promo: 0,
      src: caixa2,
      detalhes: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
    },
    {
      id: "7",
      nome: "Mouse USB",
      preco: 35,
      promo: 0,
      src: mouse,
      detalhes: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
    },
    {
      id: "8",
      nome: "Mouse USB",
      preco: 49,
      promo: 0,
      src: mouse2,
      detalhes: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
    },
    {
      id: "9",
      nome: "Fone de ouvido wireless",
      preco: 99,
      promo: 0,
      src: fone,
      detalhes: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
    },
    {
      id: "10",
      nome: "Pendrive",
      preco: 25,
      promo: 0,
      src: pendrive,
      detalhes: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
    },
    {
      id: "11",
      nome: "Fone de ouvido wireless branco",
      preco: 300,
      promo: 0,
      src: fone2,
      detalhes: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
    },
    {
      id: "12",
      nome: "Hub USB 4 portas",
      preco: 50,
      promo: 0,
      src: hubusb,
      detalhes: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
    },
    {
      id: "13",
      nome: "Fone de ouvido wireless preto",
      preco: 249,
      promo: 0,
      src: fone3,
      detalhes: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
    },
    {
      id: "14",
      nome: "Hub USB 4 portas",
      preco: 89,
      promo: 0,
      src: hubusb2,
      detalhes: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
    },
    {
      id: "15",
      nome: "Fone de ouvido wireless branco",
      preco: 189,
      promo: 0,
      src: fone4,
      detalhes: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
    }
  ]);
  const [ItensCarrinho, setItensCarrinho] = useState([]);
  function setCarrinho(id){
    let verificaCarrinho = ItensCarrinho.filter((item) => (item.id === id));
    const item = itens.filter((item) => (item.id === id));
    console.log(verificaCarrinho);
    if(verificaCarrinho.length === 0){
      setItensCarrinho([
        ...ItensCarrinho,
        {
          id: item[0].id,
          nome: item[0].nome,
          preco: item[0].preco,
          promo: item[0].promo,
          src: item[0].src,
          detalhes: item[0].detalhes,
          quantidade: 1,
        },
      ]);
    }
  }

  function incrementeCarrinho(id){
    const arr = ItensCarrinho.map((item) => {
      if(item.id === id){
        return ({...item, quantidade: item.quantidade+1})
      }else{
        return item;
      }
    })
    setItensCarrinho(arr);
  }

  function decrementeCarrinho(id){
    const arr = ItensCarrinho.map((item) => {
      if(item.id === id){
          return ({...item, quantidade: item.quantidade-1});
      }else{
        return item;
      }
    })
    const arrFilter = arr.filter((item) => item.quantidade !== 0);
    setItensCarrinho(arrFilter);
  }

  return (
    <HashRouter>
        <Nav></Nav>
        <Routes>    
            <Route path="/" element={<App itens={ itens } />} />
            <Route path="/products" element={<Products itens={ itens } />} />
            <Route path="/products/:id" element={<Item itens={ itens } setCarrinho={ setCarrinho } />} />
            <Route path="/carrinho/" element={<Carrinho ItensCarrinho={ ItensCarrinho } incrementeCarrinho={ incrementeCarrinho } decrementeCarrinho={ decrementeCarrinho } />} />
        </Routes>
    </HashRouter>
  );
};

export default RouteSwitch;