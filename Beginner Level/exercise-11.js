function sum(ar){
    if (!Array.isArray(ar)){
        return "Function takes only array"
    }
    var tot = 0
    for (n of ar){
        if (typeof(n)!="number"){
            return "Array must include only numbers"
        }
        tot += n
    }
    return tot
}

console.log(sum([1,2.5]))