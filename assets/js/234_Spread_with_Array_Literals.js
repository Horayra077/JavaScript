const cats = ['Blue', 'Scout', 'Rocket'];
const dogs = ['Rusty', 'Wyatt'];

const allCats = [...cats] // make a new copy of array

console.log(cats);
console.log(allCats);

const allPets = [...cats, ...dogs]; // combine array ['Blue', 'Scout', 'Rocket', 'Rusty', 'Wyatt']
console.log(allPets);

const allPets2 = [...cats, ...dogs, 'burkman']; // combine array and add new element ['Blue', 'Scout', 'Rocket', 'Rusty', 'Wyatt', 'burkman']
console.log(allPets2);

const str = [...'hello']; // It also work on string
console.log(str); // [ 'h', 'e', 'l', 'l', 'o' ]
