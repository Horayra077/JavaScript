// Slice

// slice()
// slice(start)
// slice(start, end)

let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
console.log(colors);

let coolColors = colors.slice(3);
console.log(coolColors);

let warmColors = colors.slice(0, 3);
console.log(warmColors);

let negColors = colors.slice(-2); // Last two
console.log(negColors);

// Splice

// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2, itemN)

colors.splice(1, 0, 'red-orange');
console.log(colors);

colors.splice(3, 0, 'yellow-green', 'forestgreen');
console.log(colors);

colors.splice(3, 1, 'penny-green');
console.log(colors);


// Sort
let scores = [1, 70, 100, 2500, 9, -12, 0, 34];
scores.sort(); // sort with 1st char
console.log(scores);