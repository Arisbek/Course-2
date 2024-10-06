const vowels = new Set(['a', 'e', 'i', 'o', 'u'])
function countVowels(s){
    if (typeof(s)!="string"){
        return "Function take only string"
    }
    var cnt = 0;
    s = s.toLowerCase()
    for (c of s){
        if (vowels.has(c)){
            cnt ++
        }
    }
    return cnt
}

function inp(){
    s = document.getElementById('i').value
    document.getElementById('p').textContent = "Number of vowels: "+countVowels(s)
}