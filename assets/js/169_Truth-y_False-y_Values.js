// Truthy and false value 
// All JS values have an inherent truthyness or falseness about them
// Falsy values:
// 1. false
// 2. 0
// 3. "" (empty string)
// 4. null
// 5. undefined
// 6. NaN 
// Everything else is truthy!

// const userInput = prompt("Enter something!");
const userInput = "";

if (userInput) {
    console.log("TRUTHY!")
} else {
    console.log("FALSY!")
}

console.log("------------ ** ------------");

if (0) {
    console.log("TRUTHY!")
} else {
    console.log("FALSY!")
}

console.log("------------ ** ------------");

if (false) {
    console.log("TRUTHY!")
} else {
    console.log("FALSY!")
}

console.log("------------ ** ------------");

if (null) {
    console.log("TRUTHY!")
} else {
    console.log("FALSY!")
}

console.log("------------ ** ------------");

if (1151) {
    console.log("TRUTHY!")
} else {
    console.log("FALSY!")
}