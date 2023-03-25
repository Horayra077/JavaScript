let playerOneScore = document.querySelector('#player-score-1');
let playerTwoScore = document.querySelector('#player-score-2');
let select = document.querySelector('#inputGroupSelect01');


let playerOneButton = document.querySelector('#player-one-button');
let playerTwoButton = document.querySelector('#player-two-button');
let resetButton = document.querySelector('#reset-button');


playerOneButton.addEventListener('click', function () {
    let playerOneScoreValue = parseInt(playerOneScore.textContent);
    let selectValue = parseInt(select.value);

    if (playerOneScoreValue < selectValue) {
        playerOneScore.textContent = `${playerOneScoreValue + 1}`;
    }
})

playerTwoButton.addEventListener('click', function () {
    let playerTwoScoreValue = parseInt(playerTwoScore.textContent);
    let selectValue2 = parseInt(select.value);
    if (playerTwoScoreValue < selectValue2) {
        playerTwoScore.textContent = `${playerTwoScoreValue + 1}`;
    }
})

const tennisScoreKeeper = document.querySelector('#tennis_score_keeper');

tennisScoreKeeper.addEventListener('click', function (e) {

    // console.log(e.target);

    let playerOneScoreValue = parseInt(playerOneScore.textContent);
    let playerTwoScoreValue = parseInt(playerTwoScore.textContent);
    let selectValue = parseInt(select.value);

    if (playerOneScoreValue === selectValue || playerTwoScoreValue === selectValue) {
        playerOneButton.disabled = true;
        playerTwoButton.disabled = true;
        if (playerOneScoreValue === selectValue) {
            playerOneScore.style.color = 'green';
            playerTwoScore.style.color = 'red';
            document.querySelector('#thewinner').style.display = 'block';
            document.querySelector('#player-name').textContent = 'One';
        } else {
            playerOneScore.style.color = 'red';
            playerTwoScore.style.color = 'green';
            document.querySelector('#thewinner').style.display = 'block';
            document.querySelector('#player-name').textContent = 'Two';
        }
    }
})

select.addEventListener('change', function () {
    reset();
})

resetButton.addEventListener('click', function () {
    reset();
})

function reset() {
    playerOneScore.textContent = 0;
    playerTwoScore.textContent = 0;
    playerOneButton.removeAttribute("disabled");
    playerTwoButton.removeAttribute("disabled");
    playerOneScore.style.color = 'unset';
    playerTwoScore.style.color = 'unset';
    document.querySelector('#thewinner').style.display = 'none';
}


