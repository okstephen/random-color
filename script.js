// const colorChangeElement = document.getElementById('colorChangeElement');
// const changeColorButton = document.getElementById('changeColorButton');

// changeColorButton.addEventListener('click', () => {
//     // Generate a random color
//     const randomColor = getRandomColor();

//     // Change the background color of the round element
//     colorChangeElement.style.backgroundColor = randomColor;
// });

// function getRandomColor() {
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }

const color = ["blue", "green", "red", "orange", "purple", "cyan", "white", "black", "peach", "grey"];

const circle = document.getElementById('colorChangeElement')

const colorChange = document.getElementById('changeColorButton')

colorChange.addEventListener('click', () => {
    const randomNumber = Math.floor(Math.random() * 10);
    circle.style.backgroundColor = color[randomNumber]
})


