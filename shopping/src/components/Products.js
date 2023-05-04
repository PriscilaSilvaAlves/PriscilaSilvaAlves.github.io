import '../styles/products.css';
import { Link } from "react-router-dom";
import Contact from './Contact.js';
import '../App.css';  
import {Helmet} from 'react-helmet';

function Products({ itens }){
  
  return (
    <>
      <div id="products">
      <Helmet><title>Rektr | Produtos</title></Helmet>
        <h1>Produtos disponíveis</h1>
        <div id="lista">
          {itens.map((item) => (
              <Link to={ `/products/${item.id}` } data-testid={`productsItem${item.id}`}>
                <button className="item" key={item.id} aria-label={"Selecione o produto " + item.nome}>
                    <img src={ item.src } alt={ item.nome } aria-describedby="description"></img>
                    <div id="description">
                      <h2>{ item.nome }</h2>
                      <p className="preco"> {(item.promo!==0)? "De: R$" +  item.preco +",00": "R$ "+item.preco+",00" }</p>
                      <p className="promoPreco">{ (item.promo!==0? "Por: R$" + item.promo+",00" : "") }</p>
                    </div>
                </button>
              </Link>
          ))}
        </div> 
        <Contact />
      </div> 
    </>
  );
}

export default Products;