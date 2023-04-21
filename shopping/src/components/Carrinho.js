import '../styles/carrinho.css';
import { Link } from "react-router-dom";

function Carrinho( { ItensCarrinho, incrementeCarrinho, decrementeCarrinho }){
    var total=0;
    ItensCarrinho.map((item) => {
        if(item.promo !== 0){
            total = total + item.quantidade*item.promo;
        }else{
            total = total + item.quantidade*item.preco;
        }
    })
    console.log(ItensCarrinho);
    return (
        <div id="produtoCarrinho">
            <div id="fundoCarrinho">
                <h1>Carrinho</h1>
                {ItensCarrinho.map((item) => (
                    <div id="itenCarrinho">
                        <img src={ item.src } alt={ item.nome }></img>
                        <div id="detalhes">
                            <h3>{ item.nome }</h3>
                            <p>{ item.detalhes }</p>
                            <p>{ (item.promo !=="0") ? "De R$ " + item.preco + ",00 por R$ " + item.promo+",00" : "R$ "+item.preco+",00" }</p>
                            <div id="btnIncrementar">
                                <button onClick={ () => { decrementeCarrinho(item.id) } }> - </button>
                                <p> { item.quantidade } </p>
                                <button onClick={ () => { incrementeCarrinho(item.id) } }> + </button>  
                            </div>
                        </div>
                    </div>
                ))}
                <h2>Total: R${ total },00</h2>
                <div id="btnCompre">
                    <Link to="/products/"><button>Continue comprando</button></Link>
                </div>
            </div>
        </div>
        );
}

export default Carrinho;