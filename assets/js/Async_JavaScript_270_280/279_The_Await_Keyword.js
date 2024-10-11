const delayColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

// delayColorChange('red', 1000)
//     .then(() => delayColorChange('orange', 1000))
//     .then(() => delayColorChange('yellow', 1000))
//     .then(() => delayColorChange('green', 1000))
//     .then(() => delayColorChange('blue', 1000))
//     .then(() => delayColorChange('indigo', 1000))
//     .then(() => delayColorChange('violet', 1000))

async function rainbow() {
    await delayColorChange('red', 1000)
    await delayColorChange('orange', 1000)
    await delayColorChange('yellow', 1000)
    await delayColorChange('green', 1000)
    await delayColorChange('blue', 1000)
    await delayColorChange('indigo', 1000)
    await delayColorChange('violet', 1000)
    return "All DONE!"
}

// rainbow().then(() => console.log("End of Rainbow!"))

async function printRainbow() {
    await rainbow();
    console.log("End of Rainbow")
}

printRainbow();