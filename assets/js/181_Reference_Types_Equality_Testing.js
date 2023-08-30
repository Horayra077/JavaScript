console.log('hi' === 'hi'); // It's true
console.log(['hi', 'bye'] === ['hi', 'bye']); // It's also false,
// because in array, javascript does not care what inside of array
console.log([1] === [1]);
console.log([1] == [1]);
console.log([] == []);

// In array, javascript compair with their address number (Reference memory)

let nums = [1, 2, 3];
let numCopy = nums;
console.log(numCopy);

nums.push(4);
console.log(nums);
console.log(numCopy);

numCopy.pop();
console.log(nums);
console.log(numCopy);

console.log(nums === numCopy); // It's true
// Since nums & numCopy Reference memory same so they are same


