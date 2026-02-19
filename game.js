// game.js

// Game Variables
let score = 0;
let gameOver = false;

// Player properties
const player = {
    x: 50,
    y: 50,
    width: 10,
    height: 10,
    color: 'blue',
};

// Function to initialize game
function init() {
    console.log('Game initialized.');
    // Start game loop
    gameLoop();
}

// Function for main game loop
function gameLoop() {
    if (!gameOver) {
        update();
        draw();
        requestAnimationFrame(gameLoop);
    } else {
        console.log('Game Over! Final Score: ' + score);
    }
}

// Update game state
function update() {
    // Game logic (e.g., increasing score, checking collisions, etc.)
    score++;
    // Placeholder for updating player position, etc.
}

// Draw game elements
function draw() {
    // Placeholder for rendering logic
    console.clear(); // Clear the console (for text based game)
    console.log('Player Position:', player.x, player.y);
    console.log('Current Score:', score);
}

// Function to end the game
function endGame() {
    gameOver = true;
}

// Start the game
init();
