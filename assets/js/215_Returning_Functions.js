function makeMysteryFunc() {
    const rand = Math.random();
    if (rand > 0.5) {
        return function () {
            console.log("Congrats, You win a million dollars!!")
        }
    } else {
        return function () {
            console.log('You have been infected by a computer virous!');
            // alert('You have been infected by a computer virous!');
        }
    }
}

const mystery = makeMysteryFunc();
console.log(mystery);
mystery();

console.log('');
console.log('/*----------------    ----------------*/');
console.log('');

function makeBetweenFunc(min, max) {
    return function (num) {
        return num >= min && num <= max;
    }
}

const isChild = makeBetweenFunc(0, 18);
console.log(isChild);
console.log(isChild(7));