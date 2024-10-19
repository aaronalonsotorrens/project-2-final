const board = document.querySelector("#board")
const infoDisplay = document.querySelector("#info")

const createCells = ["","","","","","","","",""]
const winningMessageElement = document.getElementById('winningMessage')
const winningMessageTextElement = document.querySelector('[data-winning-message-text]')
const restartButton = document.getElementById('restartButton')
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

    let marioWins = false;
    let bowserWins = false;

    // Check for Mario's win
    winningCombos.forEach(array => {
        if (array.every(cell => allSquares[cell].firstChild?.classList.contains("mario"))) {
            marioWins = true;
        }
    });

    // Check for Bowser's win
    winningCombos.forEach(array => {
        if (array.every(cell => allSquares[cell].firstChild?.classList.contains("bowser"))) {
            bowserWins = true;
        }
    });

    // Call endGame if a winner is detected
    if (marioWins || bowserWins) {
        endGame(marioWins, bowserWins);
        removeClickEvents();
    }
}

function removeClickEvents() {
    const allSquares = document.querySelectorAll(".square");
    allSquares.forEach(square => {
        square.removeEventListener("click", startGame)
    })
}

function endGame(marioWins, bowserWins) {
    if (marioWins) {
        winningMessageTextElement.innerText = "Yahooo Let's Go!";
    } else if (bowserWins) {
        winningMessageTextElement.innerText = "Oooohhh noooo!";
    }

    // Show the winning message
    winningMessageElement.classList.add('show');
}

// Restart game and reset the board
restartButton.addEventListener('click', restartGame)

function restartGame() {
    winningMessageElement.classList.remove('show')
    createCells = ["","","","","","","","",""]
    start = "mario"
    infoDisplay.textContent = "Mario goes first"
    board.innerHTML = "";  

    createBoard()
}
