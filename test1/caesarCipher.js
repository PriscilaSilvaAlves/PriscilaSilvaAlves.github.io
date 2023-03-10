function caesarCipher(string,n){
    var string2='';
    if(n>25){throw "Error: Very big jump"}
    for(var i = 0; i<string.length; i++){
        string2=string2+cipher(string[i],n);
    }
    return string2;
}
function cipher(letter, n){
    const string = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxy";
    var lettershifted;
    if(n>25){throw "Error: Very big jump."}
    if(letter==" ") return " "
    if(letter==",") return ","
    if(letter==".") return "."
    if(letter==";") return ";"
    if(letter==":") return ":"
    if(letter=="-") return "-"
    for(var i = 0; i<26; i++){
        if(string[i]==letter){
            lettershifted=string[i+n];
        }
    }
    return lettershifted;
}

module.exports=caesarCipher;