function rev(s){
    if (typeof(s)!="string"){return "Function takes only string"}
    r = s.length-1
    var New = ""
    while (r>-1){
        New+=s[r]
        r--
    }
    s = New
    return s
}

console.log(rev("REv"))