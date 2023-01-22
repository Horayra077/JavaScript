// map is similar to forEach
// map is callback (return) on every element and creat a new array

const texts = ['shakil', 'zawad', 'sezan'];
const caps = texts.map(function (text) {
    return text.toUpperCase();
})

console.log(texts);
console.log(caps);


//------------------------------------//

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const square = numbers.map(function (num) {
    return num * num;
})

console.log(numbers);
console.log(square);


//--------------------------------------------//

const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand by Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    }
]

const titles = movies.map(function (movie) {
    return movie.title.toUpperCase();
})

console.log(titles);