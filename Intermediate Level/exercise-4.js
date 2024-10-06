function countWords(s){
    if (typeof(s)!="string"){
        return "Function take only string"
    }
    var hm = new Map()
    var words = s.split(' ')
    var cnt = 0
    for (w of words){
        if (w===""){continue}
        hm.set(w,hm.has(w) ? hm.get(w)+1 : 1)
        cnt ++
    }
    return [hm, cnt]
}

function inp(){
    s = document.getElementById('i').value
    var output = document.getElementById('p');
    output.innerHTML = '';

    var res = countWords(s);
    var hm = res[0]
    var cnt = res[1]
    for (var [p, v] of hm.entries()) {
        output.innerHTML += p + ': ' + v + '<br />';
    }
    output.innerHTML += "Total number of words: "+cnt
}