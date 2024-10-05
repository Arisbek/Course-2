function celsius2farenheit(c){
    if (typeof(c)=="number"){
        return c*9/5+32
    }
    else {
        return "Function takes only number"
    }
}

console.log(celsius2farenheit(4))