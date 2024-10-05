function Number2String(n){
    if (typeof(n)!="number"){
        console.log("Function takes only number")
        return false
    }
    return `${n}`
}

var ns = Number2String(-1.6)
if (ns!=false){
    console.log(`Type of new string "${ns}" is ${typeof(ns)}`)
}
