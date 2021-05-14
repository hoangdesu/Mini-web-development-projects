const menuButton = document.querySelector('.menu-button');
let menuOpen = false;
menuButton.addEventListener('click', () => {
    if (!menuOpen) {
        menuButton.classList.add('animation');
        menuOpen = true;
    } else {
        menuButton.classList.remove('animation');
        menuOpen = false;
    }
})