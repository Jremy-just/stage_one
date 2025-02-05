const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#A133FF", "#33FFF3"];
let targetColor, score = 0;

const colorBox = document.getElementById('colorBox');
const colorOptions = document.getElementById('colorOptions');
const gameStatus = document.getElementById('gameStatus');
const scoreDisplay = document.getElementById('score');
const newGameButton = document.getElementById('newGameButton');



function startGame(resetScore = false) {
    colorOptions.innerHTML = '';
    gameStatus.textContent = '';

    if (resetScore) {
        score = 0;
        scoreDisplay.textContent = score;
    }

    targetColor = colors[Math.floor(Math.random() * colors.length)];
    colorBox.style.backgroundColor = targetColor;

    const shuffledColors = [...colors].sort(() => Math.random() - 0.5);
    shuffledColors.forEach(color => {
        const button = document.createElement('button');
        button.className = 'color-btn';
        button.style.backgroundColor = color;
        button.setAttribute('data-testid', 'colorOption');
        button.addEventListener('click', () => checkGuess(color));
        colorOptions.appendChild(button);
    });
}

function checkGuess(selectedColor) {
    if (selectedColor === targetColor) {
        gameStatus.textContent = "Correct!";
        gameStatus.className = 'correct';
        score++;
        scoreDisplay.textContent = score;
        setTimeout(startGame, 1000)
    } else {
        gameStatus.textContent = "Wrong! Try again.";
        gameStatus.className = 'wrong';
        setTimeout(startGame, 1000)
    }
}

newGameButton.addEventListener('click', startGame);

startGame();