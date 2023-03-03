let myLibrary = [];
class Book{
    constructor(title, author, pages, lido){
        this.title="Title: "+title;
        this.author="Author: "+author;
        this.pages="Number of pages: "+pages;
        this.lido=lido;
    }
    static addBookToLibrary(newBook) {
        myLibrary.push(newBook);
    }
    static printBooks(){
        const comprimento=myLibrary.length;
        for(let i=0; i<comprimento; i++){
            if(document.getElementById('author'+i)){
                document.getElementById('author'+i).innerHTML=myLibrary[i]['author'];
                document.getElementById('title'+i).innerHTML=myLibrary[i]['title'];
                document.getElementById('pages'+i).innerHTML=myLibrary[i]['pages'];
                document.getElementById('lido'+i).innerHTML=myLibrary[i]['lido'];  
            }                      
        }
    }
    static newBook(){
        const comprimento=myLibrary.length;
        var id=comprimento;
        var divbook = document.createElement("div");
        divbook.setAttribute("class","book");
        divbook.setAttribute("id","book"+id);
        document.getElementById("container1").appendChild(divbook);
        var divtitle = document.createElement("div");
        divtitle.setAttribute("class","title");
        divtitle.setAttribute("id","title"+id);
        document.getElementById("book"+id).appendChild(divtitle);
        var divauthor = document.createElement("div");
        divauthor.setAttribute("class","author");
        divauthor.setAttribute("id","author"+id);
        document.getElementById("book"+id).appendChild(divauthor);
        var divpages = document.createElement("div");
        divpages.setAttribute("class","pages");
        divpages.setAttribute("id","pages"+id);
        document.getElementById("book"+id).appendChild(divpages);
        var divlido = document.createElement("div");
        divlido.setAttribute("class","lido");
        divlido.setAttribute("id","lido"+id);
        document.getElementById("book"+id).appendChild(divlido);
        var button = document.createElement("button");
        button.setAttribute("onclick","Book.delBook("+id+")");
        button.setAttribute("class","btnrmv");
        button.innerHTML="Remove Book";
        document.getElementById("book"+id).appendChild(button);
        var button2 = document.createElement("button");
        button2.setAttribute("onclick","Book.mudarstatus("+id+")");
        button2.setAttribute("class","btnmd");
        button2.innerHTML="Mark as read";
        document.getElementById("book"+id).appendChild(button2);
        var name=document.getElementById("texttitle").value;
        var author=document.getElementById("textauthor").value;
        var pages=document.getElementById("textpages").value;
        var read=document.getElementById("alreadyread").value;
        const book = new Book(name, author, pages, read);
        this.addBookToLibrary(book);
        this.printBooks();
    }
    static delBook(id){
        var node = document.getElementById("book"+id);
        if (node.parentNode) {
            node.parentNode.removeChild(node);
        } 
    }
    static mudarstatus(id){
        myLibrary[id]['lido']="Already read";
        this.printBooks();
    }
}
class Form{
    static openForm(){
        var form = document.createElement("form");
        form.setAttribute("id","form");
        document.getElementById("addbook").appendChild(form);

        var addcontent = document.createElement("div");
        addcontent.setAttribute("id","addcontent");
        document.getElementById("form").appendChild(addcontent);
    
        var addtitle = document.createElement("div");
        addtitle.setAttribute("id","addtitle");
        document.getElementById("addcontent").appendChild(addtitle);
        var addlabel1 = document.createElement("label");
        addlabel1.innerHTML="Title:";
        document.getElementById("addtitle").appendChild(addlabel1);
        var addinput1 = document.createElement("input");
        addinput1.setAttribute("type","text");
        addinput1.setAttribute("id","texttitle");
        addinput1.required=true;
        addinput1.setAttribute("name","title");
        addinput1.setAttribute("minlength","3");
        addinput1.setAttribute("maxlength","60");
        document.getElementById("addtitle").appendChild(addinput1);
    
        var addauthor = document.createElement("div");
        addauthor.setAttribute("id","addauthor");
        document.getElementById("addcontent").appendChild(addauthor);
        var addlabel2 = document.createElement("label");
        addlabel2.innerHTML="Author:";
        document.getElementById("addauthor").appendChild(addlabel2);
        var addinput2 = document.createElement("input");
        addinput2.setAttribute("type","text");
        addinput2.setAttribute("id","textauthor");
        addinput2.required=true;
        addinput2.setAttribute("name","author");
        addinput2.setAttribute("minlength","3");
        addinput2.setAttribute("maxlength","60");
        document.getElementById("addauthor").appendChild(addinput2);
    
        var addpages = document.createElement("div");
        addpages.setAttribute("id","addpages");
        document.getElementById("addcontent").appendChild(addpages);
        var addlabel3 = document.createElement("label");
        addlabel3.innerHTML="Number of Pages:";
        document.getElementById("addpages").appendChild(addlabel3);
        var addinput3 = document.createElement("input");
        addinput3.setAttribute("type","number");
        addinput3.setAttribute("id","textpages");
        addinput3.required=true;
        addinput3.setAttribute("min","1");
        addinput3.setAttribute("max","2000");
        addinput3.setAttribute("step","1");
        addinput3.setAttribute("name","numpages");
        document.getElementById("addpages").appendChild(addinput3);
    
        var addread = document.createElement("div");
        addread.setAttribute("id","addread");
        document.getElementById("addcontent").appendChild(addread);
        var addlabel4 = document.createElement("label");
        addlabel4.innerHTML="Already read?";
        document.getElementById("addread").appendChild(addlabel4);
        var addselect = document.createElement("select");
        addselect.setAttribute("name","alreadyread");
        addselect.setAttribute("id","alreadyread");
        document.getElementById("addread").appendChild(addselect);
        var option1 = document.createElement("option");
        option1.setAttribute("value","Already read");
        option1.innerHTML="Yes";
        document.getElementById("alreadyread").appendChild(option1);
        var option2 = document.createElement("option");
        option2.setAttribute("value","Did not Read");
        option2.innerHTML="Not";
        document.getElementById("alreadyread").appendChild(option2);
    
        var addbuttons = document.createElement("div");
        addbuttons.setAttribute("id","addbuttons");
        document.getElementById("form").appendChild(addbuttons);
        var button1 = document.createElement("button");
        button1.setAttribute("onclick","Book.newBook()");
        button1.innerHTML="Add a new book";
        document.getElementById("addbuttons").appendChild(button1);
        var button2 = document.createElement("button");
        button2.setAttribute("onclick","Form.fechar()");
        button2.innerHTML="Close";
        document.getElementById("addbuttons").appendChild(button2);
    
        document.getElementById("addbook").style.position="fixed";
        document.getElementById("addbook").style.width="400px";
        document.getElementById("addbook").style.height="220px";
        document.getElementById("addbook").style.backgroundColor="white";
        document.getElementById("addbook").style.padding="20px";
    }
    static fechar(){
        document.getElementById("addbook").removeAttribute("style");
        var node1 = document.getElementById("addcontent");
        var node2 = document.getElementById("addbuttons");
        if (node1.parentNode) {
            node1.parentNode.removeChild(node1);
            node2.parentNode.removeChild(node2);
        } 
    }
}
const form = new Form();
form.openForm();




