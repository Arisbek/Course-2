function is_palindrome(s){
    if (typeof(s)!="string"){
        return "Function takes only string"
    }
    l = 0
    r = s.length-1
    while (l<r){
        if (s[l]!=s[r]){
            return false
        }
        l++
        r--
    }
    return true
}

console.log(is_palindrome("ab"))