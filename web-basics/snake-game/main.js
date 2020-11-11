const grid = document.querySelector('.grid')
const startButton = document.getElementById('start')
const score = document.getElementById('score')

let squares = []
let currentSnake = [0,1,2]
let direction = 1 
let width = 10

function createGrid() {

    for (let i = 0; i < 100; i++) {
        console.log('square')
        const square = document.createElement('div')

        square.classList.add('square')
        grid.appendChild(square)
        squares.push(square)
    }
}
createGrid()

currentSnake.forEach(index => squares[index].classList.add('snake'))
// let's make the snake move 
function move() {
    if (
        (currentSnake[0] + width >= width*width && direction === width)
        (currentSnake[0]  % width === width-1 && direction === 1)
        (currentSnake[0]  % width === 0 && direction === -1)
        (currentSnake[0] - width < 0 && direction === -width)
        squares[currentSnake[0] + direction].clssList.contains('snake')
    )
    return clearInterval(timeId)


    const tail = currentSnake.pop()
    console.log(tail)
    console.log(currentSnake)

    squares[tail].classList.remove('tail')

    currentSnake.unshift(currentSnake[0] + direction)
    console.log(currentSnake)

    squares[currentSnake[0]].classList.add('snake')
}
move()

let timeId = setInterval(move, 1000)

// Keycodes
// Right arrow: 39
// Up arrow: 38
// Left arrow: 37
// Down arrow: 40

function control(e) {
    if(e.keyCode === 39) { 
        console.log("right arrow pressed")
        direction = 1
    } else if (e.keyCode === 38) {
        console.log("Up arrow pressed")
        direction = -width 
    } else if (e.keyCode === 37) {
        console.log("Left arrow pressed")
        direction = -1
    } else if (e.keyCode === 40) {
        console.log("Down arrow pressed")
        direction = +width 
    }
}
document.addEventListener('keyup', control)
document.addEventListener('keydown', control)
