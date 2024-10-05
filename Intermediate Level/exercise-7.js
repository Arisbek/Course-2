function flattenNestedArray(ar){
    ar = [ar]
    var newAr = []
    var stack = [[ar,0]]
    while (stack.length>0){
        if (Array.isArray(stack.at(-1)[0][stack.at(-1)[1]])){
            stack.push(stack.at(-1)[0][stack.at(-1)[1]])
        }
        else {
            newAr.push(stack.at(-1)[0][stack.at(-1)[1]])
        }
    }
    return newAr
}

console.log(flattenNestedArray([1,2]))