const firstImage = document.querySelector('.square');
// Find first element with class square
console.log(firstImage);

const secoundImage = document.querySelector('img:nth-of-type(3)');
// Find 3rd image element of the document
console.log(secoundImage);

const ancorTag = document.querySelector('a[title="Java"]')
// Find first ancor tag with title Java
console.log(ancorTag);


//-------------------------------------------//

const links = document.querySelectorAll('p a');
// All anchor tag under p tag

for (let link of links) {
    console.log(link.href);
}