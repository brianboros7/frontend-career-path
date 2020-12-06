let player1Score = 0
let player2Score = 0
let player1Turn = false 

/* Store game and player data */
const player1Dice = document.getElementById('player1Dice')
const player2Dice = document.getElementById('player2Dice')
const player1Scoreboard = document.getElementById('player1Scoreboard')
const player2Scoreboard = document.getElementById('player2Scoreboard')
const message = document.getElementById('message')
const rollBtn = document.getElementById('rollbtn')
const resetBtn = document.getElementById("resetBtn")

/* 
    Roll Dice Logic 
    It should use a random number between 1 and 6
    Dice 1 to 6 = 0 - 5 
    What method would create this math? 
*/
// write a function to display buttons 
function showDisplayButton() {
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"
}

rollBtn.addEventListener('click', function() {
    const randomNumber = Math.floor(Math.random() * 6) + 1

    if (player1Turn) {
        player1Score += randomNumber 
        player1Scoreboard = player1Score 
        player1Dice.textContent = randomNumber 
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        message.textContent = "player 2's turn"
    } else {
        player2Score += randomNumber 
        player2Scoreboard = player2Score 
        player2Dice.textContent = randomNumber 
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        message.textContent = "Player 1's turn"
    }
    // Check to see if player has won 
    if (player1Score >= 20) {
        message.textContent = "Player 1 has won!"
        showDisplayButton()
    } else if (player2Score) {
        message.textContent = "Player 2 has won!"
        showDisplayButton()
    }  
    // 3. Switch players turn back to the other players turn 
    player1Turn = !player1Turn   
})

// 1. Hook a click event listener up to the reset button
// 2. Write a reset function that resets the game 
// 3. invoke the reset function when the reset btn is called 
resetBtn.addEventListener("click", function() {
    reset()
})

function reset() {
    message.textContent = "Player 1's turn"
    player1Scoreboard.textContent = 0
    player2Scoreboard.textContent = 0
    player1Dice.textContent = "_"
    player2Dice.textContent = "_"
    player1Score = 0
    player2Score = 0 
    player1Turn = true 
}