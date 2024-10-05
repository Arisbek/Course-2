function factorial(n){
    if (!Number.isInteger(n) || n<0){
        return "Function takes only non-negative integer numbers"
    }
    var ans = 1;
    for (var i=1; i<=n; i++){
        ans *= i
    }
    return ans
}

console.log(factorial(5))