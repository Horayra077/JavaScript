for (let i = 1; i <= 10; i++) {
    console.log(i)
}

// Even number 1-20
for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}
// Odd number 1-20
for (let i = 1; i <= 20; i++) {
    if (i % 2 == 1) {
        console.log(i);
    }
}

// Count down 100, 90, 80, 70....00

for (let i = 100; i >= 0; i = i - 10) {
    console.log(i);
}