const board = document.querySelector("#board")
const infoDisplay = document.querySelector("#info")
const createCells = ["","","","","","","","",""]
const winningMessageElement = document.getElementById('winningMessage')
const winningMessageTextElement = document.querySelector('[data-winning-message-text]')
let start = "mario"
infoDisplay.textContent = "Mario goes first"

function createBoard() {
    createCells.forEach((index) => {
        const cellElement = document.createElement("div")
        cellElement.classList.add("square")
        cellElement.id = index
        cellElement.addEventListener("click", startGame, )
        board.append(cellElement)

    })
}
createBoard()


function startGame(e) {
    const cell = e.target
    /* Following if statement can also be written in the following way start = start === "mario" ? "bowser" : "mario" */
    const currentClass = "mario" ? "mario" : "bowser"; 
    
    cell.classList.add(currentClass); 

    if (start === "mario") {
        start = "bowser";
    } else {
        start = "mario";
    }
    infoDisplay.textContent = "It is now " + start + " 's go"
    e.target.removeEventListener("click", startGame)
    

}

function checkWin() {
    const allSquares = document.querySelectorAll(".square")
    const winningCombos = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ]
    winningCombos.forEach(array => {
        const marioWins = array.every(cell =>
            allSquares[cell].classList.contains("mario")
        );
        if (marioWins) {
            winningMessageTextElement.innerText = "Yahooo Let's Go!"
            
        }
    })
    winningCombos.forEach(array => {
        const bowserWins = array.every(cell =>
            allSquares[cell].firstChild?.classlist.contains("bowser"))
        if (bowserWins) {
            infoDisplay.textContent = "Oooohhh noooo!"
        }
    })
    if (checkWin(currentClass)) {
        endGame(false);
    }
}


function endGame(draw) {
    if (draw) {

    } else {

    }
    winningMessageElement.classList.add('show')
}