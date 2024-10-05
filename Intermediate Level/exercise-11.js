String.prototype.replaceAt = function(index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}

function capitilize(s){
    if (typeof(s)!="string"){
        return "Function takes only string"
    }
    for (var i=0; i<s.length; i++){
        if (i==0 && /[a-z]/.test(s[i])){
            s = s.replaceAt(i,s[i].toUpperCase())
        }
        else if(i>0 && s[i-1]===' '){
            s = s.replaceAt(i,s[i].toUpperCase())
        }
    }
    return s
}

var s = "abc Da f1's "

console.log(capitilize(s))