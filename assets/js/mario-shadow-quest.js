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

window.onload = loadNewImage;
