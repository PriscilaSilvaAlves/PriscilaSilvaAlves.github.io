import React, { forwardRef, useEffect, useRef, useState, useMemo } from 'react';
import './PlacaAproveite.css';

const PlacaAproveite = forwardRef(({ titulo, precoReal, precoCentavos }, ref) => {
  
    const tituloRef = useRef(null);
    const containerRef = useRef(null);
    const [fontSize, setFontSize] = useState(100); // tamanho inicial da fonte

    console.log("preco centavos dentro do component: "+precoCentavos);

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

    const fontSizeRealAproveite = useMemo(() => {
        if (!precoReal) return '600px';
        const length = precoReal.toString().length;
    
        if (length <= 2) return '600px';   // 1 ou 2 dígitos
        if (length === 3) return '500px';  // 3 dígitos
        if (length === 4) return '400px';  // 4 dígitos
        return '320px';                    // 5 ou mais dígitos
      }, [precoReal]); 
  
  return (
    <div ref={ref} className="placa-aproveite">
        <span className="sloganAproveite">APROVEITE</span>
        <div className="corpoAproveite">
          <div
              className="tituloAproveiteContainer"
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
              className='tituloAproveite'
              style={{
                fontSize: `${fontSize}px`,
                lineHeight: 1.1,
                wordBreak: 'break-word',
              }}
            >
              {titulo}
              </span>
            </div>
            <span className='cifraoAproveite'>&nbsp; R$</span>
            <div className='precoAproveite'>
              <span className="precoAproveiteReal" style={{ fontSize: fontSizeRealAproveite }}>{precoReal} </span>
              <span className="precoAproveiteCentavos">,{precoCentavos}</span>
            </div>    
        </div>
    </div>
  );
});
 
export default PlacaAproveite;