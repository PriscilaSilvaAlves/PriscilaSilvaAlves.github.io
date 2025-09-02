import React, { forwardRef } from 'react';
import './PlacaOfertaDupla.css';

const PlacaOfertaDupla = forwardRef(({ titulo1, precoInicial1, precoReal1, precoCentavos1, dataInicial1, dataFinal1,
    titulo2, precoInicial2, precoReal2, precoCentavos2, dataInicial2, dataFinal2
 }, ref) => {
  return (
    <div ref={ref} className="placa-ofertaDupla">
        <span className="sloganOfertaDupla">OFERTA</span>
        <div className="corpoOfertaDupla">
            <span className='tituloOfertaDupla'>{titulo1}</span>
            <br></br>
            <span className='cifraoOfertaDupla'>&nbsp;<s>De {precoInicial1} </s>. Por R$</span>
            <div className='precoOfertaDupla'>
              <span className="precoOfertaRealDupla">{precoReal1}, </span>
              <span className="precoOfertaCentavosDupla">{precoCentavos1}</span>
            </div>    
        </div>
        <span className='footerOfertaDupla'>Oferta válida de {dataInicial1} até {dataFinal1}.</span>
        <span className="sloganOfertaDupla">OFERTA</span>
        <div className="corpoOfertaDupla">
            <span className='tituloOfertaDupla'>{titulo2}</span>
            <br></br>
            <span className='cifraoOfertaDupla'>&nbsp;<s>De {precoInicial2} </s>. Por R$</span>
            <div className='precoOfertaDupla'>
              <span className="precoOfertaRealDupla">{precoReal2}, </span>
              <span className="precoOfertaCentavosDupla">{precoCentavos2}</span>
            </div>    
        </div>
        <span className='footerOfertaDupla'>Oferta válida de {dataInicial2} até {dataFinal2}.</span>
    </div>
  );
});

export default PlacaOfertaDupla;