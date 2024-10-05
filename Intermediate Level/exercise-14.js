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
    console.log("Function executed at " + new Date().toLocaleTimeString());
}

const throttledLog = throttle(logMessage, 2000);

setInterval(throttledLog, 500);