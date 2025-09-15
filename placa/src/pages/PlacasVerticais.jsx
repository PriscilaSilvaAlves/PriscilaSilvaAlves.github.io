import { useState, useRef, useEffect } from 'react';
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
  const [precoPromocional, setPrecoPromocional] = useState('');
  const [dataInicial, setDataInicial] = useState('');
  const [dataFinal, setDataFinal] = useState('');
  const [tipo, setTipo] = useState('');
  const [submeteu, setSubmeteu] = useState(false); 
  
  const formatarData = (data) => {
    const partes = data.split("-");
    return `${partes[2]}/${partes[1]}`; // dd/mm
  };

  function separarPreco(){
    let partes = precoPromocional.split(",");
    console.log(partes);
    let inteiro = parseInt(partes[0]);
    setPrecoReal(inteiro);
    let centavos = parseInt(partes[1]);
    setPrecoCentavos(centavos);

    console.log(precoReal);
    console.log(precoCentavos);
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    separarPreco();
    setSubmeteu(true);
  }

      useEffect(()=>{
        if (!submeteu) return;
        if(tipo === "Oferta"){
          if (titulo && precoReal && precoCentavos && dataInicial && dataFinal && tipo) {
            // Atualizando o estado com a nova placa
            const placa = {
              titulo,
              precoInicial,
              precoReal,
              precoCentavos,
              dataInicial: formatarData(dataInicial),
              dataFinal: formatarData(dataFinal),
              tipo
            };
            setPlacas(prevPlacas => [
              ...prevPlacas, placa
            ]);
          } else {
            alert("Todos os campos precisam ser preenchidos.");
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
              alert("Todos os campos precisam ser preenchidos.");
            }
        }

          setTitulo('');
          setPrecoInicial('');
          setPrecoReal('');
          setPrecoCentavos('');
          setPrecoPromocional('');
          setDataInicial('');
          setDataFinal('');
          setTipo('');
          setSubmeteu(false);
     }, [precoReal, precoCentavos, dataFinal, dataInicial, submeteu]);

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
          <span className='info'>(Para as placas de Aproveite só é 
            obrigatório colocar Título, Preço Promocional e Tipo. Para as placas de Oferta 
            apenas o campo Preço Inicial é optativo.)</span>
          <label>
            <span>Título: </span>
            <input
              type="text"
              name="titulo"
              value={titulo}
              onChange={(event) => setTitulo(event.target.value)}
              required
            />
          </label>
           <label>
            <span>Preço Inicial: </span>
            <input
              type="text"
              name="precoInicial"
              value={precoInicial}
              onChange={(event) => setPrecoInicial(event.target.value)}
              pattern="^\d+,\d{2}$"
              title="Use o formato com vírgula e dois dígitos após ela. Ex: 12,34"
            />
            </label>
          <label>
            <span>Preço Promocional: </span>
            <input
              type="text"
              name="precoReal"
              value={precoPromocional}
              onChange={(event) => setPrecoPromocional(event.target.value)}
              pattern="^\d+,\d{2}$"
              title="Use o formato com vírgula e dois dígitos após ela. Ex: 12,34"
              required
            />
            </label>
          <label>
            <span>Data Inicial: </span>
            <input
              type="date"
              name="dataInicial"
              value={dataInicial}
              onChange={(event) => setDataInicial(event.target.value)}
            />
          </label>
          <label>
            <span>Data Final: </span>
            <input
              type="date"
              name="dataFinal"
              value={dataFinal}
              onChange={(event) => setDataFinal(event.target.value)}
            />
          </label>
          <label>
            <span>Tipo: </span>
            <select name="tipo" value={tipo} onChange={(event) => setTipo(event.target.value)} required>
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