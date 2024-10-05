function countWords(s){
    if (typeof(s)!="string"){
        return "Function take only string"
    }
    var hm = new Map()
    var words = s.split(' ')
    for (w of words){
        hm.set(w,hm.has(w) ? hm.get(w)+1 : 1)
    }
    return hm
}

console.log(countWords("A b c c"))