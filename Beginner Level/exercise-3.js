function check(n){
    if (!Number.isInteger(n)){console.log(`${n} is not an integer`)}
    if (n%2===0){
        return `${n} is even`
    }
    else {
        return `${n} is odd`
    }
}

function Inp(){
    num = parseInt(document.getElementById('i').value)
    if (isNaN(num)){
        document.getElementById('p').textContent = "Please enter valid integer number"
        return
    }
    document.getElementById('p').textContent = check(num)
}

function isNumberKey(evt) {
    var charCode = evt.which ? evt.which : evt.keyCode;
    if (charCode===45){return true}
    if (charCode > 8 && (charCode < 48 || charCode > 57)) {return false;}
    return true;
  }