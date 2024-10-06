function firstNFibNumbers(n){
    if (!Number.isInteger(n) || n<0){
        return "Function takes only non-negative integer number"
    }
    var fib = [1,1]
    switch(n){
        case 0:
            return []
        case 1:
            return [1]
        case 2:
            return [1,1]
        default:
            for (var i=2; i<n; i++){
                fib.push(fib[i-1]+fib[i-2])
            }
            return fib
    }
}

function Inp(){
    num = parseInt(document.getElementById('i').value)
    if (isNaN(num)){
        document.getElementById('p').textContent = "Please enter valid integer number"
        return
    }
    document.getElementById('p').textContent = firstNFibNumbers(num)
}

function isNumberKey(evt) {
    var charCode = evt.which ? evt.which : evt.keyCode;
    if (charCode > 8 && (charCode < 48 || charCode > 57)) {return false;}
    return true;
  }