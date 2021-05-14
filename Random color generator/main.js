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
const hexText = document.querySelector('#hex');
const rgbText = document.querySelector('#rgb');
const copied = document.querySelector('#copied');
const textarea = document.createElement('textarea');

let newColor = '';

changeColorBtn.addEventListener('click', () => {
    newColor = randomHexColorGenerator();
    body.style.background = newColor;
    console.log(newColor);
    // colorCode.innerHTML = "Color code : " + newColor + " | "  + body.style.backgroundColor;
    hexText.innerHTML = newColor;
    rgbText.innerHTML = body.style.backgroundColor;
})


// Copy text functions

function copyText(color) {
    textarea.value = color;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'absolute';
    textarea.style.left = '-9999px';

    document.body.appendChild(textarea);
    textarea.select();
    textarea.setSelectionRange(0, 99999);
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert(textarea.value + ' copied!')
}

hexText.addEventListener('click', () => {
    copyText(newColor);
})

rgbText.addEventListener('click', () => {
    copyText(body.style.background);
})
