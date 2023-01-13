function capitalize(str) {
    let newStr = str.toLowerCase();
    let finalStr = newStr.replace(newStr[0], newStr[0].toUpperCase());
    console.log(finalStr);
}

capitalize('eggplant');
capitalize('pamplemousse');
capitalize('squid');
capitalize('ABUHORAYRA');


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
