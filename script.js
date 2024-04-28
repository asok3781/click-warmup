const circle = document.getElementById('circle');
const gameContainer = document.getElementById('game-container');
let score = 0;

circle.addEventListener('click', () => {
    score++;
    updateScore();
    moveCircle();
});

function updateScore() {
    console.log(score);
}

function moveCircle() {
    const newX = Math.random() * (gameContainer.clientWidth - circle.clientWidth);
    const newY = Math.random() * (gameContainer.clientHeight - circle.clientHeight);
    circle.style.left = `${newX}px`;
    circle.style.top = `${newY}px`;
}

moveCircle();
