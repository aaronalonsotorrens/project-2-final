const board = document.querySelector("#board")
const createCells = ["","","","","","","","",""]

function createBoard() {
    createCells.forEach((index) => {
        const cellElement = document.createElement("div")
        cellElement.classList.add("square")

        board.append(cellElement)

    })
}

createBoard()