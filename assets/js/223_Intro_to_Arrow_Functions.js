// function add(x,y){
//     return x+y;
// }

// const add = function(x,y){
//     return x + y;
// }
// This is call function expressions

const add = (x, y) => {
    return x + y;
}

console.log(add(7, 5));

const square = (num) => {
    return num * num;
}

console.log(square(9));

const rollDie = () => {
    return Math.floor(Math.random() * 6) + 1;
}

console.log(rollDie());

// An arrow function will automatically return the value of the last expression in its body if the body contains only one expression. For example:

// const example = (x, y) => x + y;

// This function takes two arguments, x and y, and returns the value of x + y.

// However, if the arrow function's body contains multiple expressions or statements, you need to use return explicitly to return a value. For example:

// const example = (x, y) => {
//     let result;
//     if (x > y) {
//         result = x;
//     } else {
//         result = y;
//     }
//     return result;
// };

// This function takes two arguments, x and y, and returns the larger of the two values.

// It's also worth noting that if you don't return anything the function will return undefined.

// const example = () => {
//     console.log("Hello world!")
// }
// console.log(example()) //Hello world! undefined