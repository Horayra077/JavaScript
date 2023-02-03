console.log(Math.max(12, 158, 487, 54, 3, 599)) //599
console.log(Math.min(2, 5, 1)) //1

const nums = [12, 158, 487, 54, 3, 599];
console.log(nums);
console.log(Math.max(nums)) //NaN
// for solving this issue , use ... three dot
console.log(Math.max(...nums)) //599
console.log(Math.min(...nums)) //3
console.log(...nums) // array print separately
console.log(...'hello world')
