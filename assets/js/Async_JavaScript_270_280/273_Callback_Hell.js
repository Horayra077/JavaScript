// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
// }, 1000)

// setTimeout(() => {
//     document.body.style.backgroundColor = 'orange';
// }, 2000)

// setTimeout(() => {
//     document.body.style.backgroundColor = 'yellow';
// }, 3000)

// setTimeout(() => {
//     document.body.style.backgroundColor = 'green';
// }, 4000)

// setTimeout(() => {
//     document.body.style.backgroundColor = 'blue';
// }, 5000)

//------------------ Same thing ----------------//

// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'orange';
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'yellow';
//             setTimeout(() => {
//                 document.body.style.backgroundColor = 'green';
//                 setTimeout(() => {
//                     document.body.style.backgroundColor = 'blue';
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)

//------------------ Same thing but callback ----------------//


const delayColorChange = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext();
    }, delay);

}

delayColorChange('red', 1000, () => {
    delayColorChange('orange', 1000, () => {
        delayColorChange('yello', 1000, () => {
            delayColorChange('green', 1000, () => {
                delayColorChange('blue', 1000, () => {

                })
            })
        })
    })
});

// -------------- callback example (fake) ------------- //

searchMoviesAPI('amadeus', () => {
    saveToMyDB(movies, () => {
        // if it works, run this:
    }, () => {
        // if it doesn't work, run this:
    })
}, () => {
    // if API is down, or request failed
})