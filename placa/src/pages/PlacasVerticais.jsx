import { useState, useRef } from 'react';
import PlacaOferta from '../components/PlacaOferta';
import PlacaAproveite from '../components/PlacaAproveite';
import { useReactToPrint } from 'react-to-print';

const PlacasVerticais = () => {
  const componentRef = useRef(); // Ref para o contêiner principal das placas
  const [placas, setPlacas] = useState([]);
  const [titulo, setTitulo] = useState('');
  const [precoInicial, setPrecoInicial] = useState('');
  const [precoReal, setPrecoReal] = useState('');
  const [precoCentavos, setPrecoCentavos] = useState('');
  const [dataInicial, setDataInicial] = useState('');
  const [dataFinal, setDataFinal] = useState('');
  const [tipo, setTipo] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();

    // Verificando os valores antes de adicionar
    console.log({ titulo, precoReal, precoCentavos, dataInicial, dataFinal, tipo });

    // Verificando se todos os campos estão preenchidos
    if(tipo === "Oferta"){
       if (titulo && precoInicial && precoReal && precoCentavos && dataInicial && dataFinal && tipo) {
        // Atualizando o estado com a nova placa
        setPlacas(prevPlacas => [
          ...prevPlacas,
          { titulo, precoInicial, precoReal, precoCentavos, dataInicial, dataFinal, tipo }
        ]);
      } else {
        console.error("Todos os campos precisam ser preenchidos.");
      }
    }
    if(tipo === "Aproveite"){
         if (titulo && precoReal && precoCentavos && tipo) {
          // Atualizando o estado com a nova placa
          setPlacas(prevPlacas => [
            ...prevPlacas,
            { titulo, precoReal, precoCentavos, tipo }
          ]);
        } else {
          console.error("Todos os campos precisam ser preenchidos.");
        }
    }
    // Limpar os campos do formulário após o envio
    setTitulo('');
    setPrecoInicial('');
    setPrecoReal('');
    setPrecoCentavos('');
    setDataInicial('');
    setDataFinal('');
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
                <PlacaOferta
                  titulo={placa.titulo}
                  precoInicial={placa.precoInicial}
                  precoReal={placa.precoReal}
                  precoCentavos={placa.precoCentavos}
                  dataInicial={placa.dataInicial}
                  dataFinal={placa.dataFinal}
                />
              </div>
            );
          }
          if (placa.tipo === "Aproveite") {
            return (
              <div className="background" key={index}>
                <PlacaAproveite
                  titulo={placa.titulo}
                  precoReal={placa.precoReal}
                  precoCentavos={placa.precoCentavos}
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
        <h1>Placas na Vertical</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Título: </span>
            <input
              type="text"
              name="titulo"
              value={titulo}
              onChange={(event) => setTitulo(event.target.value)}
            />
          </label>
           <label>
            <span>Preço Inicial: </span>
            <input
              type="text"
              name="precoInicial"
              value={precoInicial}
              onChange={(event) => setPrecoInicial(event.target.value)}
            />
            </label>
          <label>
            <span>Preço Real: </span>
            <input
              type="text"
              name="precoReal"
              value={precoReal}
              onChange={(event) => setPrecoReal(event.target.value)}
            />
            </label>
            <label>
            <span>Preço Centavos: </span>
            <input
              type="text"
              name="precoCentavos"
              value={precoCentavos}
              onChange={(event) => setPrecoCentavos(event.target.value)}
            />
          </label>
          <label>
            <span>Data Inicial: </span>
            <input
              type="text"
              name="dataInicial"
              value={dataInicial}
              onChange={(event) => setDataInicial(event.target.value)}
            />
          </label>
          <label>
            <span>Data Final: </span>
            <input
              type="text"
              name="dataFinal"
              value={dataFinal}
              onChange={(event) => setDataFinal(event.target.value)}
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

export default PlacasVerticais;