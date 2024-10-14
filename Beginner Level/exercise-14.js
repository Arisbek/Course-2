function removeDuplicates(ar){
    if (!Array.isArray(ar)){
        console.log("Function only takes array")
        return
    }
    var hm = new Map()
    for (var i=0; i<ar.length; i++){
        if (hm.has(JSON.stringify(ar[i]))){
            hm.set(JSON.stringify(ar[i]), true)
        }
        else {
            hm.set(JSON.stringify(ar[i]), false) 
        }
    }

    for (var i = ar.length-1; i>=0; i--){
        if (hm.get(JSON.stringify(ar[i]))){
            ar.splice(i, 1)
        }
    }
    return ar
}

var inputCount = 0;
const comma = document.createTextNode(', ');
// console.log(mx([12.3,-2,13]))

function add(afterId = null) {
    inputCount++;
    var arrayInputs = document.getElementById('arrayInputs');
    var newInputContainer = document.createElement('span');

    var newInput = document.createElement('input');
    newInput.type = 'text';
    if (!isNaN(afterId)) {
        newInput.id = afterId;
    } else {
        newInput.id = `input${inputCount}`;
    }

    var minusButton = document.createElement('button');
    minusButton.innerText = '-';
    minusButton.onclick = function () {
        remove(newInputContainer);
    };

    var plusButton = document.createElement('button');
    plusButton.innerText = '+';
    plusButton.onclick = function () {
        add(newInputContainer);
    };

    newInputContainer.appendChild(newInput);
    newInputContainer.appendChild(minusButton);
    newInputContainer.appendChild(plusButton);

    // Remove all existing commas first
    cleanUpCommas();

    // If 'afterId' is provided, insert after that element; otherwise, append at the end
    if (afterId) {
        if (afterId === 'input1') {
            if (arrayInputs.firstChild) {
                arrayInputs.insertBefore(newInputContainer, arrayInputs.firstChild);
            } else {
                arrayInputs.appendChild(newInputContainer);
            }
        } else {
            arrayInputs.insertBefore(newInputContainer, afterId.nextSibling);
        }
    } else {
        arrayInputs.appendChild(newInputContainer);
    }

    // Add commas between inputs after insertion
    addCommasBetweenInputs();
}

// Function to remove a specific input field and its associated buttons
function remove(container) {
    var arrayInputs = document.getElementById('arrayInputs');
    arrayInputs.removeChild(container);

    // Remove and re-add commas to maintain proper format
    cleanUpCommas();
    addCommasBetweenInputs();
}

// Function to clean up any existing commas before re-adding them
function cleanUpCommas() {
    var arrayInputs = document.getElementById('arrayInputs');
    var children = Array.from(arrayInputs.children);

    children.forEach(child => {
        var commaNode = child.querySelector('.comma');
        if (commaNode) {
            child.removeChild(commaNode);
        }
    });
}

// Function to add commas between input fields
function addCommasBetweenInputs() {
    var arrayInputs = document.getElementById('arrayInputs');
    var children = Array.from(arrayInputs.children);

    children.forEach((child, index) => {
        if (index < children.length - 1) {
            // Add a comma span between inputs
            var commaSpan = document.createElement('span');
            commaSpan.className = 'comma';
            commaSpan.innerText = ', ';
            child.appendChild(commaSpan);
        }
    });
}

function inp() {
    var inputs = document.querySelectorAll('#arrayInputs input');
    
    // Convert input values from strings to numbers if applicable
    var values = Array.from(inputs).map(input => input.value.trim());

    // Remove duplicates from the array
    values = removeDuplicates(values);

    // Display the result in the <p> element
    document.getElementById('p').innerText = "["+values.join(', ')+"]";
}

