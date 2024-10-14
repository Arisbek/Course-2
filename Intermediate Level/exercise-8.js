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

// console.log(getUniqueValues([[1,2],[1,2],1,"a"]))

function get(){
    var inputs = document.querySelectorAll('#arrayInputs input');
    
    // Convert input values from strings to numbers if applicable
    var values = Array.from(inputs).map(input => input.value);

    // Remove duplicates from the array
    values = getUniqueValues(values);

    // Display the result in the <p> element
    document.getElementById('p').innerText = "["+values.join(', ')+"]";
}