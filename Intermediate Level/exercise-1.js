function heap_sort(ar){
    if (!Array.isArray(ar)){
        console.log("Function takes only array")
        return
    }
    if (ar.length==0){
        return ar
    }

    // build maxify
    var temp
    var curr
    m = Number.parseInt(ar.length/2)-1
    for (var i=m; i>-1; i--){
        curr = i
        while (curr*2+2<ar.length){
            if (ar[curr*2+2]>ar[curr*2+1] && ar[curr*2+2]>ar[curr]){
                temp = ar[curr*2+2]
                ar[curr*2+2] = ar[curr]
                ar[curr] = temp
                curr = curr*2+2
            }
            else if(ar[curr*2+2]<=ar[curr*2+1] && ar[curr*2+1]>ar[curr]){
                temp = ar[curr*2+1]
                ar[curr*2+1] = ar[curr]
                ar[curr] = temp
                curr = curr*2+1
            }
            else {
                break
            }
        }
        if (curr*2+1<ar.length && ar[curr*2+1]>ar[curr]){
            temp = ar[curr*2+1]
            ar[curr*2+1] = ar[curr]
            ar[curr] = temp
        }
    }
    // console.log(ar)
    // extract phase
    for (var end=ar.length-1;end>0;end--){
        temp = ar[end]
        ar[end] = ar[0]
        ar[0] = temp
        curr = 0
        while (curr*2+2<end){
            if (ar[curr*2+2]>ar[curr*2+1] && ar[curr*2+2]>ar[curr]){
                temp = ar[curr*2+2]
                ar[curr*2+2] = ar[curr]
                ar[curr] = temp
                curr = curr*2+2
            }
            else if(ar[curr*2+2]<=ar[curr*2+1] && ar[curr*2+1]>ar[curr]){
                temp = ar[curr*2+1]
                ar[curr*2+1] = ar[curr]
                ar[curr] = temp
                curr = curr*2+1
            }
            else {
                break
            }
        }
        if (curr*2+1<end && ar[curr*2+1]>ar[curr]){
            temp = ar[curr*2+1]
            ar[curr*2+1] = ar[curr]
            ar[curr] = temp
        }
    }
}

// var arr = [4,2,4,1,-3,2.5,4,6,3,4]
// heap_sort(arr)
// console.log(arr)
function sort_ar(){
    var inputs = document.querySelectorAll('#arrayInputs input');
    var ar = Array.from(inputs)
        .map(input => parseFloat(input.value))
        .filter(value => !isNaN(value));  // Filter out NaN values (empty inputs)

    // Show the parsed array in the <p> element
    // document.getElementById('p').innerText = values.length > 0 ? values : 'No numbers entered';

    // Find the max using the mx function
    heap_sort(ar);
    document.getElementById('p').innerText = "["+ar+"]";
}