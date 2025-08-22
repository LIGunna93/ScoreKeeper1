const P1 = {
    score: 0,
    button: document.getElementById("p1button"),
    display: document.getElementById("player1Score")
};

const P2 = {
    score: 0,
    button: document.getElementById("p2button"),
    display: document.getElementById("player2Score")
};

const rounds = 5; // Set the number of rounds to win


const players = [P1, P2];

players.forEach((player, i) => {
    player.button.addEventListener("click", function() {
        if (player.score < rounds) {
            player.score += 1; // Increment score
            player.display.textContent = player.score;
            if (player.score === rounds) {
                alert(`Player ${i + 1} wins!`);
                players.forEach(p => {
                   p.display.textContent = p.score;
                });
            }
        }
    });
});

const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", function() {
    players.forEach(player => {
        player.score = 0;
        player.display.textContent = player.score;
        header.style.display = "block";
    });
});


const scoreBox = document.querySelector(".score-container");
scoreBox.style.display = "flex";
scoreBox.style.flexDirection = "row";
scoreBox.style.justifyContent = "space-between";
scoreBox.style.alignItems = "center";

const p1board = document.querySelectorAll(".scoreboard1");
p1board.forEach(board => {
    board.style.display = "inline-flex";
    board.style.flexDirection = "column";
    board.style.alignItems = "center";
    board.style.border = "5px dashed hsla(20, 25%, 50%, 0.9)";
    board.style.padding = "10px";
});

const p2board = document.querySelectorAll(".scoreboard2");
p2board.forEach(board => {
    board.style.display = "inline-flex";
    board.style.flexDirection = "column";
    board.style.alignItems = "center";
    board.style.border = "5px dashed hsla(20, 25%, 50%, 0.9)";
    board.style.padding = "10px";
    board.firstChild.addEventListener("click", function() {
        board.style.backgroundColor = "darkblue";
    });
});