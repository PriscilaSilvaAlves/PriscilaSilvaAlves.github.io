function reverseString(a){
    var b = '';
    for(var i = a.length-1; i>=0; i--){
        b=b+a[i];
    }
    return b;
}

module.exports=reverseString;
