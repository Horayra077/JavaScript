const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics', 'football', 'music'];

// for (let i = 0; i < subreddits.length; i++) {
//     console.log(`Visit reddit.com/r/${subreddits[i]}`);
// }

for (let sub of subreddits) {
    console.log(`Visit reddit.com/r/${sub}`);
}

const seatingChart = [
    ['shakil', 'sezan', 'zawad'],
    ['nishat', 'titash', 'masum', 'hashikul'],
    ['hridoy', 'alamin', 'mehedi']
]

// for (let i = 0; i < seatingChart.length; i++) {
//     for (let j = 0; j < seatingChart[i].length; j++) {
//         console.log(seatingChart[i][j])
//     }
// }

for (let row of seatingChart) {
    for (let person of row) {
        console.log(person);
    }
}

for (let char of "hello world") {
    console.log(char);
}