async function search(){
    const temp = document.getElementById('temperatura');
    const tempMin = document.getElementById('temp-min');
    const tempMax = document.getElementById('temp-max');
    const umidade = document.getElementById('umidade');
    const search = document.getElementById('text').value;
    let url = "https://api.openweathermap.org/data/2.5/weather?q=" + search + "&APPID=caff5e02c8a8dc980d53e30bccd8841d";
    try{
        const response = await fetch(url, {mode: 'cors'});
        const getData = await response.json();
        console.log(getData);
        //Temperatura
        const tempKelvin = getData.main.temp;
        const tempCeusius = changeToCel("K", tempKelvin);
        temp.innerHTML =tempCeusius + "°C";
        //Temperatura Mínima:
        const tempMinKelvin = getData.main.temp_min;
        const tempMinCeusius = changeToCel("K", tempMinKelvin);
        tempMin.innerHTML = tempMinCeusius + "°C";
        //Temperatura Máxima:
        const tempMaxKelvin = getData.main.temp_max;
        const tempMaxCeusius = changeToCel("K", tempMaxKelvin);
        tempMax.innerHTML =tempMaxCeusius + "°C";
        //Umidade:
        const umid = getData.main.humidity;
        umidade.innerHTML =umid + "%";
        //Clima
        const clima = getData.weather[0].main;
        document.getElementById("clima").innerHTML=clima;
        //Cidade
        const city = getData.name;
        const country = getData.sys.country;
        document.getElementById("city").innerHTML=city+", "+country;
        //Outas configurações
        document.getElementById("btn").innerHTML="Change to Fahrenheit";
        document.getElementById("details").style.color="black";
        changebg(clima);
    }catch (error){
        console.log("Error: " + error);
    }
}
function changeUnity(){
    const btn = document.getElementById("btn");
    const t = document.getElementById("temperatura");
    const tmin = document.getElementById("temp-min");
    const tmax = document.getElementById("temp-max");
    if(btn.innerHTML=="Change to Fahrenheit"){
        btn.innerHTML="Change to Celsius";
        const tl=t.innerHTML.replace("°C","");
        const tminl = tmin.innerHTML.replace("°C","");
        const tmaxl = tmax.innerHTML.replace("°C","");
        const temp = changeToFah("C",tl);
        const temp_min = changeToFah("C", tminl);
        const temp_max = changeToFah("C", tmaxl);
        t.innerHTML=temp+"F";
        tmin.innerHTML=temp_min+"F";
        tmax.innerHTML=temp_max+"F";
    }else if(btn.innerHTML=="Change to Celsius"){
        btn.innerHTML="Change to Fahrenheit";
        const tl=t.innerHTML.replace("F","");
        const tminl = tmin.innerHTML.replace("F","");
        const tmaxl = tmax.innerHTML.replace("F","");
        const temp = changeToCel("F",tl);
        const temp_min = changeToCel("F",tminl);
        const temp_max = changeToCel("F",tmaxl);
        t.innerHTML=temp+"°C";
        tmin.innerHTML=temp_min+"°C";
        tmax.innerHTML=temp_max+"°C";
    }
}
function changeToFah(unidade, entrada){
    if(unidade == "C"){
        const saida = (((entrada*180)/100)+32).toFixed(1);   
        return saida;
    }else if(unidade == "K"){
        const saida = ((((entrada-273.85)*180)/100)+32).toFixed(1);
        return saida;
    }
}
function changeToCel(unidade, entrada){
    if(unidade == "F"){
        const saida = (((entrada-32)/180)*100).toFixed(1);
        return saida;
    }else if(unidade == "K"){
        const saida = (entrada-273.85).toFixed(1);
        return saida;
    }
}
function changebg(clima){
    if(clima=="Clouds" || clima=="Clear"){
        document.body.style.backgroundImage='url("nuvens.webp")';
    }else if(clima=="Rain"){
        document.body.style.backgroundImage='url("rain.webp")';
    }else if(clima=="Haze"){
        document.body.style.backgroundImage='url("haze.jpg")';
    }else if(clima=="Snow"){
        document.body.style.backgroundImage='url("snow.jpg")';
    }else{
        document.body.style.backgroundImage='url("nuvens.webp")';
    }
}