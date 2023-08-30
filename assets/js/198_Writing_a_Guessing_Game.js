// parseInt('asdad');
// ->NaN 
// parseInt('213');
// ->213
// parseInt('213csan');
// ->213

let maximum = parseInt(prompt("Enter the maximum number!"));
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));
}

// If some one enter string as a maximum number,
// Then the input cannot be converted to an integer, parseInt returns NaN
// So 'while(!maximum)' will be true 
// And loop will continue executing as long as maximum is evaluated as false 

const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = parseInt(prompt("Enter your first guess!"));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    attempts++;
    if (guess > targetNum) {
        guess = prompt("Too high! Enter a new guess:");
    } else {
        guess = prompt("Too low! Enter a new guess:");
    }
}

if (guess === 'q') {
    console.log("OK, You Quit!");
} else {
    console.log("Congrats you win");
    console.log(`You got it! It took you ${attempts} guesses`)
}