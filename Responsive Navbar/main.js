const hamBtn = document.querySelector('.hamburger-button');
const navbarLinks = document.querySelector('.navbar-links');

/** USING BOOLEAN FLAG **/
// let activated = false;
// hamBtn.addEventListener('click', () => {
//     if (!activated) {
//         hamBtn.classList.add('active');
//         navbarLinks.classList.add('active');
//         activated = true;
//     } else {
//         hamBtn.classList.remove('active');
//         navbarLinks.classList.remove('active');
//         activated = false;
//     }
// });


/** USING TOGGLE */
hamBtn.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
    soundEffect();
})

function soundEffect() {
    const ham = new Audio('pop.mp3');
    ham.volume = 0.3;
    ham.play();
}


