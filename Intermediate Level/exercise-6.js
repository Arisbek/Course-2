function checkAnagrams(s1, s2){
    if (typeof(s1)!="string"||typeof(s2)!="string"){
        return "Function takes only 2 strings"
    }
    
    var hm = new Map()

    for (c of s1){
        if (hm.has(c)){
            hm.set(c, hm.get(c)+1)
        }
        else {
            hm.set(c,1)
        }
    }

    for (c of s2){
        if (hm.has(c)){
            hm.set(c, hm.get(c)-1)
        }
        else {
            hm.set(c,-1)
        }
    }

    for (cnt of hm.values()){
        if (cnt!=0){
            return "Not anagrams"
        }
    }
    return "Anagrams"
}

function inp(){
    s1 = document.getElementById('i1').value
    s2 = document.getElementById('i2').value
    document.getElementById('p').textContent = checkAnagrams(s1,s2)
}