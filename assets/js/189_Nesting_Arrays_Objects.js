// Array inside object
const shoppingCart = [
    {
        product: 'Janga',
        price: 6.88,
        quantity: 1,
    },
    {
        product: 'Echo',
        price: 29.99,
        quentity: 3
    }
]

// Access product: 'Echo'
console.log(shoppingCart[1].product);


const family = [
    {
        relation: 'father',
        name: 'mr. delwar',
        income: 35000
    },
    {
        relation: 'mother',
        name: 'm. nessa',
        income: null
    }
]

console.log(family[0].income);

// Object inside array & object
const student = {
    firstName: 'David',
    lastName: 'Jones',
    strengths: ['Music', 'Art'],
    exams: {
        midterm: 92,
        final: 88
    }
}
// Access strengths: 'Art'
console.log(student.strengths[1]);

// Access exams: final : 88
console.log(student.exams.final);