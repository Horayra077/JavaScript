const allImages = document.getElementsByTagName('img');
for (let img of allImages) {
    console.log(img.src)
}

console.dir(allImages[1])

const allParagraph = document.getElementsByTagName('p');

console.dir(allImages);


//-----------------------------------------//

const squareImages = document.getElementsByClassName('square');
console.dir(squareImages);
for (let img of squareImages) {
    img.alt = "Chicken";
    img.title = "I'm chicken";
}