var start = 1
var end = 100
for (var i=start; i<=end; i++){
    var out = ""
    if (i%3==0){
        out += "Fizz"
    }
    if (i%5==0){
        out += "Buzz"
    }
    if (out.length>0){
        console.log(out)
    }
    else {
        console.log(i)
    }
}
