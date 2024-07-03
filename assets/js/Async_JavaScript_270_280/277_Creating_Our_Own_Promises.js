const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}


delayColorChange('red', 1000)
    .then(() => {
        return delayColorChange('orange', 1000)
    })
    .then(() => {
        return delayColorChange('yellow', 1000)
    })
    .then(() => {
        return delayColorChange('green', 1000)
    })
    .then(() => {
        return delayColorChange('blue', 1000)
    })
    .then(() => {
        return delayColorChange('indigo', 1000)
    })
    .then(() => {
        console.log('Last block');
        return delayColorChange('violet', 1000)
    })

// OR

// delayedColorChange('red', 1000)
//     .then(() => delayedColorChange('orange', 1000))
//     .then(() => delayedColorChange('yellow', 1000))
//     .then(() => delayedColorChange('green', 1000))
//     .then(() => delayedColorChange('blue', 1000))
//     .then(() => delayedColorChange('indigo', 1000))
//     .then(() => delayedColorChange('violet', 1000))