function removeDuplicates(ar){
    if (!Array.isArray(ar)){
        console.log("Function only takes array")
        return
    }
    var hs = new Set()
    for (var i=ar.length-1; i>=0; i--){
        for (var j=0; j<i; j++){
            if (JSON.stringify(ar[i]) === JSON.stringify(ar[j])){
                ar.splice(i, 1);
                break
            }
        }
    }
}

var arr = [[1,2],[1,2],1,1,"1"]
removeDuplicates(arr)
console.log(arr)