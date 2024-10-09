// const pattern2 = /^[A-Za-z0-9]+([.-_][A-Za-z0-9]+)?@[A-Za-z0-9]+(-[A-Za-z0-9]+)?(\.[A-Za-z0-9]+)+$/i;
const pattern = /^[A-Za-z0-9]+([.-_][A-Za-z0-9]+)?@[A-Za-z0-9]+(-[A-Za-z0-9]+)?\.[A-Za-z0-9]{2,}$/;
const src = "https://help.xmatters.com/ondemand/trial/valid_email_format.htm"
function is_valid_email(s){
    if (typeof(s)!="string"){
        return "Function takes only string"
    }
    return pattern.test(s) ? "Email is valid" : "Email is not valid"
}

// console.log(is_valid_email("ab.bb@a.cc"))
// console.log(is_valid_email("rfs@gmail"))
function inp(){
    email = document.getElementById('i').value

    var resultParagraph = document.querySelector('.result');
    
    if (!resultParagraph) {
        resultParagraph = document.createElement('p');
        resultParagraph.classList.add('result');
        document.body.appendChild(resultParagraph);
    }
    resultParagraph.innerHTML = is_valid_email(email)+"<br>"+"rules for email are taken from "+"<br>"+src;
}