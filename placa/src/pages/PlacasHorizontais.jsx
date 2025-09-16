import { useState, useRef, useEffect } from 'react';
import PlacaOfertaDupla from '../components/PlacaOfertaDupla';
import PlacaAproveiteDupla from '../components/PlacaAproveiteDupla';
import { useReactToPrint } from 'react-to-print';
import './PlacasHorizontais.css';

const PlacasHorizontais = () => {
  const componentRef = useRef(); // Ref para o contêiner principal das placas
  const [placas, setPlacas] = useState([]);
  const [titulo1, setTitulo1] = useState('');
  const [precoInicial1, setPrecoInicial1] = useState('');
  const [precoReal1, setPrecoReal1] = useState('');
  const [precoCentavos1, setPrecoCentavos1] = useState('');
  const [precoPromocional1, setPrecoPromocional1] = useState('');
  const [dataInicial1, setDataInicial1] = useState('');
  const [dataFinal1, setDataFinal1] = useState('');
  const [titulo2, setTitulo2] = useState('');
  const [precoInicial2, setPrecoInicial2] = useState('');
  const [precoReal2, setPrecoReal2] = useState('');
  const [precoCentavos2, setPrecoCentavos2] = useState('');
  const [precoPromocional2, setPrecoPromocional2] = useState('');
  const [dataInicial2, setDataInicial2] = useState('');
  const [dataFinal2, setDataFinal2] = useState('');
  const [tipo, setTipo] = useState('');
  const [submeteu, setSubmeteu] = useState(false); 
  
  const formatarData = (data) => {
    const partes = data.split("-");
    return `${partes[2]}/${partes[1]}`; // dd/mm
  };

   function separarPreco(){
    console.log("Entoru no separarPreco");
    console.log(precoPromocional1);
    if(precoPromocional1 != ''){
      let partes1 = precoPromocional1.split(",");
      setPrecoReal1(partes1[0]);
      setPrecoCentavos1(partes1[1]);
      console.log("ENtrou no if");
    }
    if(precoPromocional2 !== ''){
      let partes2 = precoPromocional2.split(",");
      setPrecoReal2(partes2[0]);
      setPrecoCentavos2(partes2[1]);
    }else{
      setPrecoReal2("0");
      setPrecoCentavos2("0");
    }
   
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Entoru no handleSubmit");  
    // Verificando se todos os campos estão preenchidos
    separarPreco();
    setSubmeteu(true);
    
  }

  useEffect(()=>{
     if (!submeteu) return;
    if(tipo === "Oferta"){
       if (titulo1 && precoReal1 && precoCentavos1 && dataInicial1 && dataFinal1 && tipo) {
        // Atualizando o estado com a nova placa
        const placa = { titulo1, precoInicial1, precoReal1, precoCentavos1, 
          dataInicial1: formatarData(dataInicial1), dataFinal1: formatarData(dataFinal1), 
            titulo2, precoInicial2, precoReal2, precoCentavos2, 
            dataInicial2: formatarData(dataInicial2), dataFinal2: formatarData(dataFinal2),tipo }
        setPlacas(prevPlacas => [
          ...prevPlacas, placa
        ]);
      } else {
        const notifyError = () => {
            console.log("Apenas o campo Preço Inicial é optativo");
          };
      }
    }
    if(tipo === "Aproveite"){
      console.log("Entrou no if do aproveite")
         if (titulo1 && precoReal1 && precoCentavos1 && tipo) {
          console.log("Entrou no segundo if");
          // Atualizando o estado com a nova placa
          setPlacas(prevPlacas => [
            ...prevPlacas,
            { titulo1, precoReal1, precoCentavos1, titulo2, precoReal2, precoCentavos2, tipo }
          ]);
        } else {
          const notifyError = () => {
            console.log("Os campos Título, preço real e preço centavos das duas placas precisam ser preenchidos.");
          };
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
    setPrecoPromocional1('');
    setPrecoPromocional2('');
  }, [submeteu, precoReal1, precoCentavos1, precoReal2, precoCentavos2, dataInicial1, dataInicial2, dataFinal1, dataFinal2])

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
          <span className='alerta'>PLACA DE CIMA:</span>
          <span className='info'>(Para as placas de Aproveite só é 
            obrigatório colocar Título, Preço Promocional e Tipo.Para as placas de Oferta 
            apenas o campo Preço Inicial é optativo.)</span>
          <label>
            <span>Título: </span>
            <input
              type="text"
              name="titulo1"
              value={titulo1}
              onChange={(event) => setTitulo1(event.target.value)}
              required
            />
          </label>
           <label>
            <span>Preço Inicial: </span>
            <input
              type="text"
              name="precoInicial1"
              value={precoInicial1}
              onChange={(event) => setPrecoInicial1(event.target.value)}
              pattern="^\d+,\d{2}$"
              title="Use o formato com vírgula e dois dígitos após ela. Ex: 12,34"
            />
            </label>
          <label>
            <span>Preço Promocional: </span>
            <input
              type="text"
              name="precoReal1"
              value={precoPromocional1}
              onChange={(event) => setPrecoPromocional1(event.target.value)}
              pattern="^\d+,\d{2}$"
              title="Use o formato com vírgula e dois dígitos após ela. Ex: 12,34"
              required
            />
            </label>
          <label>
            <span>Data Inicial: </span>
            <input
              type="date"
              name="dataInicial1"
              value={dataInicial1}
              onChange={(event) => setDataInicial1(event.target.value)}
              pattern="^\d{2}/\d{2}$"
              title="A data deve estar no formato DD/MM"
            />
          </label>
          <label>
            <span>Data Final: </span>
            <input
              type="date"
              name="dataFinal1"
              value={dataFinal1}
              onChange={(event) => setDataFinal1(event.target.value)}
              pattern="^\d{2}/\d{2}$"
              title="A data deve estar no formato DD/MM"
            />
          </label>
          <span className='alerta'>PLACA DE BAIXO:</span>
            <label>
            <span>Título: </span>
            <input
              type="text"
              name="titulo2"
              value={titulo2}
              onChange={(event) => setTitulo2(event.target.value)}
            />
          </label>
           <label>
            <span>Preço Inicial: </span>
            <input
              type="text"
              name="precoInicial2"
              value={precoInicial2}
              onChange={(event) => setPrecoInicial2(event.target.value)}
              pattern="^\d+,\d{2}$"
              title="Use o formato com vírgula e dois dígitos após ela. Ex: 12,34"
            />
            </label>
          <label>
            <span>Preço Promocional: </span>
            <input
              type="text"
              name="precoReal2"
              value={precoPromocional2}
              onChange={(event) => setPrecoPromocional2(event.target.value)}
              pattern="^\d+,\d{2}$"
              title="Use o formato com vírgula e dois dígitos após ela. Ex: 12,34"
            />
            </label>
          <label>
            <span>Data Inicial: </span>
            <input
              type="date"
              name="dataInicial2"
              value={dataInicial2}
              onChange={(event) => setDataInicial2(event.target.value)}
              pattern="^\d{2}/\d{2}$"
              title="A data deve estar no formato DD/MM"
            />
          </label>
          <label>
            <span>Data Final: </span>
            <input
              type="date"
              name="dataFinal2"
              value={dataFinal2}
              onChange={(event) => setDataFinal2(event.target.value)}
              pattern="^\d{2}/\d{2}$"
              title="A data deve estar no formato DD/MM"
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
          <button type="submit" className='btnchecked'>Adicionar</button>
        </form>
        <div id="buttons">
          <button className='btnchecked' onClick={() => handlePrint()}>Gerar PDF</button>
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