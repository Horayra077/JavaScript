const feline = { legs: 4, family: 'Felidae' };
const canine = { isFurry: true, family: 'Caninae' }

const catDog = { ...feline, ...canine } // combine object
// but there is a conflict both object has same key (family)
// so the last key valu will win and added to the new object

console.log(catDog);

const catDog2 = { ...feline, ...canine, family: 'steele' } // add new key value
console.log(catDog2);

const arraySep = { ...[2, 4, 6, 8] } // array seperate with object structure {0: 2, 1: 4, 2: 6, 3: 8}
console.log(arraySep);
const strSep = { ...'HIII' }
console.log(strSep);


//-----------------//

const dataFromForm = {
    email: 'mrfox@fmail.com',
    password: 'fox2123',
    username: 'mrfox'
}

const newUser = { ...dataFromForm, id: 2345, isAdmin: false }

console.log(dataFromForm);
console.log(newUser);