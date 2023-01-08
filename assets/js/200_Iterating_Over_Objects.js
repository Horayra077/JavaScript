const testScore = {
    keenan: 80,
    damon: 67,
    kim: 89,
    shawn: 91,
    marlon: 72,
    dwayne: 77,
    nadia: 83,
    elvira: 97,
    diedre: 81,
    vonnie: 60
}

// Not Working
// for (let person of testScore) {
//     console.log(person);  //Uncaught TypeError: testScore is not iterable
// }

// Object are not iterable in a common away
// Object s are not iterable unless they implement the iterable protocol.

// One Option is 
for (let person in testScore) {
    console.log(`${person}: ${testScore[person]}`);
}


console.log(Object.keys(testScore));
//The Object.keys() static method returns an array of a given object's own enumerable string-keyed property names.
console.log(Object.values(testScore));
//The Object.values() static method returns an array of a given object's own enumerable string-keyed property values.
console.log(Object.entries(testScore));
//The Object.entries() static method returns an array of a given object's own enumerable string-keyed property key-value pairs.

for (let score of Object.values(testScore)) {
    console.log(score);
}

// Average score
let totalScore = 0;
let totalNumber = Object.values(testScore);

for (let score of Object.values(testScore)) {
    totalScore = totalScore + score;
}

console.log(`Average score: ${totalScore / totalNumber.length}`);