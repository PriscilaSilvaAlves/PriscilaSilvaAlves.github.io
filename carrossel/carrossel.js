function foto1(){
    document.styleSheets[0].cssRules[6].style.backgroundColor="#9ca3af";
    document.styleSheets[0].cssRules[7].style.backgroundColor="#d1d5db";
    document.styleSheets[0].cssRules[8].style.backgroundColor="#d1d5db";
    document.styleSheets[0].cssRules[3].style.transform="translate(100%,0%)";
}
function foto2(){
    document.styleSheets[0].cssRules[7].style.backgroundColor="#9ca3af";
    document.styleSheets[0].cssRules[6].style.backgroundColor="#d1d5db";
    document.styleSheets[0].cssRules[8].style.backgroundColor="#d1d5db";
    document.styleSheets[0].cssRules[3].style.transform="translate(0%,0%)";
}
function foto3(){
    document.styleSheets[0].cssRules[8].style.backgroundColor="#9ca3af";
    document.styleSheets[0].cssRules[7].style.backgroundColor="#d1d5db";
    document.styleSheets[0].cssRules[6].style.backgroundColor="#d1d5db";
    document.styleSheets[0].cssRules[3].style.transform="translate(-100%,0%)";
}
function proximo(){
    if(document.styleSheets[0].cssRules[6].style.backgroundColor=="rgb(156, 163, 175)"){
        foto2();
    }else if(document.styleSheets[0].cssRules[7].style.backgroundColor =="rgb(156, 163, 175)"){
        foto3();
    }else if(document.styleSheets[0].cssRules[8].style.backgroundColor =="rgb(156, 163, 175)"){
        foto1();
    }
}
function anterior(){
    if(document.styleSheets[0].cssRules[6].style.backgroundColor=="rgb(156, 163, 175)"){
        foto3();
    }else if(document.styleSheets[0].cssRules[7].style.backgroundColor =="rgb(156, 163, 175)"){
        foto1();
    }else if(document.styleSheets[0].cssRules[8].style.backgroundColor =="rgb(156, 163, 175)"){
        foto2();
    }
}
async function autorun(){
    const sleep = ms => new Promise(res => setTimeout(res, ms));
    while(1<2){
        await sleep(5000);
        proximo();
    }
}
autorun();