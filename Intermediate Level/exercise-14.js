// function throttle(func, delay) {
//     let lastCall = 0;

//     return function(...args) {
//         const now = new Date().getTime();

//         if (now - lastCall >= delay) {
//             lastCall = now;
//             func.apply(this, args);
//         }
//     };
// }

// function logMessage() {
//     console.log("Function executed at " + new Date().toLocaleTimeString());
// }

// const throttledLog = throttle(logMessage, 2000);

// setInterval(throttledLog, 500);

function throttle(func, delay) {
    let lastCall = 0;

    return function(...args) {
        const now = new Date().getTime();

        if (now - lastCall >= delay) {
            lastCall = now;
            func.apply(this, args);
        }
    };
}

function logMessage() {
    const message = "Function executed at " + new Date().toLocaleTimeString() + "<br>";
    document.getElementById('log').innerHTML += message;
}

const throttledLog = throttle(logMessage, 2400);

// Start logging automatically after window loads
window.onload = function() {
    setInterval(throttledLog, 1500);  // Throttled function will be triggered every 500ms but executed every 2s
};
