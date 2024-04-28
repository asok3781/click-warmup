const circle = document.getElementById('circle');
let score = 0;

circle.addEventListener('click', () => {
    score++;
    updateScore();
    moveCircle();
});

function updateScore() {
    circle.innerText = `Score: ${score}`;
}

function moveCircle() {
    const newX = Math.random() * (window.innerWidth - 100);
    const newY = Math.random() * (window.innerHeight - 100);
    circle.style.left = `${newX}px`;
    circle.style.top = `${newY}px`;
}

moveCircle();
