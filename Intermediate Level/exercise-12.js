function arrIntersection(ar1, ar2) {
    if (!Array.isArray(ar1) || !Array.isArray(ar2)) {
        return "Function only takes 2 arrays";
    }
    ar1.sort();
    ar2.sort();
    var inter = [];
    var i = 0, j = 0;

    while (i < ar1.length && j < ar2.length) {
        if (ar1[i] < ar2[j]) {
            i++;
        } else if (ar1[i] > ar2[j]) {
            j++;
        } else {
            if (inter.length === 0 || inter[inter.length - 1] !== ar1[i]) {
                inter.push(ar1[i]);
            }
            i++;
            j++;
        }
    }

    return inter;
}

function find() {
    var array1 = getInputValues('arrayInputs');
    var array2 = getInputValues('arrayInputs2');

    var result = arrIntersection(array1, array2);
    document.getElementById('p').innerText = "[" + result.join(', ') + "]";
}

var inputCount = 0;

function add(afterId = null, array_name) {
    inputCount++;
    var arrayInputs = document.getElementById(array_name);
    var newInputContainer = document.createElement('span');

    var newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.id = `input${inputCount}`;

    var minusButton = document.createElement('button');
    minusButton.innerText = '-';
    minusButton.onclick = function () {
        remove(newInputContainer, array_name);
    };

    var plusButton = document.createElement('button');
    plusButton.innerText = '+';
    plusButton.onclick = function () {
        add(newInputContainer, array_name);
    };

    newInputContainer.appendChild(newInput);
    newInputContainer.appendChild(minusButton);
    newInputContainer.appendChild(plusButton);

    // Remove all existing commas first
    cleanUpCommas(array_name);

    // If 'afterId' is provided, insert after that element; otherwise, append at the end
    if (afterId) {
        if (afterId === 'input1') {
            if (arrayInputs.firstChild) {
                arrayInputs.insertBefore(newInputContainer, arrayInputs.firstChild);
            } else {
                arrayInputs.appendChild(newInputContainer);
            }
        } else {
            var afterElement = document.getElementById(afterId);
            if (afterElement) {
                arrayInputs.insertBefore(newInputContainer, afterElement.nextSibling);
            } else {
                arrayInputs.appendChild(newInputContainer);
            }
        }
    } else {
        arrayInputs.appendChild(newInputContainer);
    }

    // Add commas between inputs after insertion
    addCommasBetweenInputs(array_name);
}

// Function to remove a specific input field and its associated buttons
function remove(container, array_name) {
    var arrayInputs = document.getElementById(array_name);
    arrayInputs.removeChild(container);

    // Remove and re-add commas to maintain proper format
    cleanUpCommas(array_name);
    addCommasBetweenInputs(array_name);
}

// Function to clean up any existing commas before re-adding them
function cleanUpCommas(array_name) {
    var arrayInputs = document.getElementById(array_name);
    var children = Array.from(arrayInputs.children);

    children.forEach(child => {
        var commaNode = child.querySelector('.comma');
        if (commaNode) {
            child.removeChild(commaNode);
        }
    });
}

// Function to add commas between input fields
function addCommasBetweenInputs(array_name) {
    var arrayInputs = document.getElementById(array_name);
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

// Function to get values from input fields
function getInputValues(array_name) {
    var arrayInputs = document.getElementById(array_name);
    var inputs = Array.from(arrayInputs.getElementsByTagName('input'));
    return inputs.map(input => input.value).filter(value => value !== '');
}