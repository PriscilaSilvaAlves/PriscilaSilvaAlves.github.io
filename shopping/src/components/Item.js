import '../styles/item.css';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

function Item({ itens, setCarrinho }){
    const { id } = useParams();
    const item = itens.filter((item) =>item.id===id);
    return (
        <div id="produto">
            <div id="fundo">
                <img src={ item[0].src } alt={ item[0].nome }></img>
                <div id="detalhes">
                    <h1>{ item[0].nome }</h1>
                    <p>{ item[0].detalhes }</p>
                    <p>{ (item[0].promo !==0) ? "De R$" + item[0].preco + ",00 por R$" + item[0].promo +",00" : "R$ "+item[0].preco+",00" }</p>
                    <div id="btnCompre">
                        <Link to="/carrinho/"><button onClick={ () => { setCarrinho(item[0].id) } }>Compre agora</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Item;