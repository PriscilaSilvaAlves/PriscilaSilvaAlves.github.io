class LinkedList{
    constructor(){
        //fulllist é um objeto com dois parâmetros:
        //value e nextNode
        //Em value fica o valor do objeto
        //Em nextNode fica o proximo objeto
        //Os objetos são armazenados um dentro do outro
        this.fulllist = null;
    }
    append(value){
        //adiciona um novo nó contendo "value" ao final da lista
        if(this.fulllist!=null){
            let temp=this.fulllist;
            while(temp.nextNode!=null){
                temp = temp.nextNode;
            }
            temp.nextNode=new Node(value,null);
        }else{
            this.fulllist=new Node(value, null);;
        }
    }
    prepend(value){
        //adiciona um novo nó contendo "value" ao início da lista
        if(this.fulllist==null){
            this.fulllist=new Node(value, null);
        }else{
            let temp = new Node(value, null);
            temp.nextNode=this.fulllist;
            this.fulllist=temp;
        }
    }
    size(){
        //retorna o número total de nós da lista
        let cont=1;
        let temp = this.fulllist;
        while(temp.nextNode!=null){
            cont++;
            temp = temp.nextNode;
        }
        return cont;
    }
    head(){
        //retorna o primeiro nó da lista
        return this.fulllist;
    }
    tail(){
        //retorna o último nó da lista
        let temp = this.fulllist;
        while(temp.nextNode != null){
            temp=temp.nextNode;
        }
        return temp;
    }
    at(index){
        //retorna o nó no dado index
        let temp = this.fulllist;
        let i=0;
        while(i<=index){
            if(i==index){
                return temp;
            }
            temp = temp.nextNode;
            i++;
        }
    }
    pop(){
        //remove o último elemento da lista
        let temp = this.fulllist;
        let lista = new Node(null, null);
        while(temp.nextNode != null){
            lista=temp;
            temp=temp.nextNode;
        }
        lista.nextNode=null;
    }
    contains(value){
        //retorna true se o value estiver na lista a false caso contrário
        let temp = this.fulllist;
        while(temp.nextNode != null){
            if(temp.value == value) return true;
            temp = temp.nextNode;
        }
        if(temp.value == value) return true;
        else return false;
    }
    find(value){
        //retorna o índice do nó que contém o valor ou null se não for encontrado.
        let cont=0;
        let temp = this.fulllist;
        while(temp.nextNode!=null){
            if(temp.value == value) return cont;
            cont++;
            temp = temp.nextNode;
        }
        if(temp.value == value) return cont;
        else return false;
    }
    toString(){
        //representa os objetos LinkedList como strings,
        //para que possa imprimí-los e visualiza-los no console.
        //O formato deve ser: 
        //(value) -> (value) -> (value) -> null
       // this.string = this.string.replace("null",""); 
        //this.string = this.string + " -> ("+value+")";
        let temp = this.fulllist;
        let string = '';
        while(temp.nextNode != null){
            string = string + "("+temp.value+") -> ";
            temp=temp.nextNode;
        }
        string = string + "("+temp.value+") -> null";
        return string;
    }
}
class Node{
    constructor(value, nextNode){
        this.value=value||null;
        this.nextNode=nextNode||null;
    }
}

const node = new LinkedList();
node.append("Maça");
node.append("Uva");
node.append("Pera");
node.prepend("Banana");
const cont = node.size();
console.log(cont);
const head = node.head();
console.log(head);
const tail = node.tail();
console.log(tail);
const node2 = node.at(1);
console.log(node2);
node.pop();
const boo = node.contains("Pera");
console.log(boo);
const a = node.find("outro");
console.log(a);
const string = node.toString();
console.log(string);