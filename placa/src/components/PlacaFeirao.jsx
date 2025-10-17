
import React, { forwardRef, useEffect, useRef, useState, useMemo } from 'react';
import './PlacaFeirao.css';

const PlacaFeirao = forwardRef(({ titulo, precoInicial, precoReal, precoCentavos, dataInicial, dataFinal }, ref) => {

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
    if (!precoReal) return '640px';
    const length = precoReal.toString().length;

    if (length <= 2) return '600px';   // 1 ou 2 dígitos
    if (length === 3) return '500px';  // 3 dígitos
    if (length === 4) return '400px';  // 4 dígitos
    return '320px';                    // 5 ou mais dígitos
  }, [precoReal]);

  return (
    <div ref={ref} className="placa-oferta">
        <span className="sloganFeirao">FEIRÃO</span>
        <div className="corpoOferta">
          <div
              className="tituloOfertaContainer"
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
              className="tituloOferta"
              style={{
                fontSize: `${fontSize}px`,
                lineHeight: 1.1,
                wordBreak: 'break-word',
              }}
            >
              {titulo}
            </span>
          </div>
            {(precoInicial && precoInicial !== "-") && <span className='cifraoFeirao'>&nbsp;De&nbsp;<b>{precoInicial} </b>. Por R$</span>}
            {!precoInicial && <span className='cifraoFeirao'>&nbsp; R$</span>}
            <div className='precoOferta'>
              <span 
                className="precoOfertaReal"
                style={{ fontSize: fontSizeReal }}
              >
                {precoReal} 
              </span>
              <span className="precoOfertaCentavos">,{precoCentavos}</span>
            </div>    
        </div>
        {dataInicial === dataFinal ? (
            <span className='footerOferta'>Oferta válida para o dia {dataFinal}.</span>
          ) : (
            <span className='footerOferta'>Oferta válida de {dataInicial} até {dataFinal}.</span>
          )
        }
    </div>
  );
});

export default PlacaFeirao; 