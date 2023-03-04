const btn = document.querySelector('#v2');

// console.dir(btn);

btn.onclick = function () {
    console.log("You clicked me!")
    console.log("I hope it worked!")
}

function scream() {
    console.log("AAAAAHHHHH");
    console.log("Stop touching me!");
}

btn.onmouseenter = scream;

document.querySelector('h1').onclick = () => {
    alert('you clicked the h1!');
}