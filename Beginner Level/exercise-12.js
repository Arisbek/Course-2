function rand(a,b){
    if (typeof(a)!="number" || typeof(b)!="number" || a>b){
        return "Left and right borders should be numbers such that left is smaller than right"
    }
    return Math.random()*(b-a)+a
}

console.log(rand(-1,0))
