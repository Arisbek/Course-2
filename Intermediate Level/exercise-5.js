var lim = 100;
var sieve = Array.from({ length: lim+1 }).map((_) => true)
for (var i = 2; i<=lim; i++){
    if (sieve[i]){
        console.log(i)
        for (var j=i**2; j<=lim; j+=i){
            sieve[j] = false
        }
    }
}