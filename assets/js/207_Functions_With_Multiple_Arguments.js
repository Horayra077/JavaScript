function greet(firstName, lastName) {
    console.log(`Hey there, ${firstName[0]}. ${lastName}`)
}

greet('Abu', 'Horayra');

function repeat(str, numTimes) {
    let result = '';
    for (let i = 0; i < numTimes; i++) {
        result += str;
        // result = result + str;
    }
    console.log(result);
}

repeat("Hi Horayra ", 5);