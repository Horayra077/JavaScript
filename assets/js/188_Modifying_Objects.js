const midterms = { danielle: 96, thomas: 78 } // Declear
console.log(midterms);

midterms.danielle = 'A'; // Update value
midterms["thomas"] = 'C+'; // Update value
console.log(midterms);

midterms.ezra = 'B+'; // Add new key & value
midterms['antonio'] = 'A-'; // Add new key & value
console.log(midterms);



const person = {
    personName: 'abu',
    age: 20,
    results: [['ssc', 'hsc', 'bsc', 'msc'], ['A', 'A', 3.21, null]],
    results2: {
        ssc: 'A',
        hsc: 'A',
        bsc: 3.21,
        msc: null
    }
}

console.log(person);
console.log(person.personName);
console.log(person.age);
console.log(`${person.results[0][1]}: ${person.results[1][1]}`);

console.log(`hsc: ${person.results2.hsc}`);

person.results2.msc = 3.96;
console.log(`msc: ${person.results2.msc}`);

