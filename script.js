let score = 0;

document.addEventListener('DOMContentLoaded', () => {
    const truckBtn = document.getElementById('truck-btn');
    const scoreDisplay = document.getElementById('score');

    truckBtn.addEventListener('click', () => {
        score++;
        scoreDisplay.textContent = `Score: ${score}`;
    });
});
