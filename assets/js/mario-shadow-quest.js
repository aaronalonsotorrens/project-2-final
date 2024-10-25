const gameData = [
    { image: './assets/images/yoshi-shadow.jpg', options: ['Yoshi', 'Toad'], correctOption: 0 },
    { image: './assets/images/mario-shadow.jpg', options: ['Luigi', 'Mario'], correctOption: 1 },
    { image: './assets/images/luigi-shadow.jpg', options: ['Luigi', 'Yoshi'], correctOption: 0 },
    { image: './assets/images/toad-shadow.jpg', options: ['Peach', 'Toad'], correctOption: 1 }
];

const timeLeft = document.querySelector('.time-left');
const startButton = document.getElementById('start-button'); 

let imageIndex;
let currentTime = 10;
let timerId = null;
let countDownTimerId = null;
let timerStarted = false;

function loadNewImage() {
    imageIndex = Math.floor(Math.random() * gameData.length);

    const gameImage = document.getElementById('shadowImage');
    gameImage.src = gameData[imageIndex].image;

    //Include text in the button
    document.getElementById('option1').textContent = gameData[imageIndex].options[0];
    document.getElementById('option2').textContent = gameData[imageIndex].options[1];

    //Clear previous result message
    document.getElementById('resultMessage').textContent = "";

}
//Function to check if the option is correct
function checkOption(optionIndex) {

    const resultMessage = document.getElementById('resultMessage');
    const correctOption = gameData[imageIndex].correctOption;

    if (optionIndex === correctOption) {
        resultMessage.style.color = "green";
        incrementScore()
    } else {
        resultMessage.style.color = "red";
        incrementWrongAnswer()
    }

    // Time needed to a load a new image
    setTimeout(loadNewImage, 500);
}

//Get the current score and increment it by 1

function incrementScore() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerHTML = ++oldScore;
}

//Get the total number of incorrect scores and increment it by 1

function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerHTML = ++oldScore;
}

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime === 0) {
        clearInterval(countDownTimerId);
        clearInterval(timerId)
        alert('Your final score is ' + document.getElementById("score").innerText);
    }
}

// Function to start the game

function startGame() {
    if (!timerStarted) { 
        loadNewImage();
        timerStarted = true;
        countDownTimerId = setInterval(countDown, 1000);
    }
}


startButton.addEventListener('click', startGame);

window.onload = loadNewImage;
