let randNumber = Math.floor(Math.random() * 10) + 1;
if (randNumber < 5) {
    console.log("Number is less than five!!")
    console.log(randNumber);
}

if (randNumber >= 5) {
    console.log("Number is greater than or equal five!!")
    console.log(randNumber);
}

console.log("-------------- ***-------------");

const dayOfWeek = 'Saturday';

if (dayOfWeek === 'Monday') {
    console.log("Ughh I hate Monday!")
} else if (dayOfWeek === 'Saturday') {
    console.log("Yay I love Saturday!")
} else if (dayOfWeek === 'Friday') {
    console.log("Friday are decent, especially after work!")
}


const age = 8;

if (age < 5) {
    console.log("You are a baby. You get in for free!")
} else if (age < 10) {
    console.log("You are a child. You pay $10")
} else if (age < 65) {
    console.log("You are a adult. You pay $20")
}

console.log("-------------- ***-------------");

const age2 = 70;

if (age2 < 5) {
    console.log("You are a baby. You get in for free!")
} else if (age2 < 10) {
    console.log("You are a child. You pay $10")
} else if (age2 < 65) {
    console.log("You are a adult. You pay $20")
} else {
    console.log("You are a senior. You pay $10")
}