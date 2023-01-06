let input = prompt("Hey, say something!");
while (true) {

    if (input.toLocaleLowerCase() === "horayra") {
        break;
    }
    input = prompt(input);
}
console.log("OK YOU WIN")