// async function hello() {
// }

// const sing = async () => {
//     return 'La La La La';
// }

// sing().then((data) => {
//     console.log('Promise resolved with:', data)
// })

// console.log('------------------------------------------------');

// const singResolveAndRej = async () => {
//     throw 'Oh No Problem!'
//     return 'La La La La';
// }

// singResolveAndRej()
//     .then((data) => {
//         console.log('Promise resolved with:', data)
//     })
//     .catch((err) => {
//         console.log("Oh no, Promise Rejected:", err)
//     })

// console.log('------------------------------------------------');

const login = async (username, password) => {
    if (!username || !password) throw 'Missing Credential'
    if (password === 'horayra') return 'Welcom!'
    throw 'Invalid Password'
}

login('abu', 'horayra')
    .then((msg) => {
        console.log("LOGGED IN!")
        console.log(msg)
    })
    .catch((erre) => {
        console.log('Error!')
        console.log(erre)
    })
