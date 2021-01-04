let size = 10;
let orderElement = 1;

const init = () => {
 // tutaj kod
let btn = document.createElement("button");
document.body.appendChild(btn);
btn.textContent = "Dodaj 10 elementów listy";
let ul = document.createElement("ul");
document.body.appendChild(ul);

btn.addEventListener("click", createLiElements);
}

const createLiElements = () => {
 // tutaj kod
for (let i = 0; i <= 10; i++) {
    let lis = document.createElement("li");
    lis.style.fontSize = `${size++}px`;
    lis.textContent = `Element nr ${orderElement++}`;
    document.querySelector("ul").appendChild(lis);
}

}

init()