function sum(ar){
    if (!Array.isArray(ar)){
        return "Function takes only array"
    }
    var tot = 0
    for (n of ar){
        if (typeof(n)!="number"){
            return "Array must include only numbers"
        }
        tot += n
    }
    return tot
}

function findSum() {
    var inputs = document.querySelectorAll('#arrayInputs input');
    var values = Array.from(inputs)
        .map(input => parseFloat(input.value))
        .filter(value => !isNaN(value));  // Filter out NaN values (empty inputs)

    // document.getElementById('p').innerText = values.length > 0 ? values : 'No numbers entered';

    document.getElementById('p').innerText = sum(values);
}
// console.log(sum([1,2.5]))