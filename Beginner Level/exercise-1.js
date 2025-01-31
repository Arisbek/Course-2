function add(n1, n2){
    if (typeof(n1)!="number"||typeof(n2)!="number"){
        return "Function takes only 2 numbers"
    }
    return n1+n2
}

function handleAdd() {
    let num1 = parseFloat(document.getElementById('number1').value);
    let num2 = parseFloat(document.getElementById('number2').value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').textContent = "Please enter valid numbers";
        return;
    }

    let result = add(num1, num2);
    document.getElementById('result').textContent = "The sum is: " + result;
}

function isNumberKey(evt) {
    var charCode = evt.which ? evt.which : evt.keyCode;
    if (charCode===46 || charCode===45){return true}
    if (charCode > 8 && (charCode < 48 || charCode > 57)) {return false;}
    return true;
  }