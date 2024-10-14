const dig = /[0-9\.]/
const num = /^[0-9]+(\.[0-9]+)?$/
const double = /[\+\-\/\*][\+-\/\*]/
const brack = /(\([\+\/\*])|([\+\/\*\-]\))/
const dot = /(\D\.)|(\.\D)|(^\.)|(\.$)/
const i_n = /\d*\.\d*\.\d*/
// const pos = /^\(*\+/
const p_c = /[^0-9\.\+\-\*\/\(\)]/
const opers = new Set(['/','+','*'])
function subprob(stack,open,closed){
    var temp = []
    var cs = stack[open-closed].length
    if (cs===0){return false}
    var ind = 0
    while (ind<cs){
        if (temp.length==0 && opers.has(stack[open-closed][ind])){
            return false
        }
        if (stack[open-closed][ind]==='*'){
            temp.push(stack[open-closed][ind+1]*temp.pop())
        }else if (stack[open-closed][ind]==='/'){
            if (stack[open-closed][ind+1]===0){return null}
            temp.push(temp.pop()/stack[open-closed][ind+1])
        }else if (stack[open-closed][ind]==='+'){
            temp.push(stack[open-closed][ind+1])
        }else if (stack[open-closed][ind]==='-'){
            temp.push(-stack[open-closed][ind+1])
        } else {
            temp.push(stack[open-closed][ind])
            ind --
        }
        // console.log(temp)
        ind += 2
    }
    var tot = 0
    for (var num of temp){tot+=num}
    return tot
}

function calc(s){
    if (typeof(s)!="string"){
        return "Function takes only string"
    }
    
    s = s.replaceAll(' ','')

    if (s==="" || double.test(s) || brack.test(s) || dot.test(s) || i_n.test(s) || p_c.test(s)){return "Invalid expression"}
    if (!dig.test(s)){return "Invalid expression"}
    var stack = Array.from({ length: 150000 }, () => []);

    var b = ""

    var l = 0
    var n = s.length
    var open = 0
    var closed = 0
    for (var r=0; r<n; r++){
        if (dig.test(s[r])){continue}
        else{
            if (l<r){stack[open-closed].push(Number(s.substring(l, r)))}
            l = r+1
        }
        if (s[r] == '('){open++} 
        else if (s[r] == ')'){
            if (open<=closed){return "Invalid brackets"}
            res = subprob(stack,open,closed)
            if (res===null){return "Division by zero"}
            if (res===false){return "Invalid expression"}
            if (JSON.stringify([res]) === JSON.stringify(stack[open-closed])){b=" Unneccessary brackets"}
            stack[open-closed] = []
            closed++
            stack[open-closed].push(res)
        } else {stack[open-closed].push(s[r])}
    }
    if (l < n){stack[open-closed].push(Number(s.substring(l, r)))}
    if (open-closed>0){return "Invalid brackets"}
    var res = subprob(stack,open,closed)
    if (JSON.stringify([res]) === JSON.stringify(stack[open-closed])){b=" Unneccessary brackets"}
    if (res===null){return "Division by zero"}
    if (res===false){return "Invalid expression"}
    return res+b
}

function inp(){
    s = document.getElementById('i').value
    document.getElementById('p').textContent = calc(s)
}

function isNumberKey(evt) {
    var charCode = evt.which ? evt.which : evt.keyCode;
    if (evt.key === '/' || evt.key === '.'){return true}
    if (charCode===32 || (charCode<=40 && charCode<=43) || (charCode<=45 && charCode<=47)){return true}
    if (charCode > 8 && (charCode < 48 || charCode > 57)) {return false;}
    return true;
  }