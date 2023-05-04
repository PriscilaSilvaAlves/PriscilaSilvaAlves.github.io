import { Link } from "react-router-dom";

function Buy({ itens }){
    const promo = itens.filter((item)=>item.promo!==0);
    return (
        <div id="buy">
            <h1>Itens em promoção</h1>
            <div id="buyProducts">
            {promo.map((item) => (
                <Link to={`products/${item.id}`} data-testid="itensPromocao">
                    <button className="itemPromo" key={ item.id } aria-label={ "Ir para a aba de detalhes do "+item.nome}>
                        <img src={ item.src } alt={ item.nome } aria-describedby={ "detalhes-"+item.id }></img>
                        <div id={ "detalhes-"+item.id } className="detalhes">
                            <h2>{ item.nome }</h2>
                            <p className="precoNormal">De: R${ item.preco },00</p>
                            <p className="promoPreco">Por: R${ item.promo },00</p>
                        </div>
                    </button>
                </Link> 
            ))}
            </div>
        </div>
    );
}

export default Buy;