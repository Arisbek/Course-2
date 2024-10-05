const dig = /[0-9.]/
const num = /^[0-9]+(.[0-9]+)?$/
// console.log(num.test("1.51"))
function calc(s){
    if (typeof(s)!=string){
        return "Function takes only string"
    }
    var stack = []
    var l = 0
    var lastOper = ""
    for (var r=0; r<s.length; r++){
        if (dig.test(s[r])){
            continue
        }
        if (!num.test(s[l,r+1])){return `There is no number before ${s[r]}`}
        if (s[r-1]==='.'){return `Incorrect number ${s[l,r+1]}`}

    }
}

console.log(calc(""))
console.log(calc("-1"))
console.log(calc("+1"))
console.log(calc("1+1"))
console.log(calc("1."))
console.log(calc("0."))
console.log(calc("1++1"))