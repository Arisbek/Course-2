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

function inp(){
    num = parseInt(document.getElementById('i').value)
    document.getElementById('p').textContent = `! = ${factorial(num)}`
}

function isNumberKey(evt) {
    var charCode = evt.which ? evt.which : evt.keyCode;
    if (charCode > 8 && (charCode < 48 || charCode > 57)) {return false;}
    return true;
}