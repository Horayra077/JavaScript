const person = { firstName: 'Mick', lastName: 'Jagger' }

const kitchenSink = {
    favNum: 92319023,
    isFunny: true,
    colors: ['red', 'orange']
}

console.log(person);
console.log(kitchenSink);

// Accessing data of object in two way
// person["lastName"]
console.log(person["lastName"]);
console.log(kitchenSink["colors"]);

// OR 
// person.lastName
console.log(person.lastName);
console.log(kitchenSink.colors);

// All keys are converted to strings
const years = { 1999: 'GOOD', 2020: 'BAD' }
// years["1999"]
console.log("years['1999'] = " + years["1999"]);
console.log("years['2020'] = " + years["2020"]);

let birthyear = 2020;
console.log(years[birthyear]);
console.log(birthyear);
console.log(years.birthyear); // Undefine

