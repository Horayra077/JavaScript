for (let i = 1; i <= 10; i++) {
    console.log(`i is: ${i}`)
    for (let j = 1; j < 4; j++) {
        console.log(`        j is: ${j}`)
    }
}

const seatingChart = [
    ['shakil', 'sezan', 'zawad'],
    ['nishat', 'titash', 'masum', 'hashikul'],
    ['hridoy', 'alamin', 'mehedi']
]

for (let i = 0; i < seatingChart.length; i++) {
    for (let j = 0; j < seatingChart[i].length; j++) {
        console.log(seatingChart[i][j])
    }
}
