const input = document.querySelector('input');
const h1 = document.querySelector('h1');

// input.addEventListener('change', function (e) {
//     console.log('Connected');
// })

// change event occure when type something and then click out side of input

input.addEventListener('input', function (e) {
    h1.innerText = input.value;
})

// input event occure when type something or copy past something