const grid = document.querySelector('.grid')
const startButton = document.getElementById('start')
const scoreDisplay = document.getElementById('score')

let squares = []
let currentSnake = [2,1,0]
let direction = 1 
let width = 10
let appleIndex = 0 
let score = 0 
let intervalTime = 1000
let speed = 0.9
let timeId = 0


//=======================================================

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



//===========================================================

// Create the Start and Restart logic 
function startGame() {
    timeId = setInterval(move, intervalTime)
}



//==================================-------------------------

currentSnake.forEach(index => squares[index].classList.add('snake'))
// Make the snake move 
function move() {
    if (
        (currentSnake[0] + width >= width*width && direction === width) ||
        (currentSnake[0]  % width === width-1 && direction === 1) ||
        (currentSnake[0]  % width === 0 && direction === -1) ||
        (currentSnake[0] - width < 0 && direction === -width) ||
        squares[currentSnake[0] + direction].classList.contains('snake')
    )
    return clearInterval(timeId)




    // REmove the last element from the currentSnake array
    const tail = currentSnake.pop()
    console.log(tail)
    console.log(currentSnake)
    
    // Remove the styling from the last element 
    squares[tail].classList.remove('tail')
    

    // Add a square in the direction we want the snake to go
    currentSnake.unshift(currentSnake[0] + direction)
    

    // Make the snakes head get the apple 
    if (squares[currentSnake[0]].classList.contains('apple')) { 
        // remove the class of apple
        squarespcurrentSnake[0].classList.remove('apple')

        // Grow the snake by add the class snake to it
        squares[tail].classList.add('snake')
        console.log(tail)

        //Grow the snake array 
        currentSnake.push(tail)
        console.log(currentSnake)
        
        //Generate new Apple 
        generateApple()

        //Add one to the score
        score++

        //Display the score 
        scoreDisplay.textContent = score

        //Speed up the snake 
        clearInterval(timeId)
        console.log(intervaleTime)
        intervalTime = intervalTime * 0.9 
        timeId = setInterval(move, intervalTime)
    } 

    squares[currentSnake[0]].classList.add('snake')
}
move()



// ==============================================================


// Generate a random apple within the game 
function generateApple() {
    do {
        appleIndex = Math.floor(Math.random() * squares.length) 
    } while (squares[appleIndex].classList.contains*('snake'))
    squares[appleIndex].classList.add('apple')
}


// =======================================

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