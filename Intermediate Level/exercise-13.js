function deepCopy(obj){
    return JSON.parse(JSON.stringify(obj))
}

var original = {1:2, 2:3}
var copy = deepCopy(original)
console.log(original===copy)
console.log(original)
console.log(copy)