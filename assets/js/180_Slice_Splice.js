// Slice
console.log('------------ Slice -------------')
// slice()
// slice(start)
// slice(start, end)

let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
console.log(colors);

let coolColors = colors.slice(3);
console.log(coolColors); // ['green', 'blue', 'indigo', 'violet']

let warmColors = colors.slice(0, 3);
console.log(warmColors); // ['red', 'orange', 'yellow']

let negColors = colors.slice(-2);
console.log(negColors); // ['indigo', 'violet']

// Splice
console.log('------------ Splice -------------')
// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2, itemN)

colors.splice(1, 0, 'red-orange');
console.log(colors); // ['red', 'red-orange', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

colors.splice(3, 0, 'yellow-green', 'forestgreen');
console.log(colors); // ['red', 'red-orange', 'orange', 'yellow-green', 'forestgreen', 'yellow', 'green', 'blue', 'indigo', 'violet']

colors.splice(3, 1, 'penny-green');
console.log(colors); // ['red', 'red-orange', 'yellow', 'penny-green', 'orange', 'forestgreen', 'green', 'blue', 'indigo', 'violet'];


// Sort
console.log('------------ Sort -------------')

let scores = [1, 70, 100, 2500, 9, -12, 0, 34];
scores.sort(); // sort with 1st char
console.log(scores); // [-12, 0, 1, 100, 2500, 34, 70, 9]

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
fruits.sort(); // sort with 1st char
console.log(fruits); // ['Apple', 'Banana', 'Mango', 'Orange']