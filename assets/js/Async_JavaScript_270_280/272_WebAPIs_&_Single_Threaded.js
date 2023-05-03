console.log("Sending request to server!")
setTimeout(function () {
    console.log("Here is your data from the server...")
}, 3000)
console.log("I AM AT THE END OF THE FILE")


// In JavaScript, the code is executed one line at a time, from top to bottom.
// The given code starts by executing the first line which logs "Sending request to server!" to the console.
// Then, the code executes the `setTimeout()` function which waits for 3 seconds before executing the function passed as its argument, which logs "Here is your data from the server..." to the console.
// However, during the 3-second wait, the code does not stop executing and moves on to the next line which logs "I AM AT THE END OF THE FILE".
// The web browser takes care of the waiting period, and once the 3 seconds have elapsed, it returns control to JavaScript which executes the function passed to `setTimeout()`.