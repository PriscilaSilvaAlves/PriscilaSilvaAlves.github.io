
import React, { forwardRef, useEffect, useRef, useState, useMemo } from 'react';
import './PlacaNota10.css';

const PlacaNota10 = forwardRef(({ titulo, fardo, precoReal, precoCentavos, dataInicial, dataFinal }, ref) => {

    const tituloRef = useRef(null);
    const containerRef = useRef(null);
    const [fontSize, setFontSize] = useState(100); // tamanho inicial da fonte

    // Ajusta o font-size do título
    useEffect(() => {
      const ajustarFonte = () => {
        const tituloE1 = tituloRef.current;
        const containerE1 = containerRef.current;

        if (!tituloE1 || !containerE1) return;

        let size = 200;
        tituloE1.style.fontSize = `${size}px`;

        while (
            (tituloE1.scrollHeight - containerE1.clientHeight > 0 ||
            tituloE1.scrollWidth - containerE1.clientWidth > 0) &&
            size > 25
          ) {
            size -= 1;
            tituloE1.style.fontSize = `${size}px`;
          }

        setFontSize(size);
      };

      ajustarFonte();
    }, [titulo]); 

    const fontSizeReal = useMemo(() => {
    if (!precoReal) return '550px';
    const length = precoReal.toString().length;

    if (length <= 2) return '550px';   // 1 ou 2 dígitos
    if (length === 3) return '450px';  // 3 dígitos
    if (length === 4) return '400px';  // 4 dígitos
    return '320px';                    // 5 ou mais dígitos
  }, [precoReal]);

  return (
    <div ref={ref} className="placa-nota10">
        <span className="sloganNota10">NOTA 10</span>
        <div className="corpoNota10">
          <div
              className="tituloNota10Container"
              ref={containerRef}
              style={{
                width: '100%',
                height: '52mm', // defina altura conforme desejado
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                textAlign: 'center',
              }}
          >
            <span 
              ref={tituloRef}
              className="tituloNota10"
              style={{
                fontSize: `${fontSize}px`,
                lineHeight: 1.1,
                wordBreak: 'break-word',
              }}
            >
              {titulo}
            </span>
          </div>
            {fardo && <span className='quantidadeNota10'>{fardo} UNID POR:</span>}
            <span className='cifraoNota10'>&nbsp; R$</span>
            <div className='precoNota10'>
              <span 
                className="precoNota10Real"
                style={{ fontSize: fontSizeReal }}
              >
                {precoReal} 
              </span>
              <span className="precoNota10Centavos">,{precoCentavos}</span>
            </div>    
        </div>
        {dataInicial === dataFinal ? (
            <span className='footerNota10'>Oferta válida para o dia {dataFinal}.</span>
          ) : (
            <span className='footerNota10'>Oferta válida de {dataInicial} até {dataFinal}.</span>
          )
        }
    </div>
  );
});

export default PlacaNota10; 