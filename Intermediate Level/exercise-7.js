function flattenNestedArray(stack){
    var New = []
    while (stack.length>0){
        var l = stack.pop()
        if (Array.isArray(l)){
            for (var i = 0; i < l.length; i++) {
                stack.push(l[i]);
            }
        } else {
            New.push(l)
        }
    }
    return New.reverse()
}

// Recursively build array from DOM structure
window.onload = (event) => {
    var p = document.getElementById('p')
    var ar = [[1,2,[[2.5,12],3]]]
    p.innerHTML = "Original array: "+JSON.stringify(ar) + "<br>";
    p.innerHTML += "Flattened: "+JSON.stringify(flattenNestedArray(ar));
}