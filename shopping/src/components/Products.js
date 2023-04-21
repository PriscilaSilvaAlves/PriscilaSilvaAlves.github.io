import '../styles/products.css';
import { Link } from "react-router-dom";

function Products({ itens }){
  
  return (
    <div id="products">
      <h1>Produtos disponíveis</h1>
      <div id="lista">
        {itens.map((item) => (
            <Link to={ `/products/${item.id}` }>
              <div className="item" key={item.id}>
                  <img src={ item.src } alt={ item.nome }></img>
                  <h2>{ item.nome }</h2>
                  <p className="preco"> {(item.promo!==0)? "De: R$" +  item.preco +",00": "R$ "+item.preco+",00" }</p>
                  <p className="promoPreco">{ (item.promo!==0? "Por: R$" + item.promo+",00" : "") }</p>
              </div>
            </Link>
        ))}
      </div>
    </div>
  );
}

export default Products;