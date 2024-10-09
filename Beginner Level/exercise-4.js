const p = /^\d+(.\d+)?$/

function celsius2farenheit(c){
    if (typeof(c)=="number"){
        return c*9/5+32
    }
    else {
        return "Function takes only number"
    }
}

function update(){
    var c = document.getElementById('i').value
    if (!p.test(c)){
        document.getElementById('p').textContent = "Please enter valid number"
        return
    }
    var t = parseFloat(c)
    if (isNaN(t)){
        document.getElementById('p').textContent = "Please enter valid number"
        return
    }
    document.getElementById('p').textContent = "Temperature in F°: "+celsius2farenheit(t)
}

function isNumberKey(evt) {
    var charCode = evt.which ? evt.which : evt.keyCode;
    if (charCode===46 || charCode===45){return true}
    if (charCode > 8 && (charCode < 48 || charCode > 57)) {return false;}
    return true;
  }