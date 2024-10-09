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

// console.log(flattenNestedArray([[1,2],[3,[4,[5,[6]]],7],[8,9,10]]))
var inputCount = 0;

function addList() {
    inputCount++;
    var arrayInputs = document.getElementById('arrayInputs');
    var newListContainer = document.createElement('div');

    // Button to add an element inside the current list
    var addElementButton = document.createElement('button'); 
    addElementButton.innerText = 'Add Element';
    addElementButton.onclick = function () {
        addElement(newListContainer);
    };

    // Button to add a list inside the current list
    var addListButtonInside = document.createElement('button'); 
    addListButtonInside.innerText = 'Add List Inside';
    addListButtonInside.onclick = function () {
        addListToContainer(newListContainer); // Call the function to add a new list inside the current list
    };

    // Button to add a list outside the current list
    var addListButtonOutside = document.createElement('button'); 
    addListButtonOutside.innerText = 'Add List Outside';
    addListButtonOutside.onclick = function () {
        addList();  // Call the function to add a new list at the same level
    };

    // Button to remove the current list
    var removeButton = document.createElement('button');
    removeButton.innerText = '-';
    removeButton.onclick = function () {
        remove(newListContainer);
    };

    // Create and append the input field
    var newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.placeholder = "Enter a string";

    // Append elements to the new list container
    newListContainer.appendChild(document.createTextNode(" [")); // opening bracket
    newListContainer.appendChild(addListButtonInside); // Add List Inside button
    newListContainer.appendChild(newInput); // Append input
    newListContainer.appendChild(addElementButton); // Add Element button after the input
    newListContainer.appendChild(removeButton); // Remove button after Add Element
    newListContainer.appendChild(document.createTextNode("]")); // closing bracket
    newListContainer.appendChild(addListButtonOutside);

    // Append the new list container to the main inputs area
    arrayInputs.appendChild(newListContainer);
    
    // Add initial comma after the new list if there are existing lists
    if (arrayInputs.children.length > 1) {
        arrayInputs.insertBefore(document.createTextNode(", "), newListContainer);
    }
}

function addElement(container) {
    var newInput = document.createElement('input');
    newInput.type = 'text';
    
    // Insert before the last text node (which is the closing bracket)
    container.insertBefore(newInput, container.childNodes[container.childNodes.length - 1]); 
    container.insertBefore(document.createTextNode(", "), container.childNodes[container.childNodes.length - 1]); // Add a comma

    // Clean up extra comma if it's the only element
    if (container.childNodes.length === 4) { // Only input and brackets plus a comma
        container.removeChild(container.childNodes[container.childNodes.length - 2]); // Remove the comma
    }
}

function remove(container) {
    var arrayInputs = document.getElementById('arrayInputs');
    arrayInputs.removeChild(container);
    cleanUpCommas();
}

function cleanUpCommas() {
    var arrayInputs = document.getElementById('arrayInputs');
    var children = Array.from(arrayInputs.childNodes);
    children.forEach((child, index) => {
        if (index < children.length - 1) {
            // Remove any extra commas in case of single elements
            if (child.lastChild && child.lastChild.nodeType === Node.TEXT_NODE) {
                if (child.lastChild.textContent.trim() === ",") {
                    child.removeChild(child.lastChild); // Remove the last text node if it's a comma
                }
            }
        }
    });
}

function flattenArray() {
    var inputs = document.querySelectorAll('#arrayInputs input');
    var nestedArrays = [];

    inputs.forEach(input => {
        const value = input.value.trim();
        if (value) {
            nestedArrays.push(value); // Collect string inputs directly
        }
    });

    // Call flattenNestedArray with the nestedArrays collected
    // var flatResult = flattenNestedArray([nestedArrays]);
    
    document.getElementById('result').innerText = JSON.stringify(nestedArrays);
}
