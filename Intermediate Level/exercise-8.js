function getUniqueValues(ar){
    if (!Array.isArray(ar)){
        return "Function takes only array"
    }
    var hm = new Map()
    for (el of ar){
        if (hm.has(JSON.stringify(el))){
            continue
        }
        hm.set(JSON.stringify(el),el)
    }
    return Array.from(hm.values())
}

console.log(getUniqueValues([[1,2],[1,2],1,"a"]))