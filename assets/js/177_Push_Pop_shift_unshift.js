// Array Method 
// Push - add to end 
// Pop - remove from end 
// shift - remove from start 
// Unshift - add to start 

let movieLine = ['tom', 'nancy'];
console.log(movieLine);

movieLine.push('pablo');
console.log(movieLine);

movieLine.push('oliver', 'eva', 'pele'); // Push will add one or more to the very end of an array
console.log(movieLine);

movieLine.pop(); // No argument needed in Pop method
// Pop remove the one thing at the very end
console.log(movieLine);


movieLine.shift();
console.log(movieLine);

movieLine.unshift('vip');
console.log(movieLine);