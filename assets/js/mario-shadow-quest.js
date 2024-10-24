const gameData = [
    { image: './assets/images/yoshi-shadow.jpg', options: ['Yoshi', 'Toad'], correctOption: 0 },
    { image: './assets/images/mario-shadow.jpg', options: ['Luigi', 'Mario'], correctOption: 1 },
    { image: './assets/images/luigi-shadow.jpg', options: ['Luigi', 'Yoshi'], correctOption: 0 },
    { image: './assets/images/toad-shadow.jpg', options: ['Peach', 'Toad'], correctOption: 1 }
];

let imageIndex;

function loadNewImage() {
    imageIndex = Math.floor(Math.random() * gameData.length);

    const gameImage = document.getElementById('shadowImage');
    shadowImage.src = gameData[imageIndex].image;
}
//Function to check if the option is correct
function checkOption(optionIndex) {

    const resultMessage = document.getElementById('resultMessage');

    const correctOption = gameData[currentImageIndex].correctOption;

    if (gameData[imageIndex].options[optionIndex] === gameData[imageIndex].options[correctOption]) {
        resultMessage.textContent = "Correct Well done";
        resultMessage.style.color = "green";
    } else {
        resultMessage.textContent = "Wrong! Try again.";
        resultMessage.style.color = "red";
    }

    // Time needed to a load a new image
    setTimeout(loadNewImage, 1500);
}

console.log(checkOption)

window.onload = loadNewImage;
