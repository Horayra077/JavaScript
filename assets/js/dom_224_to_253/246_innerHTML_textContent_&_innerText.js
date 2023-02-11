const firstPara = document.querySelector('p').innerText;
console.log(firstPara);

// document.querySelector('p').innerText = 'lorem ipsam';
// Change 1st p tag innner text

const allLinks = document.querySelectorAll('p a');
for (let link of allLinks) {
    link.innerText = 'I AM A LINK!'
    // Change All anchor tag inside p tag
}

//----------------------------------------------//

const bolds = document.querySelectorAll('p b');
for (let bold of bolds) {
    bold.style.display = 'none';
}
// Display none in all bold tag inside p tag

const firstParaRevisit = document.querySelector('p').innerText;
console.log(firstParaRevisit);
// So, if I use innerText method then display none or any hide elements  are not visible
// In this case use textContent method and It's display all text

const firstParaContent = document.querySelector('p').textContent;
console.log(firstParaContent);

//----------------------------------//

document.querySelector('h1').innerText = '<i>aavnavnj</i>';
// So, innerText treat as a string not work as html 
// In this case use innerHTML
document.querySelector('h1').innerHTML = '<i>aavnavnj</i>';
document.querySelector('h1').innerHTML += '<sup>afsk</sup>'; 