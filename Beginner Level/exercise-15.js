const options = { 
    year: 'numeric', month: 'numeric', day: 'numeric',
    hour: '2-digit', minute: '2-digit', second: '2-digit'
};

function getCurrentDateTime() {
    var now = new Date();
    var formattedDate = now.toLocaleString('ky-KR', options);
    console.log("Current Date and Time: " + formattedDate);
}

getCurrentDateTime();