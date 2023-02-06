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

// const firsrName = user.firsrName;
// const lastName = user.lastName;
// const email = user.email;
// console.log(`${user.firsrName} ${user.lastName}`)

// Instead of this multiple line, it can do a single line { Using same variable name }

const { email, firsrName, lastName, city } = user;

console.log(`${firsrName} ${lastName}`)

// Or Using new variable name using colon :
const { born: birthYear, bio: biogrphy } = user;

console.log(`${birthYear} ${biogrphy}`)

// And we can assign fallback or default value using an equal sign
const { born: birthDate, died: deathYear = 'N/A' } = user;

console.log(`${birthDate} ${deathYear}`)