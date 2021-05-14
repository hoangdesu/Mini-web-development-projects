const content = document.querySelector('h1');

content.textContent = 'This H1 title is created by JS';

let clickMe = document.querySelector('#click');


const a = document.querySelector(".counts");
const tit = document.querySelector("title");
let countsNum = 0;
clickMe.addEventListener("click", () => {
    countsNum++;
    a.textContent = "Counts: " + countsNum;
    tit.textContent = "Counts: " + countsNum;
    console.log(countsNum);
})


const reset = document.querySelector("#reset");

reset.addEventListener('click', () => {
    countsNum = 0;
    a.textContent = "Counts: " + countsNum;
    tit.textContent = "Counts: " + countsNum;
})
let counttit = 0;
content.addEventListener('mouseover', () => {
    counttit++;
    tit.textContent = counttit;
    console.log("I LOVE TITle");
})