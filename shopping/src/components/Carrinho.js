import '../styles/carrinho.css';
import { Link } from "react-router-dom";
import Contact from './Contact';
import '../App.css';
import {Helmet} from 'react-helmet';

function Carrinho( { ItensCarrinho, incrementeCarrinho, decrementeCarrinho }){
    var total=0;
    ItensCarrinho.map((item) => {
        if(item.promo !== 0){
            total = total + item.quantidade*item.promo;
        }else{
            total = total + item.quantidade*item.preco;
        }
    })
    return (
        <div id="corpoCarrinho">
            <Helmet><title>Rektr | Carrinho</title></Helmet>
            <div id="produtoCarrinho">
                <div id="fundoCarrinho" key="1">
                    <h1>Carrinho</h1>
                    {ItensCarrinho.map((item) => (
                        <div id="itenCarrinho">
                            <img src={ item.src } alt={ item.nome } aria-describedby="detalhes"></img>
                            <div id="detalhes">
                                <h3>{ item.nome }</h3>
                                <p>{ item.detalhes }</p>
                                <p>{ (item.promo !== 0) ? "De R$ " + item.preco + ",00 por R$ " + item.promo+",00" : "R$ "+item.preco+",00" }</p>
                                <div id="btnIncrementar">
                                    <button aria-label={ "Remover um item de "+item.nome+" do carrinho"} name="btnincrement" onClick={ () => { decrementeCarrinho(item.id) } }> - </button>
                                    <p> { item.quantidade } </p>
                                    <button aria-label={ "Acrescentar mais um item de "+item.nome+" ao carrinho"} name="btndecrement" onClick={ () => { incrementeCarrinho(item.id) } }> + </button>  
                                </div>
                            </div>
                        </div>
                    ))}
                    <h2>Total: R${ total },00</h2>
                    <div id="btnCompre"> 
                        <Link to="/products/"><button aria-label="Selecionar mais itens">Continue comprando</button></Link>
                    </div>
                </div>
            </div>
            <Contact />
        </div>
        );
}

export default Carrinho;