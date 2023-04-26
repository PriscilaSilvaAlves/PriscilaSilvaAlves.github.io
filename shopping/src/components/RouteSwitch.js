import React from "react";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import App from "../App.js";
import Products from "./Products.js";
import Item from './Item.js';
import Carrinho from './Carrinho.js';
import Nav from "./Nav.js";
import { useState, useEffect } from 'react';
import array from './List.js';

const RouteSwitch = () => {
  const [itens]=useState(array);
  const localJSON = localStorage.getItem("Carrinho");
  var localObj=[];
  if(localJSON !== null){
    localObj = JSON.parse(localJSON);
  }
  const [ItensCarrinho, setItensCarrinho] = useState(localObj);

  useEffect(() => {
    const a = JSON.stringify(ItensCarrinho);
    localStorage.setItem("Carrinho", a);
  }, [ItensCarrinho]);

  function setCarrinho(id){
    let verificaCarrinho = ItensCarrinho.filter((item) => (item.id === id));
    const item = itens.find((item) => (item.id === id));
    if(verificaCarrinho.length === 0){
      setItensCarrinho([
        ...ItensCarrinho,
        {
          id: item.id,
          nome: item.nome,
          preco: item.preco,
          promo: item.promo,
          src: item.src,
          detalhes: item.detalhes,
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