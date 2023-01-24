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

// const newMovies = movies.map(function(movie){
//     return `${movie.title} - ${movie.score/10}`
// })

const newMovies = movies.map(movie => (
    `${movie.title} - ${movie.score / 10}`
))

console.log(newMovies);

// in oneline 
const newMoviesUpper = movies.map(movie => `${movie.title.toUpperCase()} - ${movie.score / 10}`)

console.log(newMoviesUpper);