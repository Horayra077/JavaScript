let playerOneScore = document.querySelector('#player-score-1');
let playerTwoScore = document.querySelector('#player-score-2');
let select = document.querySelector('#inputGroupSelect01');


let playerOneButton = document.querySelector('#player-one-button');
let playerTwoButton = document.querySelector('#player-two-button');
let resetButton = document.querySelector('#reset-button');

let p1 = 1;
let p2 = 1;
let isGameOver = false;

playerOneButton.addEventListener('click', function () {
    if (!isGameOver) {
        let playerOneScoreValue = parseInt(playerOneScore.textContent);
        let selectValue = parseInt(select.value);

        if (playerOneScoreValue === selectValue) {
            isGameOver = true;
        }
        playerOneScore.textContent = p1;
        p1 = p1 + 1;
    }
})

playerTwoButton.addEventListener('click', function () {
    if (!isGameOver) {
        let playerTwoScoreValue = parseInt(playerTwoScore.textContent);
        let selectValue = parseInt(select.value);

        if (playerTwoScoreValue === selectValue) {
            isGameOver = true;
        }
        playerTwoScore.textContent = p2;
        p2 = p2 + 1;
    }
})