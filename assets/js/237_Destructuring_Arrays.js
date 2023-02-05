const score = [929, 899, 888, 772, 543, 243, 111]

const highScore = score[0];
console.log(highScore); //929

const secoundHighScore = score[1];
console.log(secoundHighScore); //899

console.log('/------------------------------/')


// Destructuring an array is a feature in JavaScript 
// that allows you to extract individual elements from an array 
// and assign them to variables.

const [gold, silve, bronze] = score;
console.log(gold); //929
console.log(silve); //899
console.log(bronze); //888

console.log('/------------------------------/')

const [first, secound, third, ...everyoneElse] = score;
console.log(first); //929
console.log(secound); //899
console.log(third); //888
console.log(everyoneElse); // [772, 543, 243, 111]
