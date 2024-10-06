function celsius2farenheit(c){
    if (typeof(c)=="number"){
        return c*9/5+32
    }
    else {
        return "Function takes only number"
    }
}

function update(){
    t = parseFloat(document.getElementById('i').value)
    if (isNaN(t)){
        document.getElementById('p').textContent = "Please enter valid number"
        return
    }
    document.getElementById('p').textContent = "Temperature in F°: "+celsius2farenheit(t)
}