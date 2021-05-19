// Element selector using Vanilla Javascript

const lang_wrapper = document.querySelector('ul');
const languages = document.querySelectorAll('li');
const h2 = document.querySelector('h2');
const p = document.querySelector('p');

// console.log(lang_wrapper.classList);
// lang_wrapper.addEventListener('click', () => {
//     lang_wrapper.classList.remove('active');
// })

// console.log('Active: ', document.querySelector('.active').classList);

languages.forEach(lang => {
    lang.addEventListener('click', () => {
        lang_wrapper.querySelector('.active').classList.remove('active');
        lang.classList.add('active');

        h2.textContent = content[lang.getAttribute('lang')]['title'];
        p.textContent = content[lang.getAttribute('lang')]['p'];

    })
})

let content = {
    english: {
        title: "Title",
        p: "Cool, mate"
    },
    japanese: {
        title: "タイトル",
        p: "おっぱい大好き"
    },
    vietnamese: {
        title: "Tai tồ",
        p: "Ahihi"
    }
}

// console.log(content["japanese"]["title"]);