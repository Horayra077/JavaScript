// parentElement
const firstBold = document.querySelector('b');
console.log(firstBold);

console.log(firstBold.parentElement);

console.log(firstBold.parentElement.parentElement);

console.log(firstBold.parentElement.parentElement.parentElement);

// childElementCount, children
const fristParagraph = document.querySelector('p');
console.log(fristParagraph);

console.log(fristParagraph.childElementCount); // 8

console.log(fristParagraph.children);
console.log(fristParagraph.children[0]);
console.log(fristParagraph.children[0].parentElement); // back to same element

// nextElementSibling, previousElementSibling
const squareImg = document.querySelector('.square');
console.log(squareImg);

console.log(squareImg.nextElementSibling);
console.log(squareImg.previousElementSibling);