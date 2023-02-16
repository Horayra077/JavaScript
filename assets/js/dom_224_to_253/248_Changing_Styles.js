const h1 = document.querySelector('h1');
console.log(h1.style);
h1.style.color = 'green';
h1.style.fontSize = '3em';
h1.style.border = '2px solid olive';

//----------------------------------//

const allLink = document.querySelectorAll('a');

for (let link of allLink) {
    link.style.color = 'rgb(0,108,134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy';
}
