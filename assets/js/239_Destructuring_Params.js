const user = {
    email: 'horayra5@gmail.com',
    password: '12345',
    firsrName: 'Abu',
    lastName: 'Horayra',
    born: '1996',
    city: 'Gopalgonj',
    state: 'Dhaka',
    bio: 'Lorem ipsam nan navknakv anvaknv  aknvka anvkalv kanvlkaa akvnla'
}

// function fullName(user) {
//     return `${user.firsrName} ${user.lastName}`
// }

// console.log(fullName(user))



function fullName(user) {
    const { firsrName, lastName } = user;
    return `${firsrName} ${lastName}`
}
console.log(fullName(user))

function fullName({ firsrName, lastName }) {
    return `${firsrName} ${lastName}`
}

console.log(fullName(user))

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

// const bestMovie = movies.filter((movie) => movie.score >= 90)
// console.log(bestMovie)

const bestMovie = movies.filter(({ score }) => score >= 90)
console.log(bestMovie)




//----------------------------------------//


// const movieDesc = movies.map(movie => {
//     return `${movie.title} (${movie.year}) is rated ${movie.score}`
// })
// console.log(movieDesc)


const movieDesc = movies.map(({ title, year, score }) => {
    return `${title} (${year}) is rated ${score}`
})
console.log(movieDesc)

