function greet(firstName, lastName) {
    console.log(`Hey there, ${firstName[0]}. ${lastName}`)
}

greet('Rajia', 'Mina');

function repeat(str, numTimes) {
    let result = '';
    for (let i = 0; i < numTimes; i++) {
        result += str;
    }
    console.log(result);
}

repeat("Hi Mina ", 5);