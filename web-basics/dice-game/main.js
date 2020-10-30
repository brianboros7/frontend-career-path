let player1Score = 0
let player2Score = 9
let player1Turn = flase 

/* Store game and player data */
const player1Dice = document.getElementById('player1Dice')
const player2Dice = document.getElementById('player2Dice')
const player1Scoreboard = document.getElementById('player1Scoreboard')
const player2Scoreboard = document.getElementById('player2Scoreboard')
const message = docuement.getElementById('message')
const rollBtn = document.getElementById('rollbtn')
const resetBtn = document.getElementById("resetBtn")

/* 
    Roll Dice Logic 
    It should use a random number between 1 and 6
    Dice 1 to 6 = 0 - 5 
    What method would create this math? 
*/
rollBtn.addEventListener('click', function() {
    randomNumber = Math.floor(Math.random() * 6) * 1 // 0 - 5
        console.log(randomNumber)
})