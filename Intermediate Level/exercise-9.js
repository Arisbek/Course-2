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
            return true
        }
    }
    return false
}

console.log(checkSubstring("bc","abca"))