class Analyze{
    constructor(average, min, max, length){
        this.average=average;
        this.min=min;
        this.max=max;
        this.length=length;
    }
}
function minimum(array){
    var min=array[0];
    for(var i=0; i<array.length; i++){
        if(array[i]<min){
            min=array[i];
        }
    }
    return min;
}
function maximum(array){
    var max=array[0];
    for(var i=0; i<array.length; i++){
        if(array[i]>max){
            max=array[i];
        }
    }
    return max;
}
function aaverage(array){
    var sum=0;
    for(var i=0; i<array.length; i++){
        sum=sum+array[i];
    }
    return sum/array.length;
}
function analyzeArray(array){
    var min = minimum(array);
    var max = maximum(array);
    var length = array.length;
    var average = aaverage(array);
    var obj = new Analyze(average, min, max, length);
    return obj;
}

module.exports=analyzeArray;