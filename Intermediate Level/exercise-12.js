function arrIntersection(ar1,ar2){
    if (!Array.isArray(ar1) || !Array.isArray(ar2)){
        return "Function only takes 2 arrays"
    }
    ar1.sort()
    ar2.sort()
    var inter = []
    var end = Math.min(ar1.length,ar2.length)
    var i = 0
    var j = 0
    while (i<end && j<end){
        if (ar1[i]>ar2[j]){
            j++
        }
        else if(ar1[i]<ar2[j]){
            i++
        }
        else{
            if (inter.length>0 && inter.at(-1)!=ar1[i]){
                inter.push(ar1[i])
            }
            else if(inter.length==0){
                inter.push(ar1[i])
            }
            i++
            j++
        }
    }
    return inter
}

var ar1 = [1,"1"]
var ar2 = [2,1,"1"]

console.log(arrIntersection(ar1,ar2))