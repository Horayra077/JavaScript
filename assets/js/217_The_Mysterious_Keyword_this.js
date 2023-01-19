const cat = {
    name: 'Blue Steele',
    color: 'grey',
    breed: 'scottish fold',
    meow() {
        console.log(`${this.name} says MEOWWW`);
    }
}

console.log(cat.meow);
console.log(cat.meow());

console.log("*------------------   -----------------*");

const cow = {
    name: 'ronaldo',
    color: 'black',
    breed: 'portugues',
    hamba() {
        console.log("This is:", this);
        console.log(`${this.name} says Hamba`);
    }
}

const cow2 = cow.hamba;

console.log(cow2);
console.log(cow2());
console.log(cow.hamba());