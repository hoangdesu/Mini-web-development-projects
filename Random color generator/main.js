let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];

function randomHexColorGenerator() {
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * 16);
        hexColor += hex[index];
        // console.log(color);
    }
    return hexColor;
}

const changeColorBtn = document.querySelector('button');
const body = document.querySelector('body');
const colorCode = document.querySelector('h3');

changeColorBtn.addEventListener('click', () => {
    let newColor = randomHexColorGenerator();
    body.style.background = newColor;
    // body.style.color = randomHexColorGenerator();
    console.log(newColor);
    colorCode.innerHTML = "Color code : " + newColor + " | "  + body.style.backgroundColor;
})


// let i = 0;
// while (i < 10) {
// console.log(randomHexColorGenerator());
// i++;
// }
