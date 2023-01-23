// const add = function(x,y){
//     return x + y;
// }

const add = (x, y) => {
    return x + y;
}

console.log(add(7, 5));

const square = (num) => {
    return num * num;
}

console.log(square(9));

const rollDie = () => {
    return Math.floor(Math.random() * 6) + 1;
}

console.log(rollDie());