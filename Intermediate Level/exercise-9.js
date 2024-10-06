function checkSubstring(s1,s2){
    if (typeof(s1)!="string"||typeof(s2)!="string"){
        return "Function takes only 2 strings"
    }
    if (s1.length < s2.length){
        var temp = s1
        s1 = s2
        s2 = temp
    }
    for (var i=0;i<s1.length;i++){
        var j = i
        var check = true
        for (c of s2){
            if (c!=s1[j]){
                check = false
                break
            }
            j++
        }
        if (check){
            return `${s2} is substring of ${s1}`
        }
    }
    return `no substring`
}

function inp(){
    s1 = document.getElementById('i1').value
    s2 = document.getElementById('i2').value
    document.getElementById('p').textContent = checkSubstring(s1,s2)
}