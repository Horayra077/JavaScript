// String 

// let firstName = "Abu";
// let lastName = 'Horayra';


// Indices & Length 

// String are indexed 
// Each character has a corresponding index ( a position number)

// let animal = "Dumbo Octopus";
// animal[0] -> 'D'
// animal[6] -> 'O'

// animal.length -> 13  Total number of character and this is length property
// "lol".length -> 3
// "lol"[0] -> "l"
// "lol" + "lol"  Concatenation
// "lollol"

// let firstName = "Abu";
// let lastName = "Horayra";

// firstName + lastName -> AbuHorayra

// let fullName = firstName + " " + lastName
// firstName -> "Abu Horayra"

let result = 1 + "hi";
// result -> "1hi";
console.log(result);

console.log(typeof result);
// typeof result -> string


// String Method 

let msg = 'Leave me alone';
msg = msg.toUpperCase();
console.log(msg);

console.log('LOT OF LOVE!!'.toLowerCase());


let userInput = '  hello my name is tim  ';
console.log(userInput);
userInput = userInput.trim();
console.log(userInput);

let greeting = '         hello again ';
greeting = greeting.trim().toUpperCase();
console.log(greeting);

// String method with arguments

let holder = "HaHa that is so funny!";
console.log(holder.indexOf('h')); // 6
console.log(holder.indexOf('is')); // 10
console.log(holder.indexOf('$')); // -1
// If not in string then it show (-1) index.
// holder = holder.slice(5);
// console.log(holder);
console.log(holder.slice(5)); //that is so funny!
// console.log(holder);

console.log(holder.slice(5, 9)); // that
console.log(holder.slice(-6)); // funny!
console.log(holder.slice(-6, -1)); // funny

holder = holder.replace('HaHa', 'Lol');
console.log(holder); // Lol that is so funny!

console.log('lol'.repeat(5)); // lollollollollol


// String Template Literals

let product = 'Artichoke';
let price = 3.99;
let qty = 5;

let summary = 'You bought ' + qty + ' ' + product + '. Total is: ' + price * qty;
console.log(summary); // You bought 5 Artichoke. Total is: 19.950000000000003

// Here is some unneccessary ( + ' ' +) staff like plus, quote, space.
// So, There is a better way.

let temp = `I counted ${3 + 4} sheep`; // Useback tick character
console.log(temp); // I counted 7 sheep

summary = `You bought ${qty} ${product}. Total is: $${price * qty}`;
console.log(summary); // You bought 5 Artichoke. Total is: 19.950000000000003

summary = `You bought ${qty} ${product.toLocaleUpperCase()}. Total is: $${price * qty}`;
console.log(summary); // You bought 5 ARTICHOKE. Total is: 19.950000000000003


// Undefined & Null

let undef = 'hello'[99];
console.log(undef); // undefined

let x;
console.log(x); // undefined

let loggedInUser = null;
console.log(loggedInUser); // null


// Random Number & Math Object 

let mathE = Math.E;
console.log(mathE); // 2.718281828459045

let mathPi = Math.PI
console.log(mathPi); // 3.141592653589793

console.log(Math.floor(23.90)); // 23
console.log(Math.ceil(34.1)); // 35
console.log(Math.round(4.9)); // 5
console.log(Math.round(4.4)); // 4

console.log(Math.pow(2, 5)); // 32
console.log(Math.abs(-456)); // 456

console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
// Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive)

// Generate random number between 1 and 10
const step1 = Math.random();
const step2 = Math.random() * 10;
const step3 = Math.floor(Math.random() * 10) + 1;
console.log(step3);

// Generate random number between 20 and 22
const twentyTO22 = Math.floor(Math.random() * 3) + 20;
console.log(twentyTO22);


