function deepCopy(obj){
    return structuredClone(obj)
}

var original = new Map([[1,2]])
var copy = deepCopy(original)
console.log(original===copy)
console.log(original)
console.log(copy)