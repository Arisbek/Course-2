function check(n){
    if (!Number.isInteger(n)){console.log(`${n} is not an integer`)}
    if (n%2===0){
        console.log(`${n} is even`)
    }
    else {
        console.log(`${n} is odd`)
    }
}

check(1)
check(12)