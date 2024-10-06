var resultDiv = document.getElementById('p');
resultDiv.innerHTML = ''
var lim = 100;
var sieve = Array.from({ length: lim+1 }).map((_) => true)

for (var i = 2; i<=lim; i++){
    if (sieve[i]){
        resultDiv.innerHTML += i + '<br/>'
        for (var j=i**2; j<=lim; j+=i){
            sieve[j] = false
        }
    }
}