function add(x, y) {
    console.log(x + y);
}

const sum = add(10, 16);
console.log(sum); // Undefined

// So, In this why use return 

function addition(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return false;
    }
    return x + y;
}

const result = addition(9, 6);
// const result = addition(addition(7, 4), 6);
console.log(result);

// returen execute only single time in a function
// after return (if have code) not work any code, like break