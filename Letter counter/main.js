const textBox = document.querySelector('#text-input');
const counter = document.querySelector('#counter');
const letter = document.querySelector('label');
const resetBtn = document.querySelector('button');

counter.textContent = 0;

resetBtn.addEventListener('click', () => {
    textBox.value = '';
    letter.textContent = 'letter';
    counter.textContent = 0;
});

textBox.addEventListener('input', (event) => {
    counter.textContent = event.target.value;
    if (counter.textContent.length < 2) {
        letter.innerHTML = 'letter';
    } else {
        letter.innerHTML = 'letters';
    }
    counter.innerHTML = counter.textContent.length;
});

// let count = 0;
// if (event.key === 'Backspace') {
//     count--;
// } else {
//     count++;
// }
// if (count < 0) {
//     count = 0;
// } 