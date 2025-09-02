import { useState, useRef } from 'react';
import PlacaOfertaDupla from '../components/PlacaOfertaDupla';
import PlacaAproveiteDupla from '../components/PlacaAproveiteDupla';
import { useReactToPrint } from 'react-to-print';

const PlacasHorizontais = () => {
  const componentRef = useRef(); // Ref para o contêiner principal das placas
  const [placas, setPlacas] = useState([]);
  const [titulo1, setTitulo1] = useState('');
  const [precoInicial1, setPrecoInicial1] = useState('');
  const [precoReal1, setPrecoReal1] = useState('');
  const [precoCentavos1, setPrecoCentavos1] = useState('');
  const [dataInicial1, setDataInicial1] = useState('');
  const [dataFinal1, setDataFinal1] = useState('');
  const [titulo2, setTitulo2] = useState('');
  const [precoInicial2, setPrecoInicial2] = useState('');
  const [precoReal2, setPrecoReal2] = useState('');
  const [precoCentavos2, setPrecoCentavos2] = useState('');
  const [dataInicial2, setDataInicial2] = useState('');
  const [dataFinal2, setDataFinal2] = useState('');
  const [tipo, setTipo] = useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault()
    // Verificando se todos os campos estão preenchidos
    if(tipo === "Oferta"){
       if (titulo1 && precoReal1 && precoCentavos1 && dataInicial1 && dataFinal1 
        && titulo2 && precoReal2 && precoCentavos2 && dataInicial2 && dataFinal2 
        && tipo) {
        // Atualizando o estado com a nova placa
        setPlacas(prevPlacas => [
          ...prevPlacas,
          { titulo1, precoInicial1, precoReal1, precoCentavos1, dataInicial1, dataFinal1, 
            titulo2, precoInicial2, precoReal2, precoCentavos2, dataInicial2, dataFinal2,tipo }
        ]);
      } else {
        alert("Todos os campos precisam ser preenchidos.");
      }
    }
    if(tipo === "Aproveite"){
         if (titulo1 && precoReal1 && precoCentavos1 && titulo2 && precoReal2 && precoCentavos2 && tipo) {
          // Atualizando o estado com a nova placa
          setPlacas(prevPlacas => [
            ...prevPlacas,
            { titulo1, precoReal1, precoCentavos1, titulo2, precoReal2, precoCentavos2, tipo }
          ]);
        } else {
          alert("Os campos Título, preço real e preço centavos das duas placas precisam ser preenchidos.")
        }
    }
    // Limpar os campos do formulário após o envio
    setTitulo1('');
    setPrecoInicial1('');
    setPrecoReal1('');
    setPrecoCentavos1('');
    setDataInicial1('');
    setDataFinal1('');
    setTitulo2('');
    setPrecoInicial2('');
    setPrecoReal2('');
    setPrecoCentavos2('');
    setDataInicial2('');
    setDataFinal2('');
    setTipo('');
  }
  function Data() {
    if (placas.length === 0) {
      return null; // Não renderiza nada se o array estiver vazio
    }

    return (
      <div ref={componentRef}> {/* Ref agora no contêiner das placas */}
        {placas.map((placa, index) => {
          if (placa.tipo === "Oferta") {
            return (
              <div className="background" key={index}>
                <PlacaOfertaDupla
                  titulo1={placa.titulo1}
                  precoInicial1={placa.precoInicial1}
                  precoReal1={placa.precoReal1}
                  precoCentavos1={placa.precoCentavos1}
                  dataInicial1={placa.dataInicial1}
                  dataFinal1={placa.dataFinal1}
                  titulo2={placa.titulo2}
                  precoInicial2={placa.precoInicial2}
                  precoReal2={placa.precoReal2}
                  precoCentavos2={placa.precoCentavos2}
                  dataInicial2={placa.dataInicial2}
                  dataFinal2={placa.dataFinal2}
                />
              </div>
            );
          }
          if (placa.tipo === "Aproveite") {
            return (
              <div className="background" key={index}>
                <PlacaAproveiteDupla
                  titulo1={placa.titulo1}
                  precoReal1={placa.precoReal1}
                  precoCentavos1={placa.precoCentavos1}
                  titulo2={placa.titulo2}
                  precoReal2={placa.precoReal2}
                  precoCentavos2={placa.precoCentavos2}
                />
              </div>
            );
          }
          return null; // Caso não corresponda a nenhum tipo
        })}
      </div>
    );
  }
  const handlePrint = useReactToPrint({
      documentTitle: 'Title',
      contentRef: componentRef,
    })
  return (
    <div>
      <header className="App-header">
        <h1>Placas na Horizontal</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Título 1: </span>
            <input
              type="text"
              name="titulo1"
              value={titulo1}
              onChange={(event) => setTitulo1(event.target.value)}
            />
          </label>
           <label>
            <span>Preço Inicial 1: </span>
            <input
              type="text"
              name="precoInicial1"
              value={precoInicial1}
              onChange={(event) => setPrecoInicial1(event.target.value)}
            />
            </label>
          <label>
            <span>Preço Promocional Reais 1: </span>
            <input
              type="text"
              name="precoReal1"
              value={precoReal1}
              onChange={(event) => setPrecoReal1(event.target.value)}
            />
            </label>
            <label>
                <span>Preço Promocional Centavos 1: </span>
                <input
                type="text"
                name="precoCentavos1"
                value={precoCentavos1}
                onChange={(event) => setPrecoCentavos1(event.target.value)}
            />
          </label>
          <label>
            <span>Data Inicial 1: </span>
            <input
              type="text"
              name="dataInicial1"
              value={dataInicial1}
              onChange={(event) => setDataInicial1(event.target.value)}
            />
          </label>
          <label>
            <span>Data Final 1: </span>
            <input
              type="text"
              name="dataFinal1"
              value={dataFinal1}
              onChange={(event) => setDataFinal1(event.target.value)}
            />
          </label>
            <label>
            <span>Título 2: </span>
            <input
              type="text"
              name="titulo2"
              value={titulo2}
              onChange={(event) => setTitulo2(event.target.value)}
            />
          </label>
           <label>
            <span>Preço Inicial 2: </span>
            <input
              type="text"
              name="precoInicial2"
              value={precoInicial2}
              onChange={(event) => setPrecoInicial2(event.target.value)}
            />
            </label>
          <label>
            <span>Preço Promocional Reais 2: </span>
            <input
              type="text"
              name="precoReal2"
              value={precoReal2}
              onChange={(event) => setPrecoReal2(event.target.value)}
            />
            </label>
            <label>
                <span>Preço Promocional Centavos 2: </span>
                <input
                type="text"
                name="precoCentavos2"
                value={precoCentavos2}
                onChange={(event) => setPrecoCentavos2(event.target.value)}
            />
          </label>
          <label>
            <span>Data Inicial 2: </span>
            <input
              type="text"
              name="dataInicial2"
              value={dataInicial2}
              onChange={(event) => setDataInicial2(event.target.value)}
            />
          </label>
          <label>
            <span>Data Final 2: </span>
            <input
              type="text"
              name="dataFinal2"
              value={dataFinal2}
              onChange={(event) => setDataFinal2(event.target.value)}
            />
          </label>
          <label>
            <span>Tipo: </span>
            <select name="tipo" value={tipo} onChange={(event) => setTipo(event.target.value)}>
              <option value="Oferta">Selecione o tipo da placa</option>
              <option value="Oferta">Placa de Oferta</option>
              <option value="Aproveite">Placa de Aproveite</option>
            </select>
          </label>
          <button type="submit">Adicionar</button>
        </form>
        <div id="buttons">
          <button onClick={handlePrint}>Gerar PDF</button>
        </div>
        <br></br>
        <Data />
        <br></br>
        <footer>
          <span>Priscila Alves - priscila.contato@live.com</span>
        </footer>
      </header>
    </div>
  );
}

export default PlacasHorizontais;