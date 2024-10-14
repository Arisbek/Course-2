function deepCopy(obj){
    return structuredClone(obj)
}

var original = new Map([[1,2]])
var copy = deepCopy(original)



function show(){
    document.getElementById('p').innerHTML = "Original object: <br>"
    for (var [key, val] of original.entries()){document.getElementById('p').innerHTML += `${key}: ${val}<br>`}
    document.getElementById('p').innerHTML += "Copy: <br>"
    for (var [key, val] of copy.entries()){document.getElementById('p').innerHTML += `${key}: ${val}<br>`}
    if (original===copy){document.getElementById('p').innerHTML += "Oh no. They are the same object!"}
    else {document.getElementById('p').innerHTML += "Hooray! They are not the same object!"}
}

window.onload = show
