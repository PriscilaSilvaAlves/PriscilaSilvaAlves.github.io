import React, { forwardRef, useEffect, useRef, useState, useMemo } from 'react';
import './PlacaDiaDDupla.css';

const PlacaOfertaDupla = forwardRef(({ titulo, precoInicial, precoReal, precoCentavos, dataInicial, dataFinal,
    titulo2, precoInicial2, precoReal2, precoCentavos2, dataInicial2, dataFinal2
 }, ref) => {

    const tituloRef = useRef(null);
    const containerRef = useRef(null);
    const [fontSize, setFontSize] = useState(100); // tamanho inicial da fonte
    const tituloRef2 = useRef(null);
    const containerRef2 = useRef(null);
    const [fontSize2, setFontSize2] = useState(100); // tamanho inicial da fonte

      // Ajuste dinâmico do primeiro título
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

      // Ajuste dinâmico do segundo título
      useEffect(() => {
            const ajustarFonte = () => {
              const tituloE2 = tituloRef2.current;
              const containerE2 = containerRef2.current;
      
              if (!tituloE2 || !containerE2) return;
      
              let size = 100;
              tituloE2.style.fontSize = `${size}px`;
      
              while (
                  (tituloE2.scrollHeight - containerE2.clientHeight > 0 ||
                  tituloE2.scrollWidth - containerE2.clientWidth > 0) &&
                  size > 25
                ) {
                  size -= 1;
                  tituloE2.style.fontSize = `${size}px`;
                }
      
              setFontSize2(size);
            };
      
            ajustarFonte();
          }, [titulo2]);

    const fontSizeRealOfertaDupla1 = useMemo(() => {
        if (!precoReal) return '170px';
        const length = precoReal.toString().length;
    
        if (length <= 2) return '170px';   // 1 ou 2 dígitos
        if (length === 3) return '140px';  // 3 dígitos
        if (length === 4) return '120px';  // 4 dígitos
        return '320px';                    // 5 ou mais dígitos
      }, [precoReal] );
      const fontSizeRealOfertaDupla2 = useMemo(() => {
        if (!precoReal2) return '170px';
        const length = precoReal2.toString().length;
    
        if (length <= 2) return '170px';   // 1 ou 2 dígitos
        if (length === 3) return '140px';  // 3 dígitos
        if (length === 4) return '120px';  // 4 dígitos
        return '320px';                    // 5 ou mais dígitos
      }, [precoReal2]);

  return (
    <div ref={ref} className="placa-ofertaDupla">
        <span className="sloganDiaDDupla">DIA D+</span>
        <div className="corpoOfertaDupla">
            <div
                className="tituloOfertaContainer"
                ref={containerRef}
                style={{
                  width: '100%',
                  height: '40mm', // defina altura conforme desejado
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  textAlign: 'center',
                }}
            >
              <span 
                ref={tituloRef}
                className='tituloOfertaDupla'
                style={{
                  fontSize: `${fontSize}px`,
                  lineHeight: 1.1,
                  wordBreak: 'break-word',
                }}
              >
                {titulo}
              </span>
            </div>
            {(precoInicial && precoInicial !== "-") && <span className='cifraoDiaDDupla'>&nbsp;De R$ &nbsp;<b>{precoInicial}</b>. Por:</span>}
            <div className='precoDiaDDupla'>
              <span className="precoOfertaRealDupla" style={{ fontSize: fontSizeRealOfertaDupla1 }}>R${precoReal}</span>
              <span className="precoOfertaCentavosDupla" style={{ fontSize: fontSizeRealOfertaDupla1 }}>,{precoCentavos}</span>
            </div>    
        </div>
        {dataInicial === dataFinal && <span className='footerOfertaDupla'>Oferta válida para o dia {dataFinal}.</span>}
        {dataInicial !== dataFinal && <span className='footerOfertaDupla'>Oferta válida de {dataInicial} até {dataFinal}.</span>}
        <span className="sloganDiaDDupla">DIA D+</span>
        <div className="corpoOfertaDupla">
          <div
                className="tituloOfertaContainer"
                ref={containerRef2}
                style={{
                  width: '100%',
                  height: '40mm', // defina altura conforme desejado
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  textAlign: 'center',
                }}
            >
            <span 
              ref={tituloRef2}
              className='tituloOfertaDupla'
              style={{
                fontSize: `${fontSize2}px`,
                lineHeight: 1.1,
                wordBreak: 'break-word',
              }}
              >
                {titulo2}
              </span>
            </div>
            {(precoInicial2 && precoInicial2 !== "-") && <span className='cifraoDiaDDupla'>&nbsp;De R$&nbsp;<b> {precoInicial2} </b>. Por:</span>}
            <div className='precoDiaDDupla'>
              <span className="precoOfertaRealDupla" style={{ fontSize: fontSizeRealOfertaDupla2 }}>R${precoReal2}</span>
              <span className="precoOfertaCentavosDupla" style={{ fontSize: fontSizeRealOfertaDupla2 }}>,{precoCentavos2}</span>
            </div>    
        </div>
        {dataInicial2 === dataFinal2 ? (
            <span className='footerOfertaDupla'>Oferta válida para o dia {dataFinal2}.</span>
          ) : (
            <span className='footerOfertaDupla'>Oferta válida de {dataInicial2} até {dataFinal2}.</span>
          )
        }
    </div>
  );
});
 
export default PlacaOfertaDupla;