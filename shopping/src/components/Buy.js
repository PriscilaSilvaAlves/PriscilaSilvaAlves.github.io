import { Link } from "react-router-dom";

function Buy({ itens }){
    const promo = itens.filter((item)=>item.promo!==0);
    return (
        <div id="buy">
            <h1>Itens em promoção</h1>
            <div id="buyProducts">
            {promo.map((item) => (
                <Link to={`products/${item.id}`} data-testid="itensPromocao">
                    <div className="itemPromo" key={ item.id }>
                        <img src={ item.src } alt={ item.nome }></img>
                        <h2>{ item.nome }</h2>
                        <p className="precoNormal">De: R${ item.preco },00</p>
                        <p className="promoPreco">Por: R${ item.promo },00</p>
                    </div>
                </Link> 
            ))}
            </div>
        </div>
    );
}

export default Buy;