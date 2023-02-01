// function rollDie(numSides) {
//     if (numSides === undefined) {
//         numSides = 6;
//     }
//     return Math.floor(Math.random() * numSides) + 1
// }

// Instead of old checking condition, new javascript use default params(parameter)

function rollDie(numSides = 6) {
    return Math.floor(Math.random() * numSides) + 1
}

console.log(rollDie()) // If not passing any value set default value 6 
console.log(rollDie(20))

// For multi parameter order is an issue
function greetUndefine(msg = "Hey there", person) {
    console.log(`${msg}, ${person}`)
}

greetUndefine('Sadbin'); //undefined, Hey there
greetUndefine('Hello', 'Sadbin');

//------------------------------//
// So for multi parameter always use defauls params from 2nd 
function greet(person, msg = "Hey there", punc = "!") {
    console.log(`${msg}, ${person}${punc}`)
}

greet('Sadbin');
greet('Sadbin', 'How are you', '?');