let input = prompt("Hey, say something!");
while (true) {

    if (input.toLocaleLowerCase() === "horayra") {
        break;
    }
    input = prompt(input);
    // input = prompt("Hey, say something!");
}
console.log("OK YOU WIN")