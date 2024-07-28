// Define HTML elements

const board = document.getElementById('game-board');

// Define game variables

const gridSize = 20;
let snake = [{x: 10, y: 10}];
let food = generateFood();

// Draw game map, snake, food

function draw() {
    board.innerHTML = '';
    drawSnake();
    drawFood();
}

// Draw Snake

function drawSnake() {
    snake.forEach((segment) => {
        const snakeElement = createGameElement('div', 'snake');
    SetPosition(snakeElement, segment);
    board.appendChild(snakeElement)
    });
}

// Create a snake or food cube/div

function createGameElement(tag, className) {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

//set the position of snake or food

function SetPosition(element, position) {
    element.style.gridColumn = position.x;
    element.style.gridRow = position.y;
}


// Testing draw function
 draw();

 // Generate Food

function drawFood() {
    const foodElement = createGameElement('div', 'food');
    SetPosition(foodElement, food)
    board.appendChild(foodElement);
}

 // Generate Food

function generateFood() {
    const x = Math.floor(Math.random() * gridSize) + 1;
    const y = Math.floor(Math.random() * gridSize) + 1;
    return {x, y};
}

// Moving the snake 

function move() {
    const head = { ...snake[0] };

    switch (direction) {
        case value:

            break;

        default:
            break;
    }
}