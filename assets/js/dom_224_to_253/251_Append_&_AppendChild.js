// appendChild
const newImg = document.createElement('img');
// Create an empty img element
newImg.src = 'https://plus.unsplash.com/premium_photo-1664527009220-c6b203ecfc1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80';
// Add src in new create img
document.body.appendChild(newImg);
// append 'new create img' last child of the body
newImg.classList.add('square');
// Add class in 'new create img'

//------------------------------------//
const newH3 = document.createElement('h3')
newH3.innerText = 'I am another checken!';
document.body.appendChild(newH3);

//-----------------------------//
// append
// The Element.append() method inserts a set of Node objects or string objects after the last child of the Element. 
const fristP = document.querySelector('p');
fristP.append('i am new text yaaaaaaaaaaaaayyy!!!');
fristP.append('i am new text yaaaaaaaaaaaaayyy!!!', 'another text added');

//---------------------------//
// prepend
// The Element.prepend() method inserts a set of Node objects or string objects before the first child of the Element. 
const newB = document.createElement('b');
newB.append('Hi! '); // same as innerText
// newB.innerText = 'Hi! '; 
fristP.prepend(newB);

//----------------------------//
// insertAdjacentElement
// The insertAdjacentElement() method of the Element interface inserts a given element node at a given position relative to the element it is invoked upon.
const createH2 = document.createElement('h2');
createH2.append('Are adorable chickens');

const firstH1 = document.querySelector('h1');

firstH1.insertAdjacentElement('afterend', createH2);

//-----------------------------//
// after
const createH3 = document.createElement('h3');
createH3.innerText = 'The Silkie is a breed of chicken named for its atypically fluffy plumage, which is said to feel like silk and satin.';
createH2.after(createH3);




