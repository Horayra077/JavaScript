// Concat method
let cats = ['blue', 'kitty'];
let dogs = ['rusty', 'wyatt'];

let pets = cats.concat(dogs);
console.log(pets);

// Include boolean method return true or false
console.log(cats.includes('blue'));
console.log(cats.includes('Blue'));

// Indexof 

console.log(pets.indexOf('wyatt'));
console.log(pets.indexOf('aavhabvkja')); // If value does not exist in array then it returns -1

// reverse
pets.reverse();  // It's destructive to the original
console.log(pets);