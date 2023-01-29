let numArray = [3, 5, 7, 9, 11];
const arrayTotal = numArray.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
})

// At the very beginning accunulator = 3, currentValue = 5
// Then return 3 + 5 = 8;
// In 2nd iteration accunulator = 8, currentValue = 7
// Then return 8 + 7;

console.log(arrayTotal);

//------------------------------------------//

const prices = [9.99, 1.5, 19.99, 49.99, 30.5];

const total = prices.reduce((total, price) => {
    return total + price;
})

// Or
// const total = prices.reduce((total, price) => total + price)
console.log(total);

//------------------------------------------//

const minPrice = prices.reduce((min, price) => {
    if (min < price) {
        return min;
    }
    return price;
})

console.log(minPrice);

//------------------------------------------//

const maxPrice = prices.reduce((max, price) => {
    if (max > price) {
        return max;
    }
    return price;
})

console.log(maxPrice);

//------------------------------------------//

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


const bestMovieInfo = movies.reduce((bestMove, currMovie) => {
    if (currMovie.score > bestMove.score) {
        return currMovie;
    }

    return bestMove;
})

console.log(bestMovieInfo);

//------------------------------------------//

// It's can predefine starting point

const evens = [2, 4, 6, 8];
const totalSum = evens.reduce((sum, num) => {
    return sum + num
}, 101)
//In this time At the very beginning sum = 101, num = 2
// Then return 101 + 2 = 3;
// In 2nd iteration sum = 103, num = 4
// Then return 103 + 4;
console.log(totalSum);