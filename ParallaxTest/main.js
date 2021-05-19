const bg = document.querySelector('#bg');

window.addEventListener('scroll', function() {
    let y = window.scrollY;
    // bg.style.left = y*3 + 'px';  // -> cool revealing effect
    // bg.style.bottom = y*3 + 'px';  // -> cool revealing effect
    // bg.style.transform = `scale(${y});`
    // bg.style.top = y*3 + 'px';  // -> cool revealing effect

    console.log(y);

    if (y > window.innerHeight) {
        bg.style.display = 'none';
    } else {
        bg.style.display = 'block';

    }
})


