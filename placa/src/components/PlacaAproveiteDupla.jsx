import React, { forwardRef, useEffect, useRef, useState, useMemo } from 'react';
import './PlacaAproveiteDupla.css';

const PlacaAproveiteDupla = forwardRef(({ 
  titulo, precoReal, precoCentavos, 
  titulo2, precoReal2, precoCentavos2 
}, ref) => {

  const tituloRef = useRef(null);
  const containerRef = useRef(null);
  const [fontSize, setFontSize] = useState(100);

  const tituloRef2 = useRef(null);
  const containerRef2 = useRef(null);
  const [fontSize2, setFontSize2] = useState(100);

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
              let size = 150;
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

  // Font-size dos preços
  const fontSizeRealAproveiteDupla1 = useMemo(() => {
    if (!precoReal) return '170px';
    const length = precoReal.toString().length;
    if (length <= 2) return '170px';
    if (length === 3) return '140px';
    if (length === 4) return '120px';
    return '100px';
  }, [precoReal]);

  const fontSizeRealAproveiteDupla2 = useMemo(() => {
    if (!precoReal2) return '170px';
    const length = precoReal2.toString().length;
    if (length <= 2) return '170px';
    if (length === 3) return '140px';
    if (length === 4) return '120px';
    return '100px';
  }, [precoReal2]);

  return (
    <div ref={ref} className="placa-aproveiteDupla">
      <span className="sloganAproveiteDupla">APROVEITE</span>

      <div className="corpoAproveiteDupla">
        <div
          className="tituloAproveiteDuplaContainer"
          ref={containerRef}
          style={{
            width: '100%',
            height: '60mm',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            textAlign: 'center',
          }}
        >
          <span 
            ref={tituloRef}
            className='tituloAproveiteDupla'
            style={{
              fontSize: `${fontSize}px`,
              lineHeight: 1.1,
              wordBreak: 'break-word',
            }}
          >
            {titulo}
          </span>
        </div>

        <div className='precoAproveiteDupla'>
          <span className="precoAproveiteRealDupla" style={{ fontSize: fontSizeRealAproveiteDupla1 }}>
            R${precoReal} 
          </span>
          <span className="precoAproveiteCentavosDupla" style={{ fontSize: fontSizeRealAproveiteDupla2 }}>
            ,{precoCentavos}
          </span>
        </div>    
      </div>

      <span className="sloganAproveiteDupla">APROVEITE</span>

      <div className="corpoAproveiteDupla">
        <div
          className="tituloAproveiteDuplaContainer"
          ref={containerRef2}
          style={{
            width: '100%',
            height: '40mm',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            textAlign: 'center',
          }}
        >
          <span 
            ref={tituloRef2}
            className='tituloAproveiteDupla'
            style={{
              fontSize: `${fontSize2}px`,
              lineHeight: 1.1,
              wordBreak: 'break-word',
            }}
          >
            {titulo2}
          </span>
        </div>

        <div className='precoAproveiteDupla'>
          <span className="precoAproveiteRealDupla" style={{ fontSize: fontSizeRealAproveiteDupla2 }}>
            R${precoReal2} 
          </span>
          <span className="precoAproveiteCentavosDupla" style={{ fontSize: fontSizeRealAproveiteDupla2 }}>
            ,{precoCentavos2}
          </span>
        </div>    
      </div>
    </div>
  );
});

export default PlacaAproveiteDupla;