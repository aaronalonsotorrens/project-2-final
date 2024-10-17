const board = document.querySelector("#board")
const infoDisplay = document.querySelector("#info")
const createCells = ["","","","","","","","",""]
let start = "mario"
infoDisplay.textContent = "Mario goes first"

function createBoard() {
    createCells.forEach((index) => {
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
    /* Following if statement can also be written in the following way start = start === "mario" ? "bowser" : "mario" */
    if (start === "mario") {
        start = "bowser";
    } else {
        start = "mario";
    }
    infoDisplay.textContent = "It is now" + start + "'s go"
    e.target.removeEventListener("click", startGame)
    checkScore()

}

function checkScore() {
    const allSquares = document.querySelectorAll(".square")
    const winningCombos = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ]
    winningCombos.forEach(array => {
        const marioWins = array.every(cell =>
            allSquares[cell].firstChild?.classlist.contains("mario"))
        if (marioWins) {
            infoDisplay.textContent = "Yahooo Let's Go!"
            allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
        }
    })

    winningCombos.forEach(array => {
        const bowserWins = array.every(cell =>
            allSquares[cell].firstChild?.classlist.contains("bowser"))
        if (bowserWins) {
            infoDisplay.textContent = "Oooohhh noooo!"
        }
    })
    
}