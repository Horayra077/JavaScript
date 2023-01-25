// Filter 
// Creates a new array with all elements that pass the test implemented by the provided function 

const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];
const odds = nums.filter(n => { // our callback returns true or false
    return n % 2 === 1;
    // if it return true, n is added to the filtered array
})

console.log(odds);
// [9,7,5,3,1]

const smallNums = nums.filter(n => n < 5);

console.log(smallNums);
// [4,3,2,1]


//-------------------------------------------//

const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    },
    {
        title: '13 Going On 30',
        score: 70,
        year: 2004
    },
    {
        title: 'Stand by Me',
        score: 85,
        year: 1986
    },
    {
        title: 'Waterworld',
        score: 62,
        year: 1995
    },
    {
        title: 'Jingle All The Way',
        score: 71,
        year: 1996
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2019
    },
    {
        title: 'Notting Hill',
        score: 77,
        year: 1999
    },
    {
        title: 'Alien',
        score: 90,
        year: 1979
    }
]


const goodMovies = movies.filter(m => m.score > 80)
console.log(goodMovies);

const goodTitles = goodMovies.map(m => m.title)
console.log(goodTitles);

// In one line
const goodMovieTitle = movies.filter(m => m.score > 80).map(m => m.title);
console.log(goodMovieTitle);


const badMovies = movies.filter(m => m.score < 70);
console.log(badMovies);

const recentMovies = movies.filter(m => m.year > 2000);
console.log(recentMovies);