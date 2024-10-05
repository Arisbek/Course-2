const vowels = new Set('a', 'e', 'i', 'o', 'u')
function countVowels(s){
    if (typeof(s)!="string"){
        return "Function take only string"
    }
    var cnt = 0;
    for (c of s){
        if (vowels.has(c)){
            cnt ++
        }
    }
    return cnt
}

console.log(countVowels("aba"))