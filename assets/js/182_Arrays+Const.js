// In const array you can push or pop (update delete value) inside array

const nums = [1, 2, 3];
console.log(nums);
nums.push(4);
console.log(nums);

nums = 1; // It's an error
// But you cann't reassign ( like nums = 1; or nums = [1, 2, 3, 4]; )
// Because const array reference value not modifiable
console.log(nums);

// nums = [1, 2, 3, 4];  // It's an error
// console.log(nums);
