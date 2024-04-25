// function sum() {
//     return arguments.reduce((total, el) => total + el)
// }

// console.log(sum(10, 11, 12, 13, 14, 15)); // It's not work

function sum(...nums) {
    return nums.reduce((total, el) => total + el)
}
console.log(sum(10, 11, 12, 13, 14, 15, 25))
// In this way (Rest params) you can pass unlimited arguments

//--------------------------------------//

function raceResults(gold, silver, ...everyoneElse) {
    console.log(`Gold medal goes to: ${gold}`)
    console.log(`Silver medal goes to: ${silver}`)
    console.log(`And thanks to everyone else: ${everyoneElse}`)
}

const holdValue = raceResults('Tammy', 'Todd', 'Tina', 'Trevor', 'Travis', 'Ruhani')
console.log(holdValue)
