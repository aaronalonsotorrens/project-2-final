//Globals constants and variables
const board = document.querySelector("#board");
const infoDisplay = document.querySelector("#info");
const winningMessageElement = document.getElementById("winningMessage");
const winningMessageTextElement = document.querySelector(
  "[data-winning-message-text]"
);
const restartButton = document.getElementById("restartButton");

let createCells = ["", "", "", "", "", "", "", "", ""];
let start = "mario";
infoDisplay.textContent = "Mario goes first";
infoDisplay.style.color = "red";

// Game setup
createBoard();
restartButton.addEventListener("click", restartGame);

function createBoard() {
  createCells.forEach((_, index) => {
    const cellElement = document.createElement("div");
    cellElement.classList.add("square");
    cellElement.id = index;
    cellElement.addEventListener("click", startGame);
    board.append(cellElement);
  });
}

// Main game logic
function startGame(e) {
  console.log("clicked", e.target);
  const startDisplay = document.createElement("div");
  startDisplay.classList.add(start);
  e.target.append(startDisplay);

  // Alternate between "mario" and "bowser"
  if (start === "mario") {
    start = "bowser";
    infoDisplay.style.color = "green";
  } else {
    start = "mario";
    infoDisplay.style.color = "red";
  }
  infoDisplay.textContent = "It is now " + start + "'s go";

  // Remove the event listener to prevent multiple clicks on the same square once the game ends
  e.target.removeEventListener("click", startGame);

  checkScore();
}

// Check for a win or draw
function checkScore() {
  const allSquares = document.querySelectorAll(".square");
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  let marioWins = false;
  let bowserWins = false;

  // Check if Mario wins
  winningCombos.forEach((array) => {
    if (
      array.every((cell) =>
        allSquares[cell].firstChild?.classList.contains("mario")
      )
    ) {
      marioWins = true;
    }
  });

  // Check if bowser wins
  winningCombos.forEach((array) => {
    if (
      array.every((cell) =>
        allSquares[cell].firstChild?.classList.contains("bowser")
      )
    ) {
      bowserWins = true;
    }
  });

  // Check if it is a draw wins
  const isDraw =
    [...allSquares].every((square) => square.firstChild) &&
    !marioWins &&
    !bowserWins;

  // Once a winner is confirmed, remove further clicks on each square
  if (marioWins || bowserWins) {
    endGame(marioWins, bowserWins, false);
    removeClickEvents();
  } else if (isDraw) {
    endGame(false, false, true);
    removeClickEvents();
  }
}

// End game end and display result
function endGame(marioWins, bowserWins, draw = false) {
  if (marioWins) {
    winningMessageTextElement.innerText = "Yahooo Let's Go!";
  } else if (bowserWins) {
    winningMessageTextElement.innerText = "Bwahaha! Bowser wins";
  } else if (draw) {
    winningMessageTextElement.innerText = "You have another life! Try again!";
  }

  // Show the winning message
  winningMessageElement.classList.add("show");
}

// Remove click events from each square
function removeClickEvents() {
  const allSquares = document.querySelectorAll(".square");
  allSquares.forEach((square) => {
    square.removeEventListener("click", startGame);
  });
}

// Restart game and reset the board
function restartGame() {
  winningMessageElement.classList.remove("show");
  createCells = ["", "", "", "", "", "", "", "", ""];
  start = "mario";
  infoDisplay.textContent = "Mario goes first";
  board.innerHTML = "";

  createBoard();
  infoDisplay.textContent = "Mario goes first";
  infoDisplay.style.color = "red";
}