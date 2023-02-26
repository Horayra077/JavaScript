// If we use removeChild then go to parent of the target element then apply removeChild

const firstLi = document.querySelector('li');
console.log(firstLi);

const ul = firstLi.parentElement;

console.log(ul);

ul.removeChild(firstLi); // remove frist li element

// Another example

const fisrtb = document.querySelector('b');
console.log(fisrtb);

fisrtb.parentElement.removeChild(fisrtb); // remove first b

// So, this removeChild kind of annoying, instead of removeChild use remove method

const secImg = document.querySelector('img:nth-of-type(2)'); // select 2nd image
console.log(secImg);

secImg.remove() // remove selected image


