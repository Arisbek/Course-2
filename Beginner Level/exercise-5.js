function mx(ar){
    if (!Array.isArray(ar) || ar.length==0){
        return "Function takes non empty array"
    }
    mx = ar[0]
    for (n of ar){
        if (typeof(n)!="number"){
            return "Function takes only numbers"
        }
        mx = Math.max(mx,n)
    }
    return mx
}

console.log(mx([12.3,-2,13]))