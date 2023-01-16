let radius = 8;
if (radius > 0) {
    const PI = 3.14;
    let circ = 2 * PI * radius;
    var circSquer = circ * circ;
}

console.log(radius); // *
console.log(circSquer); // 2524.0576
console.log(PI); //Error PI is not defined
console.log(circ); //Error circ is not defined

// outside curly bracket '{}' let const variable has no access but var variable has access.