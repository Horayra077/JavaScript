// function collectEggs() {
//     let totalEggs = 6;
// }
// collectEggs();
// console.log(totalEggs); 

// Uncaught ReferenceError: totalEggs is not defined 

//------------------------//

let totalEggs = 0;
function collectEggs() {
    totalEggs = 6;
}
console.log(totalEggs);  //0
collectEggs();
console.log(totalEggs); //6

//------------------------//

let bird = 'Scarlet Macaw';
function birdWatch() {
    let bird = 'Great Blue Heron';
}

birdWatch()
console.log(bird); // Scarlet Macaw

//------------------------//

let bestPlayer = 'Leo Messi';
function goat() {
    let bestPlayer = 'Diego Maradona';
    console.log(bestPlayer);  // Diego Maradona
}

goat();
