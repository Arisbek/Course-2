function Number2String(n){
    if (typeof(n)!="number"){
        return "Function takes only valid number"
    }
    var ns = `${n}`
    return ns+" is "+typeof(ns)
}

function inp(){
    var ns = parseFloat(document.getElementById('i').value)
    var res = Number2String(ns)
    document.getElementById('p').innerHTML = ns+" was "+typeof(ns)+"<br>"
    document.getElementById('p').innerHTML += res
}

function isNumberKey(evt) {
    var charCode = evt.which ? evt.which : evt.keyCode;
    if (charCode===46 || charCode===45){return true}
    if (charCode > 8 && (charCode < 48 || charCode > 57)) {return false;}
    return true;
  }