const width = 28
const grid = document.querySelector('.grid')
const scoreDisplay = document.getElementById('score')
const squares = []
let score = 0




// Game Layout - create an Excel template for the layout grid 
// 28 * 28 = 784
// 0 = Pac Dots 
// 1 = Wall 
// 2 = Ghost Lair 
// 3 = Power Pallet 
// 4 = empty 
const layout = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
]

// Create Board 
function createBoard() {
    for (let i = 0; i < layout.length; i++) {
        // Create a square div 
        const square = document.createElement('div') 
        // Add the square to the grid 
        grid.appendChild(square)
        // Add new squares to the squares array 
        squares.push(square)
        console.log(square)

        if (layout[i]  === 0) {
            squares[i].classList.add('pac-dot')
        } else if (layout[i] === 1) {
            squares[i].classList.add('wall')
        } else if (layout[i] === 3) {
            squares[i].classList.add('power-pallete')
        }
    }
}
createBoard()

//Starting the position for pacman - the current index 
let pacmanCurrentIndex = 490
squares[pacmanCurrentIndex].classList.add('pacman') 

// Keycodes for game control function 
// Keyleft: 37, Keyup: 38, Keyright: 39, Keydown: 40
// Write a function for the controls 
function control(e) {
    squares[pacmanCurrentIndex].classList.remove('pacman')
    switch(e.keyCode) {
        case 37:
        if (
            !squares[pacmanCurrentIndex - 1].classList.contains('ghost-lair') &&
            !squares[pacmanCurrentIndex - 1].classList.contains('wall') &&
            pacmanCurrentIndex % width !== 0
            ) 
            pacmanCurrentIndex -= 1
            if (pacmanCurrentIndex === 364) {
                pacmanCurrentIndex = 391
            }
        break 

        case 38:
        if (
            !squares[pacmanCurrentIndex - width].classList.contains('ghost-lair') &&
            !squares[pacmanCurrentIndex - width].classList.contains('wall') &&
            pacmanCurrentIndex - width >= 0
            ) 
            pacmanCurrentIndex -= width 
        break

        case 39: 
        if (
            !squares[pacmanCurrentIndex + 1].classList.contains('ghost-lair') &&
            !squares[pacmanCurrentIndex + 1].classList.contains('wall') && 
            pacmanCurrentIndex % width < width -1
            ) 
            pacmanCurrentIndex += 1 
            if (pacmanCurrentIndex === 391) {
                pacmanCurrentIndex = 364
            }
        break 

        case 40: 
        if ( 
            !squares[pacmanCurrentIndex + width].classList.contains('ghost-lair') &&
            !squares[pacmanCurrentIndex + width].classList.contains('wall') &&
            pacmanCurrentIndex + width < width * width
            ) 
            pacmanCurrentIndex += width 
        break
    }
    squares[pacmanCurrentIndex].classList.add('pacman')
    pacDotEaten()
    checkForWin()
    checkForGamerOver()
}
document.addEventListener("keyup", control)



//================================================

function pacDotEaten() {
    if (squares[pacmanCurrentIndex].classList.containws ) {
        squares[pacmanCurrentIndex].classList.remove('pac-dot')
        score++
        scoreDisplay.innerHTML = score 
    }
}



function powerPalletEaten() {
   // if 
   if (squares[pacmanCurrentIndex].classList.contains('power-pallet')) {
       //Remove the class of power pallet
       squares[pacmanCurrentIndex].classList.remove('power-pallet')

       //add a score of ten 
        score += 10

        //Change each of the four ghosts to isScared 
        ghosts.forEach(ghost => ghost.isScared = true)

        //Use setTimeout to unscare ghosts after ten seconds
        setTimeout(unScareGhosts(), 10000)
   }
}



// Write a function to unScare the Ghosts 
function unScareGhosts() {
    ghosts.forEach(ghost => ghost.isScared = false)
}


class Ghost {
    constructor(className, startIndex, speed) {
        this.className = className 
        this.startIndex = startIndex
        this.speed = speed
        this.currentIndex = startIndex 
        this.isScared = false 
        this.timerId = NaN 
    } 
}

let ghosts = [
    new Ghost('blinky',  348, 250),
    new Ghost('pinky',  376, 400),
    new Ghost('inky',  351, 300),
    new Ghost('clyde',  379, 500)
]



// Draw the Ghosts on to the grid 
ghosts.forEach(ghost => {
    squares[ghost.startIndex].classList.add(ghost.className) &&
    squares[ghost.startIndex].classList.add(ghost)
})



// Move the Ghosts 
ghosts.forEach(ghost => moveGhost(ghost))

//Ghost function 
function moveGhost(ghost) {
    console.log('Ghost is moving')
    let directions = [-1, +1, -width, +width] 
    let direction = directions[Math.floor(Math.random() * directions.length)] 
    console.log(directions)

    const timerId = setInterval(function() {
        // If the next square does NOT contain a wall and does NOT contain a ghost
        if (
            !squares[ghost.currentIndex + direction].classList.contains('wall') &&
            !squares[ghost.currentIndex + direction].classList.contains('ghost')
        )
        // remove any ghosts
        squares[ghost.currentIndex].classList.remove(ghost.className)

        // Add direction to current Index 
        ghost.currentIndex += direction 

        // Add ghost class 
        squares[ghost.currentIndex].classList.add(ghost.className)

        //Check to see if the ghost is currently scared, if so, add scared ghost. 
        if (ghost.isScared) {
            squares[ghosts.currentIndex].classList.add('scared-ghost')
        }

        //Check IF the ghost is currently scared and pacman is on it
        if (ghost.isScared && squaresp[ghost.currentIndex].classList.contains('pacman')) {
            //remove className - ghost.className, 'ghost', 'scared-ghost' 
            squares[ghost.currentIndex].classList.remove(ghost.classname, 'ghost', 'scared-ghost')

            //Change the currentIndex back to the startIndex
            ghost.currentIndex = ghost.startIndex

            //Add a score of 100
            score += 100 

            //Re-add the className of ghost.className and 'ghost' to the ghosts new ghost position 
            squares[ghost.currentIndex].classList.add(ghost.className, 'ghost') 
        }
        checkForGameOver()
    }, ghost.speed)
}

// Check to see if the game is over
function checkForGameOver() {
    //If the square pacman is in contains a ghost AND the square does NOT contain a scared ghost
    if (
        squares[pacmanCurrentIndex].classList.contains('ghost') &&
        !squares[pacmanCurrentIndex].classList.contains('scared-ghost')
        ) {
        //For each ghost, stop it from moving. 
        ghosts.forEach(ghost => clearInterval(ghost, timerId))
        //Remove the eventListener from the control function 
        document.removeEventListener('keyup', contrl)

        //Tell user the game is over
        scoreDisplay.innerHTML = "You LOSE"
        }
    } 
    
    //Check to see if the user Won
    function checkForWin() {
        if (score === 274) {
            //stop each ghost
            ghosts.forEach(ghost => clearInterval(ghost.timerId))
            //remove the eventListener for the control function
            document.removeEventListener('keyup', control)
            //Tell the user we won
            scoreDisplay.innerHTML = "You Won"
        }
    }