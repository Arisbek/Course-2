var start = 1
var end = 100
var resultDiv = document.getElementById('p');
for (var i=start; i<=end; i++){
    var out = ""
    if (i%3==0){
        out += "Fizz"
    }
    if (i%5==0){
        out += "Buzz"
    }
    var p = document.createElement('p')
    if (out.length>0){
        p.textContent = out;
    }
    else {
        p.textContent = i;
    }
    resultDiv.appendChild(p);
}
