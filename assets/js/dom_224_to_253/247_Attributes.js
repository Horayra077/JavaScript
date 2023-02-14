const idName = document.querySelector('#banner').id;
console.log(idName);
const newIdName = document.querySelector('#banner').id = 'opps';
console.log(newIdName);
document.querySelector('#opps').id = 'banner';

// Way of the change attribute (id) 

const aTagHref = document.querySelector('a').href; // 1st a tag href select
console.log(aTagHref);
const aTag = document.querySelector('a');
console.log(aTag.title);

// There is another way to do this
console.log(aTag.getAttribute('href'));
console.log(aTag.getAttribute('title'));

aTag.setAttribute('href', 'https://www.google.com');
console.log(aTag.getAttribute('href'));

//------------------------//

// const inputTag = document.querySelectorAll('input')[1]; // Select 2nd input tag
const inputTag = document.querySelector('input[type="text"]');
console.log(inputTag.type);
inputTag.type = 'color';
inputTag.setAttribute('type', 'password');


