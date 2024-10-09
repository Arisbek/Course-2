function mx(ar){
    if (!Array.isArray(ar) || ar.length===0){
        return "Function takes non empty array"
    }
    var mx = ar[0]
    for (n of ar){
        if (typeof(n)!="number" || isNaN(n)){
            return "Function takes only numbers"
        }
        mx = Math.max(mx,n)
    }
    return mx
}

var inputCount = 0;
const comma = document.createTextNode(', ');
// console.log(mx([12.3,-2,13]))

function add(afterId = null) {
    inputCount++;
    var arrayInputs = document.getElementById('arrayInputs');
    var newInputContainer = document.createElement('span');

    var newInput = document.createElement('input');
    newInput.type = 'number';
    if (!isNaN(afterId)) {
        newInput.id = afterId;
    } else {
        newInput.id = `input${inputCount}`;
    }
    newInput.onkeypress = isNumberKey; // Set onkeypress event

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
    var values = Array.from(inputs)
        .map(input => parseFloat(input.value))
        .filter(value => !isNaN(value));  // Filter out NaN values (empty inputs)

    // Show the parsed array in the <p> element
    // document.getElementById('p').innerText = values.length > 0 ? values : 'No numbers entered';

    // Find the max using the mx function
    var maxValue = mx(values);
    document.getElementById('p').innerText = maxValue;
}

function isNumberKey(evt) {
    var charCode = evt.which ? evt.which : evt.keyCode;
    if (charCode === 46 || charCode === 45 || charCode === 32 || (charCode >= 48 && charCode <= 57)) {
        return true;
    }
    return false;
}