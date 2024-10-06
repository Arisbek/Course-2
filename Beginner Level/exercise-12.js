function rand(a,b){
    if (typeof(a)!="number" || typeof(b)!="number" || a>b){
        return "Left and right borders should be numbers such that left is smaller than right"
    }
    return `Random number: ${Math.random()*(b-a)+a}`
}

function inp(){
    n1 = parseFloat(document.getElementById('i1').value)
    n2 = parseFloat(document.getElementById('i2').value)
    document.getElementById('p').textContent = rand(n1,n2)
}
