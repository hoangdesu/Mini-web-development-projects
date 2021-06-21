const openBtn = document.querySelector('#openBtn');
const closeBtn = document.querySelector('#closeBtn');
const modal = document.querySelector('.modal');

openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', closeOutside);

function openModal() {
    modal.style.display = 'flex';
}

function closeModal(e) {
    modal.style.display = 'none';
}

function closeOutside(e) {
    if(e.target == modal) {
        modal.style.display = 'none';
    }
}
