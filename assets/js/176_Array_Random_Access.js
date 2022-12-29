// To make an empty array
let students = [];

// An array of strings
let colors = ['rad', 'orange', 'yelloww'];

// An array of numbers
let lottoNums = [19, 22, 56, 12, 51];

//A mixed array
let stuff = [true, 68, 'cat', null];

console.log(colors[2]); //It's print colors array index 2 value
// 'yellow'
console.log(colors[2][1]); //It's print colors array index 2 values 2nd index
// 'e'

console.log(colors); // Before array modifying

colors[0] = 'red'; // Change array index value
colors[2] = 'yellow'; // Change array index value

console.log(colors); // After array modifying

colors[11] = 'purple'; // I can added value in any index of array 

console.log(colors); // After array modifying
console.log(colors[11]);
console.log(colors.length); 