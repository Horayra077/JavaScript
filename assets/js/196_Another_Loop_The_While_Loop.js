let count = 0;
while (count < 10) {
    console.log(count);
    count++;
}

const secret = "Horayra07";

let inputUser = prompt("Input Secret ...");
while (secret !== inputUser) {
    inputUser = prompt("Input Correct secret ...");
}

console.log("Success!");
alert("Seccess!");