function capitalize(a) {
    var b = a[0].toUpperCase();
    for(var i=1; i<a.length; i++){
        b=b+a[i];
    }
    return b;
}

module.exports=capitalize;

