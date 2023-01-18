// Method
// We can add functions as properties on objects.
// We call them methods!

const myMath = {
    pi: 3.1416,
    multiply: function (x, y) {
        return x * y;
    },
    divide: function (x, y) {
        return x / y;
    },
    square: function (x) {
        return x * x;
    }
}

console.log(myMath);
console.log(myMath.pi);
console.log(myMath.multiply);
console.log(myMath.multiply(4, 3));
console.log(myMath.square);
console.log(myMath.square(4));

// So, every method is a function, but not every function is a method.