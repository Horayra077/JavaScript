const h1 = document.querySelector('h1');
console.log(h1.style);
h1.style.color = 'green';
h1.style.border = '2px solid olive';

//----------------------------------//

const allLink = document.querySelectorAll('a');

for (let link of allLink) {
    link.style.color = 'rgb(0,108,134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy';
}

//------------------------------//

console.log(h1.style.fontSize); // ''
// So, In this way result not displayed
// For this insted
console.log(window.getComputedStyle(h1));
console.log(window.getComputedStyle(h1).fontSize);
console.log(window.getComputedStyle(h1).color);
console.log(window.getComputedStyle(h1).fontFamily);