
import React, { forwardRef, useEffect, useRef, useState, useMemo } from 'react';
import './PlacaFardo.css';

const PlacaFardo = forwardRef(({ titulo, fardo, precoReal, precoCentavos, dataInicial, dataFinal }, ref) => {

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
    if (!precoReal) return '530px';
    const length = precoReal.toString().length;

    if (length <= 2) return '530px';   // 1 ou 2 dígitos
    if (length === 3) return '450px';  // 3 dígitos
    if (length === 4) return '350px';  // 4 dígitos
    return '220px';                    // 5 ou mais dígitos
  }, [precoReal]);

  return (
    <div ref={ref} className="placa-fardo">
        <span className="sloganFardo">OFERTA</span>
        <div className="corpoFardo">
          <div
              className="tituloFardoContainer"
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
              className="tituloFardo"
              style={{
                fontSize: `${fontSize}px`,
                lineHeight: 1.1,
                wordBreak: 'break-word',
              }}
            >
              {titulo}
            </span>
          </div>
            {fardo>1 && <span className='fardo'>&nbsp;Fardo com&nbsp;<b>{fardo}</b>&nbsp;produtos.</span>}
            <div className='precoFardo'>
              <span 
                className="precoFardoReal"
                style={{ fontSize: fontSizeReal }}
              >
                {precoReal} 
              </span>
              <span className="precoFardoCentavos">,{precoCentavos}</span>
            </div>    
        </div>
        {dataInicial === dataFinal ? (
            <span className='footerFardo'>Oferta válida para o dia {dataFinal}.</span>
          ) : (
            <span className='footerFardo'>Oferta válida de {dataInicial} até {dataFinal}.</span>
          )
        }
    </div>
  );
});

export default PlacaFardo; 