const gameCanvas = document.getElementById("gameCanvas");
const ctx = gameCanvas.getContext('2d');
let changingDirection = false
let score = 0

// snake path direction
let dx = 10
let dy = 0

// create canvas
let clearCanvas = () => {
    ctx.fillStyle = 'white'
    ctx.strokeStyle = 'black'

    ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height)
    ctx.strokeRect(0, 0, gameCanvas.width, gameCanvas.height)

}

// snake object
let snake = [
    { x: 150, y: 150 },
    { x: 140, y: 150 },
    { x: 130, y: 150 },
    { x: 120, y: 150 },
    { x: 110, y: 150 },
]
// create snake
let drawSnake = () => snake.forEach(drawSnakePart)
let drawSnakePart = snakePart => (
    ctx.fillStyle = "lightgreen",
    ctx.strokeStyle = "black",
    ctx.fillRect(snakePart.x, snakePart.y, 10, 10),
    ctx.strokeRect(snakePart.x, snakePart.y, 10, 10)

)
// creat food
let randomENumber = (max, min) => Math.round((Math.random() * (max - min) + min) / 10) * 10
let foodX;
let foodY;
let creatFood = () => {
    foodX = randomENumber(0, gameCanvas.width - 10)
    foodY = randomENumber(0, gameCanvas.height - 10)
    snake.forEach(snakePart => {
        if (snakePart.x == foodX && snakePart.y == foodY) {
            creatFood()
        }
    })
}
creatFood()


// draw food
let drawFood = () => {
    ctx.fillStyle = "red"
    ctx.strokeStyle = "black"
    ctx.fillRect(foodX, foodY, 10, 10)
    ctx.strokeRect(foodX, foodY, 10, 10)

}
// move snake

const moveSnake = () => {
    const createHead = { x: snake[0].x + dx, y: snake[0].y + dy }
    snake.unshift(createHead)
    if (createHead.x === foodX && createHead.y == foodY) {
        score += 10
        document.getElementById("score").innerHTML = score
        creatFood()
    } else {
        snake.pop()
    }


}
// handle snake direction
document.addEventListener("keydown", changeDirection)
function changeDirection(e) {
    let KEY_LEFT = 37
    let KEY_UP = 38
    let KEY_RIGHT = 39
    let KEY_DOWN = 40
    if (changingDirection) return;
    changingDirection = true

    let keyPressed = e.keyCode
    if (keyPressed == KEY_LEFT && dx !== 10) {
        dx = -10
        dy = 0
    }
    if (keyPressed == KEY_UP && dy !== 10) {
        dx = 0
        dy = -10
    }
    if (keyPressed == KEY_RIGHT && dx !== -10) {
        dx = 10
        dy = 0
    }
    if (keyPressed == KEY_DOWN && dy !== -10) {
        dx = 0
        dy = 10
    }
}
// fiNISH GAME 

function didgameEnd() {
    for (let i = 1; i < snake.length; i++) {
        if (snake[0].x === snake[i].x && snake[0].y === snake[i].y) return true;
    }
    const hitRightwall = snake[0].x > gameCanvas.width - 10;
    const hitLeftwall = snake[0].x < 0;
    const hitTopWall = snake[0].y < 0;
    const hitBottomwall = snake[0].y > gameCanvas.height - 10

    return hitRightwall || hitLeftwall || hitTopWall || hitBottomwall
}
// main func

let main = () => {
    if (didgameEnd()) return;
    setTimeout(() => {
        changingDirection = false
        clearCanvas()
        drawFood()
        moveSnake()
        drawSnake()

        main()
    }, 1000);
}


main()