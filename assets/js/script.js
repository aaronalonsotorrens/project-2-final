const board = document.querySelector("#board")
const infoDisplay = document.querySelector("#info")
const createCells = ["","","","","","","","",""]

infoDisplay.textContent = "Mario goes first"

function createBoard() {
    createCells.forEach((index) => {
        const cellElement = document.createElement("div")
        cellElement.classList.add("square")
        const marioElement = document.createElement("div")
        marioElement.classList.add("mario")
        cellElement.append(marioElement)
        board.append(cellElement)

    })
}

createBoard()