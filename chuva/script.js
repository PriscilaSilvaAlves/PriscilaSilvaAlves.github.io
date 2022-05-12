function ampliar(){
    var orientation = (screen.orientation || {}).type || screen.mozOrientation || screen.msOrientation;
    document.getElementById("bt-resume").style.color="white";
    document.getElementById("bt-resume").style.BackgroundColor="translate";
    if(orientation=="portrait-primary"){
        document.getElementById("right-resume-text").style.height="2160px";
        document.getElementById("right-resume").style.gridTemplateRows="100px 2200px";
    }else{
        document.getElementById("right-resume-text").style.height="455px";
        document.getElementById("right-resume").style.gridTemplateRows="50px 495px";
    }
    
}
function createPost(){
    //Clean #create-post element:
    var node = document.getElementById("create-post");
    var filho1 = document.getElementById("create-post-title");
    var filho2 = document.getElementById("create-post-icons");
    var filho3 = document.getElementById("create-post-text");
    var filho4 = document.getElementById("create-post-function");
    node.removeChild(filho1);
    node.removeChild(filho2);
    node.removeChild(filho3);
    node.removeChild(filho4);
    //Create Elements:
    //div child 1:
    var divtitle = document.createElement("div");
    divtitle.setAttribute("id","create-post-comment");
    divtitle.innerHTML="Tem uma dúvida ou sugestão? Compartilhe seu feedback com os autores!";
    document.getElementById("create-post").appendChild(divtitle);
    //div child2:
    var divsubject = document.createElement("div");
    divsubject.setAttribute("id","create-post-subject");
    document.getElementById("create-post").appendChild(divsubject);
    //div child2 child1:
    var divsubjecttitle = document.createElement("div");
    divsubjecttitle.setAttribute("id","create-post-subject-text");
    divsubjecttitle.innerHTML="Assunto";
    document.getElementById("create-post-subject").appendChild(divsubjecttitle);
    //div child2 child2:
    var divsubjectimput = document.createElement("input");
    divsubjectimput.setAttribute("id","create-post-subject-imput");
    divsubjectimput.setAttribute("value","Defina um tópico sucinto para notificar os autores...");
    document.getElementById("create-post-subject").appendChild(divsubjectimput);
    // div child3:
    var divcontent = document.createElement("div");
    divcontent.setAttribute("id","create-post-content");
    document.getElementById("create-post").appendChild(divcontent);
    //div child3 child1:
    var divcontenttitle = document.createElement("div");
    divcontenttitle.setAttribute("id","create-post-content-text");
    divcontenttitle.innerHTML="Conteúdo";
    document.getElementById("create-post-content").appendChild(divcontenttitle);
    //div child3 child2:
    var divcontenteditor = document.createElement("div");
    divcontenteditor.setAttribute("id","create-post-content-editor");
    document.getElementById("create-post-content").appendChild(divcontenteditor);
    //div child3 child2 child1:
    var divcontentarea = document.createElement("textarea");
    divcontentarea.setAttribute("id","create-post-content-area");
    document.getElementById("create-post-content-editor").appendChild(divcontentarea);
    //div child3 child2 child2:
    var divcontentsend = document.createElement("div");
    divcontentsend.setAttribute("id","create-post-content-send");
    document.getElementById("create-post-content-editor").appendChild(divcontentsend);
    //div send img:
    var divsendicons = document.createElement("div");
    divsendicons.setAttribute("id","div-send-icons");
    document.getElementById("create-post-content-send").appendChild(divsendicons);
    var divsendimg1 = document.createElement("img");
    divsendimg1.setAttribute("src","bolder.png");
    document.getElementById("div-send-icons").appendChild(divsendimg1);
    var divsendimg2 = document.createElement("img");
    divsendimg2.setAttribute("src","italic.jpg");
    document.getElementById("div-send-icons").appendChild(divsendimg2);
    //div send button:
    var divsendbutton = document.createElement("button");
    divsendbutton.setAttribute("id","div-send-button");
    divsendbutton.innerHTML="Enviar";
    divsendbutton.setAttribute("onclick","enviar()");
    document.getElementById("create-post-content-send").appendChild(divsendbutton);
    //div separator:
    var divseparator = document.createElement("div");
    divseparator.setAttribute("id","separator");
    document.getElementById("create-post").appendChild(divseparator);  
}
function enviar(){
    //Clean #create-post element:
    var node = document.getElementById("create-post");
    var filho1 = document.getElementById("create-post-comment");
    var filho2 = document.getElementById("create-post-subject");
    var filho3 = document.getElementById("create-post-content");
    var filho4 = document.getElementById("separator");
    node.removeChild(filho1);
    node.removeChild(filho2);
    node.removeChild(filho3);
    node.removeChild(filho4);
    var div1 = document.createElement("div");
    div1.setAttribute("id","create-post-r1");
    div1.innerHTML="Seu tópico foi enviado com sucesso! :D";
    document.getElementById("create-post").appendChild(div1);
    var div2 = document.createElement("div");
    div2.setAttribute("id","create-post-r2");
    div2.innerHTML="Agradecemos por sua contribuição, uma notificação será enviada ao seu e-mail assim que o seu tópico for respondido!";
    document.getElementById("create-post").appendChild(div2);
    var div3 = document.createElement("div");
    div3.setAttribute("id","create-post-r3");
    div3.innerHTML="Descubra outros trabalhos!";
    document.getElementById("create-post").appendChild(div3);
    var div4 = document.createElement("div");
    div4.setAttribute("id","create-post-border2");
    document.getElementById("create-post").appendChild(div4);
    var button = document.createElement("button");
    button.setAttribute("id","create-post-button2");
    button.setAttribute("onclick","createPost2()");
    button.innerHTML="criar novo tópico";
    document.getElementById("create-post").appendChild(button);
    var divpubli = document.createElement("img");
    divpubli.setAttribute("src","borrao.png");
    divpubli.setAttribute("id","borrao");
    document.getElementById("create-post").appendChild(divpubli);
}
function createPost2(){
    //Clean #create-post element:
    var node = document.getElementById("create-post");
    var filho1 = document.getElementById("create-post-r1");
    var filho2 = document.getElementById("create-post-r2");
    var filho3 = document.getElementById("create-post-r3");
    var filho4 = document.getElementById("create-post-border2");
    var filho5 = document.getElementById("create-post-button2");
    var filho6 = document.getElementById("borrao");
    node.removeChild(filho1);
    node.removeChild(filho2);
    node.removeChild(filho3);
    node.removeChild(filho4);
    node.removeChild(filho5);
    node.removeChild(filho6);
    //Create Elements:
    //div child 1:
    var divtitle = document.createElement("div");
    divtitle.setAttribute("id","create-post-comment");
    divtitle.innerHTML="Tem uma dúvida ou sugestão? Compartilhe seu feedback com os autores!";
    document.getElementById("create-post").appendChild(divtitle);
    //div child2:
    var divsubject = document.createElement("div");
    divsubject.setAttribute("id","create-post-subject");
    document.getElementById("create-post").appendChild(divsubject);
    //div child2 child1:
    var divsubjecttitle = document.createElement("div");
    divsubjecttitle.setAttribute("id","create-post-subject-text");
    divsubjecttitle.innerHTML="Assunto";
    document.getElementById("create-post-subject").appendChild(divsubjecttitle);
    //div child2 child2:
    var divsubjectimput = document.createElement("input");
    divsubjectimput.setAttribute("id","create-post-subject-imput");
    divsubjectimput.setAttribute("value","Defina um tópico sucinto para notificar os autores...");
    document.getElementById("create-post-subject").appendChild(divsubjectimput);
    // div child3:
    var divcontent = document.createElement("div");
    divcontent.setAttribute("id","create-post-content");
    document.getElementById("create-post").appendChild(divcontent);
    //div child3 child1:
    var divcontenttitle = document.createElement("div");
    divcontenttitle.setAttribute("id","create-post-content-text");
    divcontenttitle.innerHTML="Conteúdo";
    document.getElementById("create-post-content").appendChild(divcontenttitle);
    //div child3 child2:
    var divcontenteditor = document.createElement("div");
    divcontenteditor.setAttribute("id","create-post-content-editor");
    document.getElementById("create-post-content").appendChild(divcontenteditor);
    //div child3 child2 child1:
    var divcontentarea = document.createElement("textarea");
    divcontentarea.setAttribute("id","create-post-content-area");
    document.getElementById("create-post-content-editor").appendChild(divcontentarea);
    //div child3 child2 child2:
    var divcontentsend = document.createElement("div");
    divcontentsend.setAttribute("id","create-post-content-send");
    document.getElementById("create-post-content-editor").appendChild(divcontentsend);
    //div send img:
    var divsendicons = document.createElement("div");
    divsendicons.setAttribute("id","div-send-icons");
    document.getElementById("create-post-content-send").appendChild(divsendicons);
    var divsendimg1 = document.createElement("img");
    divsendimg1.setAttribute("src","bolder.png");
    document.getElementById("div-send-icons").appendChild(divsendimg1);
    var divsendimg2 = document.createElement("img");
    divsendimg2.setAttribute("src","italic.jpg");
    document.getElementById("div-send-icons").appendChild(divsendimg2);
    //div send button:
    var divsendbutton = document.createElement("button");
    divsendbutton.setAttribute("id","div-send-button");
    divsendbutton.innerHTML="Enviar";
    divsendbutton.setAttribute("onclick","enviar()");
    document.getElementById("create-post-content-send").appendChild(divsendbutton);
    //div separator:
    var divseparator = document.createElement("div");
    divseparator.setAttribute("id","separator");
    document.getElementById("create-post").appendChild(divseparator);
}
