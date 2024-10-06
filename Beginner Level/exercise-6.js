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

function inp(){
    s = document.getElementById('i').value
    document.getElementById('p').textContent = is_palindrome(s)
}