const multiply = (x, y) => x * y;

const square = x => multiply(x, x);

const isRightTriangle = (a, b, c) => {
    return square(a) + square(b) === square(c);
}


console.log(isRightTriangle(3, 4, 5));


console.log('-----------------------');


const isPrime = (x) => {
    return countPrime(x);
}
const countPrime = x => {
    let count = 0;
    for (let i = 1; i <= x; i++) {
        if (x % i == 0) {
            count++;
        }
    }

    return checkPrime(count);
}

const checkPrime = x => {

    if (x == 2) {
        return true;
    } else {
        return false;
    }

}

console.log(isPrime(14));
