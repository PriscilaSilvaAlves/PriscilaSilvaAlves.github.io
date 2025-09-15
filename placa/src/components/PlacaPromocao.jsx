import React, { forwardRef } from 'react';

const PlacaPromocao = forwardRef(({ titulo, precoReal, precoCentavos, dataInicial, dataFinal }, ref) => {
  return (
    <div ref={ref} className="placa-promocao">
      <h2>{titulo}</h2>
       <p>{precoReal}</p>
      <p>{precoCentavos}</p>
      <p>{dataInicial} - {dataFinal}</p>
    </div>
  );
});

export default PlacaPromocao;