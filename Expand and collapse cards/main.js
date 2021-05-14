const button = document.querySelector('.button');
const card = document.getElementsByClassName('card');
let isExpanded = false;

button.addEventListener('click', () => {
    if (!isExpanded) {
        card.style.height = "400px";
        isExpanded = true;
    } else {
        card.style.height = "300px";
        isExpanded = false;
    }
})

// button.addEventListener("click", () => {
//     console.log('oi)');
// })