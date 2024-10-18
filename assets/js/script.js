const board = document.querySelector("#board")
const infoDisplay = document.querySelector("#info")
const createCells = ["","","","","","","","",""]
const winningMessageElement = document.getElementById('winningMessage')
const winningMessageTextElement = document.querySelector('[data-winning-message-text]')
let start = "mario"
infoDisplay.textContent = "Mario goes first"

function createBoard() {
    createCells.forEach((_, index) => {
        const cellElement = document.createElement("div")
        cellElement.classList.add("square")
        cellElement.id = index
        cellElement.addEventListener("click", startGame)
        board.append(cellElement)
    })
}

createBoard()

function startGame(e) {
    console.log("clicked", e.target)
    const startDisplay = document.createElement("div")
    startDisplay.classList.add(start)
    e.target.append(startDisplay)

    // Alternate between "mario" and "bowser"
    if (start === "mario") {
        start = "bowser";
    } else {
        start = "mario";
    }
    infoDisplay.textContent = "It is now " + start + "'s go"

    // Remove the event listener to prevent multiple clicks on the same square
    e.target.removeEventListener("click", startGame)

    checkScore()
}

function checkScore() {
    const allSquares = document.querySelectorAll(".square")
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ]

    // Check for Mario's win
    winningCombos.forEach(array => {
        const marioWins = array.every(cell =>
            allSquares[cell].firstChild?.classList.contains("mario"))  // Fixed typo: classList
        if (marioWins) {
            winningMessageTextElement.innerText = "Yahooo Let's Go!"
            endGame()  // Disable further clicks
        }
        
    })

    // Check for Bowser's win
    winningCombos.forEach(array => {
        const bowserWins = array.every(cell =>
            allSquares[cell].firstChild?.classList.contains("bowser"))  // Fixed typo: classList
        if (bowserWins) {
            infoDisplay.textContent = "Oooohhh noooo!"
            endGame()  // Disable further clicks
        }
    })
}

function endGame(draw) {
    if (draw) {
    } 
    else {
    }
    
}