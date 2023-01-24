// const isEven = function(num){ // regular function expression
//     return num % 2 === 0;
// }

// const isEven = (num) => { // arrow function with parens around param
//     return num % 2 === 0;
// }

// const isEven = num => { //no parens around param
//     return num % 2 === 0;
// }

const isEven = num => ( // implicit return
    num % 2 === 0
)

const isOdd = num => num % 2 === 1; // one-liner implicit return

console.log('isEven: 13 ' + isEven(13));
console.log('isOdd: 18 ' + isOdd(18));

//--------------------------//

const rollDie = () => Math.floor(Math.random() * 6) + 1;

console.log('rollDie: ' + rollDie());
