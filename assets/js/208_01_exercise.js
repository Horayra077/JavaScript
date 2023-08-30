function capitalize(str) {
    let newStr = str.toLowerCase();
    let finalStr = newStr.replace(newStr[0], newStr[0].toUpperCase());
    return finalStr;
}

// const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
// console.log(p.replace('dog', 'monkey'));

console.log(capitalize('eggplant'));
console.log(capitalize('pamplemousse'));
console.log(capitalize('squid'));
console.log(capitalize('ABUHORAYRA'));


console.log('/---------------------***------------------/');

function returnDay(day) {
    if (day === 1) {
        return 'Monday';
    } else if (day === 2) {
        return 'Tuesday';
    } else if (day === 3) {
        return 'Wednesday';
    } else if (day === 4) {
        return 'Thursday';
    } else if (day === 5) {
        return 'Friday';
    } else if (day === 6) {
        return 'Saturday';
    } else if (day === 7) {
        return 'Sunday';
    } else {
        return null;
    }
}

console.log(returnDay(1));
console.log(returnDay(7));
console.log(returnDay(4));
console.log(returnDay(0));


console.log('/---------------------***------------------/');

function isShortsWeather(temperature) {
    if (temperature >= 75) {
        return true;
    }
    return false;
}

console.log(isShortsWeather(80));
console.log(isShortsWeather(48));
console.log(isShortsWeather(75));

console.log('/---------------------***------------------/');

function lastElement(singleArray) {
    let numbrLenght = singleArray.length;
    return singleArray[numbrLenght - 1];
}

console.log(lastElement([3, 5, 7])); //7
console.log(lastElement([1])); //1
console.log(lastElement([])); //null

console.log('/---------------------***------------------/');

function multiply(x, y) {
    return x * y;
}

console.log(multiply(2, 3)); // 6
console.log(multiply(9, 9)); // 81
console.log(multiply(5, 4)); // 20

console.log('/---------------------***------------------/');

function sumArray(arrayAccept) {
    let sum = 0;
    for (let i = 0; i < arrayAccept.length; i++) {
        sum = sum + arrayAccept[i];
    }
    return sum;
}

console.log(sumArray([1, 2, 3])); // 6
console.log(sumArray([2, 2, 2, 2])); // 8
console.log(sumArray([50, 50, 1])); // 101