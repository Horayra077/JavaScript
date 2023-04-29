let playerOneScore = document.querySelector('#player-score-1');
let playerTwoScore = document.querySelector('#player-score-2');
let select = document.querySelector('#inputGroupSelect01');


let playerOneButton = document.querySelector('#player-one-button');
let playerTwoButton = document.querySelector('#player-two-button');
let resetButton = document.querySelector('#reset-button');

let playerOneCounter = 0;
let playerTwoCounter = 0;
let isGameOver = false;


playerOneButton.addEventListener('click', function () {
    let playerOneScoreValue = parseInt(playerOneScore.textContent);
    let selectValue = parseInt(select.value);

    if (playerOneScoreValue < selectValue && isGameOver === false) {
        playerOneScore.textContent = `${playerOneScoreValue + 1}`;
        playerOneCounter = playerOneCounter + 1;
    }

    if (playerOneCounter === selectValue) {

        // playerOneButton.disabled = true;
        // playerTwoButton.disabled = true;
        isGameOver = true;

        playerOneScore.style.color = 'green';
        playerTwoScore.style.color = 'red';
        document.querySelector('#thewinner').style.display = 'block';
        document.querySelector('#player-name').textContent = 'One';

    }

})

playerTwoButton.addEventListener('click', function () {
    let playerTwoScoreValue = parseInt(playerTwoScore.textContent);
    let selectValue2 = parseInt(select.value);

    if (playerTwoScoreValue < selectValue2 && isGameOver === false) {
        playerTwoScore.textContent = `${playerTwoScoreValue + 1}`;
        playerTwoCounter = playerTwoCounter + 1;
    }

    if (playerTwoCounter === selectValue2) {

        // playerOneButton.disabled = true;
        // playerTwoButton.disabled = true;
        isGameOver = true;

        playerOneScore.style.color = 'red';
        playerTwoScore.style.color = 'green';
        document.querySelector('#thewinner').style.display = 'block';
        document.querySelector('#player-name').textContent = 'Two';

    }
})


select.addEventListener('change', function () {
    reset();
})

resetButton.addEventListener('click', function () {
    reset();
})

function reset() {
    isGameOver = false;
    playerOneCounter = 0;
    playerTwoCounter = 0;
    playerOneScore.textContent = 0;
    playerTwoScore.textContent = 0;
    playerOneButton.removeAttribute("disabled");
    playerTwoButton.removeAttribute("disabled");
    playerOneScore.style.color = 'unset';
    playerTwoScore.style.color = 'unset';
    document.querySelector('#thewinner').style.display = 'none';
}


