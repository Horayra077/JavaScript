// const h2 = document.querySelector('h2');
// console.log(h2.getAttribute('class')); // null

// h2.setAttribute('class', 'purple');

// console.log(h2.getAttribute('class')); // purple

// h2.setAttribute('class', 'border');
// // If add another class in same attribute then 1st added class is gone
// console.log(h2.getAttribute('class')); // border

// let currentClasses = h2.getAttribute('class');
// h2.setAttribute('class', `${currentClasses} purple`);
// // This method work but it's annoying

const h2 = document.querySelector('h2')
console.log(h2.classList);

h2.classList.add('purple')
h2.classList.add('border')

// h2.classList.remove('border')

console.log(h2.classList.contains('border')); // true

h2.classList.toggle('purple');
// remove class purple, since already added
h2.classList.toggle('purple');
// add class purple
h2.classList.toggle('purple');
// remove class purple

