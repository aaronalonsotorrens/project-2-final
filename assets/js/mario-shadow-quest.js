// Globals constants and variables
const gameData = [
  {
    image: "./assets/images/yoshi-shadow.jpg",
    options: ["Yoshi", "Toad"],
    correctOption: 0,
  },
  {
    image: "./assets/images/mario-shadow.jpg",
    options: ["Luigi", "Mario"],
    correctOption: 1,
  },
  {
    image: "./assets/images/luigi-shadow.jpg",
    options: ["Luigi", "Yoshi"],
    correctOption: 0,
  },
  {
    image: "./assets/images/daisy-shadow.jpg",
    options: ["Daisy", "Peach"],
    correctOption: 0,
  },
  {
    image: "./assets/images/toad-shadow.jpg",
    options: ["Birdo", "Toad"],
    correctOption: 1,
  },
  {
    image: "./assets/images/dk-shadow.jpg",
    options: ["D.Kong", "Wario"],
    correctOption: 0,
  },
  {
    image: "./assets/images/peach-shadow.jpg",
    options: ["Rosalina", "Peach"],
    correctOption: 1,
  },
  {
    image: "./assets/images/boo-shadow.jpg",
    options: ["Boo", "Toad"],
    correctOption: 0,
  },
  {
    image: "./assets/images/waluigi-shadow.jpg",
    options: ["Luigi", "Waluigi"],
    correctOption: 1,
  },
  {
    image: "./assets/images/wario-shadow.jpg",
    options: ["Mario", "Wario"],
    correctOption: 1,
  },
  {
    image: "./assets/images/rosalina-shadow.jpg",
    options: ["Rosalina", "Daisy"],
    correctOption: 0,
  },
];

// DOM elements
const timeLeft = document.querySelector(".time-left");
const startButton = document.getElementById("start-button");
const winningMessageElement = document.getElementById("winningMessage");
const winningMessageTextElement = document.querySelector("[data-winning-message-text]");
const restartButton = document.getElementById("restart-button");
const option1Button = document.getElementById("option1");
const option2Button = document.getElementById("option2");

// Game variables
let imageIndex;
let currentTime = 10;
let countDownTimerId = null;
let timerStarted = false;
let highScore = localStorage.getItem("highScore") || 0;

// Set the high score on page load
document.getElementById("high-score-value").textContent = highScore;

// Helper functions to enable/disable options
function disableOptions() {
  option1Button.disabled = true;
  option2Button.disabled = true;
}

function enableOptions() {
  option1Button.disabled = false;
  option2Button.disabled = false;
}

// Main game functions
function loadNewImage() {
  imageIndex = Math.floor(Math.random() * gameData.length);

  const gameImage = document.getElementById("shadow-image");
  gameImage.src = gameData[imageIndex].image;

  option1Button.textContent = gameData[imageIndex].options[0];
  option2Button.textContent = gameData[imageIndex].options[1];

  document.getElementById("result-message").textContent = "";
}

function checkOption(optionIndex) {
  const resultMessage = document.getElementById("result-message");

  if (imageIndex === undefined || !gameData[imageIndex]) {
    console.error("Invalid image index. Please load a new image.");
    return;
  }

  const correctOption = gameData[imageIndex].correctOption;

  if (optionIndex === correctOption) {
    resultMessage.style.color = "green";
    incrementScore();
  } else {
    resultMessage.style.color = "red";
    incrementWrongAnswer();
  }

  setTimeout(loadNewImage, 200);
}

function incrementScore() {
  let oldScore = parseInt(document.getElementById("score").innerText);
  document.getElementById("score").innerHTML = ++oldScore;
}

function incrementWrongAnswer() {
  let oldScore = parseInt(document.getElementById("incorrect").innerText);
  document.getElementById("incorrect").innerHTML = ++oldScore;
}

function countDown() {
  if (currentTime > 0) {
    currentTime--;
    timeLeft.textContent = "Timer: " + currentTime + "s";
  }

  if (currentTime === 0) {
    clearInterval(countDownTimerId);
    endGame();
  }
}

function startGame() {
  if (!timerStarted) {
    loadNewImage();
    enableOptions(); // Enable buttons when game starts
    timerStarted = true;
    timeLeft.textContent = "Timer: " + currentTime + "s";
    countDownTimerId = setInterval(countDown, 1000);
  }
}

function endGame() {
  clearInterval(countDownTimerId);
  timerStarted = false;
  disableOptions(); // Disable buttons after game ends

  const finalScore = parseInt(document.getElementById("score").innerText);

  if (finalScore > parseInt(highScore)) {
    highScore = finalScore;
    localStorage.setItem("highScore", highScore);
    document.getElementById("high-score-value").textContent = highScore;
  }

  winningMessageTextElement.textContent = `Your final score is ${finalScore}`;
  winningMessageElement.classList.add("show");
  restartButton.style.display = "block";
}

function restartGame() {
  clearInterval(countDownTimerId);

  document.getElementById("score").innerText = "0";
  document.getElementById("incorrect").innerText = "0";
  currentTime = 10;
  timeLeft.textContent = "Timer: " + currentTime + "s";
  winningMessageElement.classList.remove("show");
  restartButton.style.display = "none";

  timerStarted = false;

  disableOptions(); // Keep buttons disabled until user clicks Start
}

// Event listeners
startButton.addEventListener("click", startGame);
restartButton.addEventListener("click", restartGame);
option1Button.addEventListener("click", () => checkOption(0));
option2Button.addEventListener("click", () => checkOption(1));

// Initial setup
disableOptions(); // Disable buttons before game starts