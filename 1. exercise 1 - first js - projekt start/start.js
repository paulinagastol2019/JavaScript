//1. pobieramy wszystkie potrzebne elementy z DOM

const btnBig = document.querySelector('.bigger');
const btnSmall = document.querySelector('.smaller');
const txt = document.querySelector('p');

//1b - określamy potrzebne dane

let textSize = 16; //początkowa wielkość dla p
txt.style.fontSize = textSize + 'px';
txt.style.backgroundColor = 'pink';
//3. Określenie akcji - napisanie funkcji
function actionB() {
    textSize++;
    txt.style.fontSize = textSize + 'px';
}

function actionS() {
    textSize--;
    txt.style.fontSize = textSize + 'px';
}
//2. Ustawienie nasłuchiwania na przyciskach na kliknięcie.
btnBig.addEventListener('click', actionB);
btnSmall.addEventListener('click', actionS);
