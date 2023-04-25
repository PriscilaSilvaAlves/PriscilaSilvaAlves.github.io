import '../styles/item.css';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

function Item({ itens, setCarrinho }){
    const { id } = useParams();
    const item = itens.find((item) =>item.id===id);
    return (
        <div id="produto">
            <div id="fundo">
                <img src={ item.src } alt={ item.nome }></img>
                <div id="detalhes">
                    <h1>{ item.nome }</h1>
                    <p>{ item.detalhes }</p>
                    <p>{ (item.promo !==0) ? "De R$" + item.preco + ",00 por R$" + item.promo +",00" : "R$ "+item.preco+",00" }</p>
                    <div id="btnCompre">
                        <Link to="/carrinho/" data-testid="itemCarrinho"><button onClick={ () => { setCarrinho(item.id) } }>Compre agora</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Item;