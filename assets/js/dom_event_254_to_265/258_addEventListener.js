
const btn3 = document.querySelector('#v3');

btn3.addEventListener('click', function () {
    alert("CLICKED!");
})

//-------------------------------------//

function twist() {
    console.log("TWIST!");
}
function shout() {
    console.log("SHOUT!");
}

const tasButton = document.getElementById('tas');

// tasButton.onclick = twist; // It's not work
// tasButton.onclick = shout; // always work last one. like, cascading style

// In this why addEventListener comming

tasButton.addEventListener('click', twist);
tasButton.addEventListener('click', shout);

// This event work together at the same time

// tasButton.addEventListener('click', twist, { once: true }); // once: this event work only 1 time
// tasButton.addEventListener('click', shout, { once: true }); // once: this event work only 1 time

