let gameover = false;

let player1score = document.getElementById("spanPlayer1");
let player2score = document.getElementById("spanPlayer2");
let max = parseInt(document.getElementById("winScore").value);

let player1button = document.getElementById("btnPlayer1");
let player2button = document.getElementById("btnPlayer2");
let reset = document.getElementById("btnReset");

let p1score = 0;
let p2score = 0;

player1button.addEventListener("click", function () {
    if (p1score < max && gameover == false) {
        p1score++;
        player1score.textContent = p1score;
    } else {
        window.alert("Game Over!");
        gameover = true;
    }
});

player2button.addEventListener("click", function () {
    if (p2score < max && gameover == false) {
        p2score++;
        player2score.textContent = p2score;
    } else {
        window.alert("Game Over!");
        gameover = true;
    }
});

reset.addEventListener("click", function () {
    p1score = 0;
    p2score = 0;
    player1score.textContent = 0;
    player2score.textContent = 0;
    gameover = false;
});

document.getElementById("winScore").addEventListener("change", getMax);

function getMax() {
    max = parseInt(document.getElementById("winScore").value);
}
