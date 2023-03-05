function execFibonacci(){
    const num = document.getElementById("imp-fib").value;
    const array = fibonacci(num);
    document.getElementById("fibonacci").innerHTML=array;
}
function fibonacci(num){
    if(num<1){
        return "Number invalid";
    }else if(num==1){
        return [0]; 
    }else if(num==2){
        return [0,1];
    }else if(num>2){
        return [...fibonacci(num-1),fibonacci(num-1)[num-2]+fibonacci(num-1)[num-3]];
    }
}
function execMarge(){
    const string = document.getElementById("imp-array").value;
    const array = string.split(",");
    const numberArray=[]
    for (var i = 0; i < array.length; i++){
        numberArray.push(parseInt(array[i]));
    }
    const mg_array = margeSort(numberArray);
    document.getElementById("margesort").innerHTML=mg_array;
}
function margeSort(array){
    if(array.length<1){
        return "Invalid length";
    }
    if(array.length==1){
        return array;
    }
    let a = array.slice(0,Math.floor(array.length/2));
    let b = array.slice(Math.floor(array.length/2),array.length);
    const array_marge = marge(margeSort(a),margeSort(b));
    return array_marge;
}
function marge(a,b){
    let c=[];
    let i=0;
    let j=0;
    let k=0;
    while(i<a.length && j<b.length){
        if(a[i]<b[j]){
            c[k]=a[i];
            i++;
            k++;
        }else{
            c[k]=b[j];
            j++;
            k++;
        }
    }
    while(i<a.length){
        c[k]=a[i];
        i++;
        k++;
    }
    while(j<b.length){
        c[k]=b[j];
        j++;
        k++;
    }
    return c;
}