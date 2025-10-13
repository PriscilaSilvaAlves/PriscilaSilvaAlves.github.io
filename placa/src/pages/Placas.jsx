import { useState, useRef, useEffect } from 'react';
import PlacaOferta from '../components/PlacaOferta';
import PlacaAproveite from '../components/PlacaAproveite';
import { useReactToPrint } from 'react-to-print';
import PlacaOfertaDupla from '../components/PlacaOfertaDupla';
import PlacaMaisChurrasco from '../components/PlacaMaisChurrasco';
import PlacaAproveiteDupla from '../components/PlacaAproveiteDupla';
import PlacaFardo from '../components/PlacaFardo';
import './Placas.css';
import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist/legacy/build/pdf';

// ⚠️ Caminho relativo à pasta "public":
GlobalWorkerOptions.workerSrc = `${process.env.PUBLIC_URL}/pdf.worker.min.mjs`;
//GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';

const Placas = () => {
  const componentRef = useRef(); // Ref para o contêiner principal das placas
  const [placas, setPlacas] = useState([]);
  const [titulo, setTitulo] = useState('');
  const [precoInicial, setPrecoInicial] = useState('');
  const [precoReal, setPrecoReal] = useState('');
  const [precoCentavos, setPrecoCentavos] = useState('');
  const [precoPromocional, setPrecoPromocional] = useState('');
  const [dataInicial, setDataInicial] = useState('');
  const [dataFinal, setDataFinal] = useState('');
  const [titulo2, setTitulo2] = useState('');
  const [precoInicial2, setPrecoInicial2] = useState('');
  const [precoReal2, setPrecoReal2] = useState('');
  const [precoCentavos2, setPrecoCentavos2] = useState('');
  const [precoPromocional2, setPrecoPromocional2] = useState('');
  const [dataInicial2, setDataInicial2] = useState('');
  const [dataFinal2, setDataFinal2] = useState('');
  const [tipo, setTipo] = useState('');
  const [submeteu, setSubmeteu] = useState(false); 
  const [segundaPlaca, setSegundaPlaca] = useState(false);
  const [fardo, setFardo] = useState('');

function limpar (){
  setPlacas([]);
  setSegundaPlaca(false);
}

const handleFileChange = async (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();

  reader.onload = async (event) => {
    const typedarray = new Uint8Array(event.target.result);
    const pdf = await getDocument({ data: typedarray }).promise;

    let fullText = '';

    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const content = await page.getTextContent();
      const strings = content.items.map(item => item.str);
      fullText += strings.join(' ') + '\n';
    }

      const linhas = fullText
      // normaliza acentos e espaços antes
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") // remove acentos
      .replace(/\s+/g, " ") // normaliza espaços
      // divide de forma case-insensitive e mais flexível
      .split(/(?=(oferta ?dupla|fardo|aproveite ?dupla|mais ?churrasco|maischurrasco|oferta|aproveite))/gi)
      .map(l => l.trim())
      .filter(Boolean);

      console.log('Linhas extraídas do PDF:', linhas)
      // ✅ Filtra apenas linhas de dados válidas
      const tiposValidos = [
        "oferta",
        "oferta dupla",
        "ofertadupla",
        "aproveite",
        "aproveite dupla",
        "aproveitedupla",
        "mais churrasco",
        "maischurrasco",
        "fardo",
      ];

      const linhasValidas = linhas.filter((linha) =>
        tiposValidos.some((tipo) =>
          linha.toLowerCase().startsWith(tipo.toLowerCase())
        )
      );
                // remove espaços no início/fim
    var matrizValida = [];
    console.log('Linhas válidas extraídas do PDF:', linhasValidas);
    for (let i=0; i<linhasValidas.length; i++){
        var linha = linhasValidas[i];
        linha = linha.replace(/\u00A0/g, ' ').replace(/\s+/g, ' ').trim();
        const regex = /^(mais\s*churrasco|maischurrasco|fardo|oferta\s*dupla|ofertadupla|aproveite\s*dupla|aproveitedupla|oferta|aproveite)\s+(.+?)\s+(-|\d+(?:[.,]\d{2})?)\s+(-|\d+(?:[.,]\d{2})?)\s+(-|\d+|[-])\s+(-|\d{4}-\d{2}-\d{2})\s+(-|\d{4}-\d{2}-\d{2})$/i;
        const match = linha.match(regex);
        if (!match) {
          contador++;
          console.warn(`Linha ignorada por não casar com regex: ${linha}`);
          continue;
        }
        let [_, tipo, rawTitulo, precoInicial, precoPromocional, fardo, dataInicial, dataFinal] = match;
        if (!tipo || !rawTitulo || !precoPromocional) {
          console.warn(`Linha com dados obrigatórios faltando: ${linha}`);
          continue;
        } 
        matrizValida.push(linha);  
    }
    console.log("########## MATRIZ COM DADOS FILTRADOS ########## "+matrizValida);
    const placasFinal = [];
    var contador = 0;
    for (let i = 0; i < matrizValida.length; i++) {
      const linha = matrizValida[i];
      
      //const regex = /^(OfertaDupla|AproveiteDupla|Oferta|Aproveite)\s+(.+?)\s+(-|\d{1,3},\d{2})\s+(\d{1,3},\d{2})\s+(-|\d{4}-\d{2}-\d{2})\s+(-|\d{4}-\d{2}-\d{2})$/;
      //const regex = /^(Mais ?Churrasco|Fardo|MaisChurrasco|Oferta ?Dupla|Aproveite ?Dupla|Oferta|Aproveite)\s+(.+?)\s+(-|\d{1,3},\d{2})\s+(\d{1,3},\d{2})\s+(-|\d{4}-\d{2}-\d{2})\s+(-|\d{4}-\d{2}-\d{2})$/i;
      //const regex = /^(mais ?churrasco|maischurrasco|fardo|oferta ?dupla|ofertadupla|aproveite ?dupla|aproveitedupla|oferta|aproveite)\s+(.+?)\s+(-|\d{1,3},\d{2})\s+(-|\d{1,3},\d{2})\s+(-|\d+)\s+(-|\d{4}-\d{2}-\d{2})\s+(-|\d{4}-\d{2}-\d{2})$/i;
      const regex = /^(mais ?churrasco|maischurrasco|fardo|oferta ?dupla|ofertadupla|aproveite ?dupla|aproveitedupla|oferta|aproveite)\s+(.+?)\s+(-|\d{1,3}(?:[.,]\d{2})?)\s+(-|\d{1,3}(?:[.,]\d{2})?)\s+(-|\d+)\s+(-|\d{4}-\d{2}-\d{2})\s+(-|\d{4}-\d{2}-\d{2})$/i;

      const match = linha.match(regex);
      console.log(match);
      if (!match) {
        contador++;
        console.warn(`Linha ignorada por não casar com regex: ${linha}`);
        continue;
      }
      //const [_, tipo, rawTitulo, precoInicial, precoPromocional, dataInicial, dataFinal] = match;
      let [_, tipo, rawTitulo, precoInicial, precoPromocional, fardo, dataInicial, dataFinal] = match;
      if (!tipo || !rawTitulo || !precoPromocional) {
        console.warn(`Linha com dados obrigatórios faltando: ${linha}`);
        continue;
      }
      let precoRealInicial = parseInt(precoInicial.split(/[.,]/)[0], 10) || 0;
      let precoCentavosInicial = parseInt(precoInicial.split(/[.,]/)[1], 10) || 0;
      if(precoCentavosInicial == 0 || precoCentavosInicial == "0"){
        precoCentavosInicial="00";
      }
      precoInicial=precoRealInicial+","+precoCentavosInicial;
      console.log("### preco inicial novo ### "+precoInicial);
      const precoReal = parseInt(precoPromocional.split(/[.,]/)[0], 10) || 0;
      const precoCentavos = parseInt(precoPromocional.split(/[.,]/)[1], 10) || 0;
      const titulo = rawTitulo.toUpperCase();
      tipo = tipo.toLowerCase();
      if (tipo === 'oferta dupla' || tipo === 'ofertadupla'){
        tipo = 'OfertaDupla';
      }
      if (tipo === 'aproveite dupla' || tipo === 'aproveitedupla'){
        tipo = 'AproveiteDupla';
      }
      if (tipo === 'oferta'){
        tipo = "Oferta";
      }
      if (tipo === 'aproveite'){
        tipo = "Aproveite";
      }  
      if(tipo === 'fardo'){
        tipo = "Fardo";
      }
      if(tipo === "mais churrasco" || tipo === "maischurrasco"){
        tipo = "MaisChurrasco";
      }
      
      // Se for uma placa dupla, pega a próxima linha também
      if (tipo === 'OfertaDupla' || tipo === 'AproveiteDupla') {
            let titulo2 = '';
            let precoInicial2 = '';
            let precoPromocional2 = '';
            let precoReal2 = 0;
            let precoCentavos2 = 0;
            let dataInicial2 = '';
            let dataFinal2 = '';
            let fardo2 = '';
            console.log("############# ENTROU NA VALIDAÇÃO DE OFERTA DUPLA OU APROVEITE DUPLA #####################");
            // Tenta pegar a próxima linha, se existir
            const proximaLinha = matrizValida[i + 1];
            console.log("############# LINHA ATUAL ######### "+matrizValida);
            console.log("############# PROXIMA LINHA ######### "+proximaLinha);
            const match2 = proximaLinha ? proximaLinha.match(regex) : null;
            console.log("####### match 2 ########: "+match2);
            const tipo2 = proximaLinha ? proximaLinha.toLowerCase().replace(/\s+/g, '') : '';
            console.log("##### TIPO 2 ######"+tipo2);
              if ((tipo === 'OfertaDupla' && tipo2.startsWith('ofertadupla')) || 
                  (tipo === 'AproveiteDupla' && tipo2.startsWith('aproveitedupla'))) {
                // só então tenta casar com o regex completo
                console.log("### ENTROU NO IF DE COMPARAÇÃO DE TIPO #####");
                const match2 = proximaLinha.match(regex);
                if (match2) {
                  // processa a segunda placa
                  [, , titulo2, precoInicial2, precoPromocional2, fardo2, dataInicial2, dataFinal2] = match2;
                  let precoRealInicial2 = parseInt(precoInicial2.split(/[.,]/)[0], 10) || 0;
                  let precoCentavosInicial2 = parseInt(precoInicial2.split(/[.,]/)[1], 10) || 0;
                  if(precoCentavosInicial2 == 0 || precoCentavosInicial2 == "0"){
                    precoCentavosInicial2="00";
                  }
                  precoInicial2=precoRealInicial2+","+precoCentavosInicial2;
                  precoReal2 = parseInt(precoPromocional2.split(',')[0], 10) || 0;
                  precoCentavos2 = parseInt(precoPromocional2.split(',')[1], 10) || 0;
                  titulo2 = titulo2.toUpperCase();
                  i++; // Pula a próxima linha pois já foi usada
                  }
                }
            
            let testeReal = validarNumero(precoReal, "real");
            let testeCentavos = validarNumero(precoCentavos, "centavos");
            let testeReal2 = validarNumero(precoReal2, "real");
            let testeCentavos2 = validarNumero(precoCentavos2, "centavos");
            // Cria a placa (com ou sem segunda parte preenchida)
            placasFinal.push({
              tipo,
              titulo,
              precoInicial,
              precoPromocional,
              testeReal,
              testeCentavos,
              dataInicial: formatarData(dataInicial),
              dataFinal: formatarData(dataFinal),
              titulo2,
              precoInicial2,
              precoPromocional2,
              testeReal2,
              testeCentavos2,
              dataInicial2: formatarData(dataInicial2),
              dataFinal2: formatarData(dataFinal2),
            });
          }else {
            let testeReal = validarNumero(precoReal, "real");
            let testeCentavos = validarNumero(precoCentavos, "centavos");
            // Placa simples
            placasFinal.push({
              tipo,
              titulo,
              precoInicial,
              precoPromocional,
              fardo,
              testeReal,
              testeCentavos,
              dataInicial: formatarData(dataInicial),
              dataFinal: formatarData(dataFinal),
            });
          }
    }
    if (contador>1){
        alert("Algumas linhas foram ignoradas por não casar com o padrão definido no sistema. Para placas de Oferta, apenas Preço Inicial é optativo. Para placas de Aproveite, só é obrigatório colocar Tipo, Título e Preço Promocional. Campos optativos podem ser preenchidos com um traço.");
      }
    console.log('Placas processadas:', placasFinal);
    setPlacas(placasFinal);
  };

  reader.readAsArrayBuffer(file);
};


  
  const formatarData = (data) => {
    if (!data) return '';
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
    if (precoPromocional2 != ''){
      let partes2 = precoPromocional2.split(",");
      console.log(partes2);
      let inteiro2 = parseInt(partes2[0]);
      setPrecoReal2(inteiro2);
      let centavos2 = parseInt(partes2[1]);
      setPrecoCentavos2(centavos2);
    }
    console.log(precoReal);
    console.log(precoCentavos);
  }
  function validarNumero(num, tipo){
    console.log("Entrada da validação: "+num);
    if(num){
      console.log("saída da validação no primeiro if: "+num);
      return num;
    }else if(num == 0 || num === "00"){
      if(tipo==="real"){
          console.log("saída da validação no segundo if: "+"0");
          return "0";
      }else if(tipo==="centavos"){
        console.log("saída da validação no segundo if: "+"00");
        return "00";
      }
    }else{
      console.log("saída da validação no terceiro if: "+ false);
      return false;
    }
  }
  const handleSubmit = (event) => {
    console.log("Entrou no handlesubmit")
    event.preventDefault();
    console.log("submit");
    separarPreco();
    setSubmeteu(true);
  }

      useEffect(()=>{
        if (!submeteu) return;
        if(tipo === "Oferta"){
          let testeCentavos = validarNumero(precoCentavos, "centavos");
          let testeReal = validarNumero(precoReal, "real");
          if (titulo && testeReal && testeCentavos && dataInicial && dataFinal && tipo) {
            // Atualizando o estado com a nova placa
            const placa = {
              titulo,
              precoInicial,
              testeReal,
              testeCentavos,
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
        if(tipo === "MaisChurrasco"){
          let testeCentavos = validarNumero(precoCentavos, "centavos");
          let testeReal = validarNumero(precoReal, "real");
          if (titulo && testeReal && testeCentavos && dataInicial && dataFinal && tipo) {
            // Atualizando o estado com a nova placa
            const placa = {
              titulo,
              precoInicial,
              testeReal,
              testeCentavos,
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
        if(tipo === "Fardo"){
          let testeCentavos = validarNumero(precoCentavos, "centavos");
          console.log("teste centavos: "+testeCentavos);
          let testeReal = validarNumero(precoReal, "real");
          console.log("teste real: "+testeReal);
          if (titulo && fardo && testeReal && testeCentavos && dataInicial && dataFinal && tipo) {
            // Atualizando o estado com a nova placa
            const placa = {
              titulo,
              fardo,
              testeReal,
              testeCentavos,
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
          let testeCentavos = validarNumero(precoCentavos, "centavos");
          let testeReal = validarNumero(precoReal, "real");
            if (titulo && testeReal && testeCentavos && tipo) {
              const placa = {
               titulo, testeReal, testeCentavos, tipo
              }
              // Atualizando o estado com a nova placa
              setPlacas(prevPlacas => [
                ...prevPlacas,
                placa
              ]);
            } else {
              alert("Todos os campos precisam ser preenchidos.");
            }
        }
        if(tipo === "AproveiteDupla"){
          let testeCentavos = validarNumero(precoCentavos, "centavos");
          let testeReal = validarNumero(precoReal, "real");
          let testeCentavos2 = validarNumero(precoCentavos2, "centavos");
          let testeReal2 = validarNumero(precoReal2, "real");
          if (titulo && testeReal && testeCentavos && tipo){
            console.log("Imprimindo precoReal");
            console.log(precoReal);
            const placa = {
              titulo, testeReal, testeCentavos, titulo2, testeReal2, testeCentavos2, tipo
            }
            setPlacas(prevPlacas => [
              ...prevPlacas,
              placa
            ]);
          } else {
            alert("Todos os campos precisam ser preenchidos.");
          }
        }
        if(tipo === "OfertaDupla"){
          let testeCentavos = validarNumero(precoCentavos, "centavos");
          let testeReal = validarNumero(precoReal, "real");
          let testeCentavos2 = validarNumero(precoCentavos2, "centavos");
          let testeReal2 = validarNumero(precoReal2, "real");
          if (titulo && testeReal && testeCentavos && dataInicial && dataFinal && tipo){
            const placa = {
              titulo,
              precoInicial,
              testeReal,
              testeCentavos,
              dataInicial: formatarData(dataInicial),
              dataFinal: formatarData(dataFinal),
              titulo2, 
              precoInicial2, 
              testeReal2, 
              testeCentavos2, 
              dataInicial2: formatarData(dataInicial2), 
              dataFinal2: formatarData(dataFinal2),
              tipo
            };
            setPlacas(prevPlacas => [
              ...prevPlacas, placa
            ]);
          } else{
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
          setTitulo2('');
          setPrecoInicial2('');
          setPrecoReal2('');
          setPrecoCentavos2('');
          setPrecoPromocional2('');
          setDataInicial2('');
          setDataFinal2('');
          setTipo('');
          setFardo('');
          setSubmeteu(false);
     }, [precoReal, precoCentavos, dataFinal, dataInicial, submeteu, precoReal2, precoCentavos2, dataInicial2, dataFinal2]);

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
                  precoReal={placa.testeReal}
                  precoCentavos={placa.testeCentavos}
                  dataInicial={placa.dataInicial}
                  dataFinal={placa.dataFinal}
                />
              </div>
            );
          }
          if (placa.tipo === "Aproveite") {
            console.log("imprimindo variaveis de placa: "+placa.testeCentavos);
            return (
              <div className="background" key={index}>
                <PlacaAproveite
                  titulo={placa.titulo}
                  precoReal={placa.testeReal}
                  precoCentavos={placa.testeCentavos}
                />
              </div>
            );
          }
          if(placa.tipo === "MaisChurrasco"){
            return (
              <PlacaMaisChurrasco
                  titulo={placa.titulo}
                  precoInicial={placa.precoInicial}
                  precoReal={placa.testeReal}
                  precoCentavos={placa.testeCentavos}
                  dataInicial={placa.dataInicial}
                  dataFinal={placa.dataFinal}
                />
            );
          }
          if(placa.tipo === "Fardo"){
            return (
              <PlacaFardo
                  titulo={placa.titulo}
                  fardo={placa.fardo}
                  precoReal={placa.testeReal}
                  precoCentavos={placa.testeCentavos}
                  dataInicial={placa.dataInicial}
                  dataFinal={placa.dataFinal}
                />
            );
          }
          if (placa.tipo === "OfertaDupla" || placa.tipo === "Oferta Dupla") {
            return (
              <div className="background" key={index}>
                <PlacaOfertaDupla
                  titulo={placa.titulo}
                  precoInicial={placa.precoInicial}
                  precoReal={placa.testeReal}
                  precoCentavos={placa.testeCentavos}
                  dataInicial={placa.dataInicial}
                  dataFinal={placa.dataFinal}
                  titulo2={placa.titulo2}
                  precoInicial2={placa.precoInicial2}
                  precoReal2={placa.testeReal2}
                  precoCentavos2={placa.testeCentavos2}
                  dataInicial2={placa.dataInicial2}
                  dataFinal2={placa.dataFinal2}
                />
              </div>
            );
          }
          if (placa.tipo === "AproveiteDupla" || placa.tipo === "Aproveite Dupla") {
            return (
              <div className="background" key={index}>
                <PlacaAproveiteDupla
                  titulo={placa.titulo}
                  precoReal={placa.testeReal}
                  precoCentavos={placa.testeCentavos}
                  titulo2={placa.titulo2}
                  precoReal2={placa.testeReal2}
                  precoCentavos2={placa.testeCentavos2}
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
    function addPlaca(){
      setSegundaPlaca(true);
    }
    function delPlaca(){
      setSegundaPlaca(false);
    }
  return (
    <div>
      <header className="App-header">
        <h1>Crie a sua placa abaixo:</h1>
        <form onSubmit={handleSubmit}>
          {segundaPlaca && <span className='alerta'>PRIMEIRA PLACA:</span>}
          <span className='info'>(Para as placas de Aproveite só é 
            obrigatório colocar Título, Preço Promocional e Tipo. Para as placas de Oferta 
            apenas o campo Preço Inicial é optativo.)</span>
          <label>
            <span>Título: </span>
            <input
              type="text"
              name="titulo"
              value={titulo}
              onChange={(event) => setTitulo(event.target.value.toUpperCase())}
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
            <span>Quantidade de Produtos do Fardo:</span>
            <input
              type="number"
              name="fardo"
              value={fardo}
              onChange={(event) => setFardo(event.target.valueAsNumber || '')}
              min="2"
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
              <option value="Oferta">Oferta</option>
              <option value="Aproveite">Aproveite</option>
              <option value="OfertaDupla">Oferta Dupla</option>
              <option value="AproveiteDupla">Aproveite Dupla</option>
              <option value="MaisChurrasco">Mais Churrasco</option>
              <option value="Fardo">Fardo</option>
            </select>
          </label>
          <label>
            <span><span id="obs">Enviar Arquivo em .PDF (O PDF deve conter as colunas Tipo, Título, Preco Inicial (Ex. 12,99), Preco Promocional (Ex. 10,99), Quantidade do Fardo, Data Inicial (Ex. 2025-10-31) e Data Final (Ex. 2025-11-05).):</span></span>
            <input type="file" accept='.pdf' onChange={ handleFileChange } />
          </label>
          {segundaPlaca && (
            <>
            <span className='alerta'>SEGUNDA PLACA:</span>
            <label>
            <span>Título: </span>
            <input
              type="text"
              name="titulo"
              value={titulo2}
              onChange={(event) => setTitulo2(event.target.value.toUpperCase())}
            />
          </label>
           <label>
            <span>Preço Inicial: </span>
            <input
              type="text"
              name="precoInicial"
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
              name="precoReal"
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
              name="dataInicial"
              value={dataInicial2}
              onChange={(event) => setDataInicial2(event.target.value)}
            />
          </label>
          <label>
            <span>Data Final: </span>
            <input
              type="date"
              name="dataFinal"
              value={dataFinal2}
              onChange={(event) => setDataFinal2(event.target.value)}
            />
          </label>
          </>
          )}
          <a href="/exemplo.xlsx" download>
            Baixar planilha de exemplo
          </a>
          {!segundaPlaca && <button className='btnchecked' type="button" onClick={()=>addPlaca()}>Adicionar segunda placa horizontal</button>} 
          {segundaPlaca && <button className='btnchecked' type="button" onClick={()=>delPlaca()}>Remover segunda placa horizontal</button>}
        <button className='btnchecked' type="submit">Adicionar Placa</button>
        </form>
        <div id="buttons">
          <button className='btnchecked' id="btnprint" onClick={ () => handlePrint() }>Imprimir Placa</button>
          <button className='btnchecked' onClick={ () => limpar() }>Limpar</button>
        </div>
        <br></br><br></br>
        <Data />
        <br></br>
        <footer>
          <span>Priscila Alves - priscila.contato@live.com</span>
        </footer>
      </header>
    </div>
  );
}

export default Placas;