// tutaj rozwiązanie

let size = 10;
const btn = document.querySelector("button");
const li = document.querySelectorAll("li");

// PĘTLA
// const UP = function() {
//     for(let i = 0; i < li.length; i++){

//         li[i].style.display = "block";
//         li[i].style.fontSize = `${size}px`;

//     }

// size++

// }


// FOREACH

const UP = () => {
    size++;
    li.forEach((li)=>{
        li.style.display = "block";
        li.style.fontSize = size + "px";

    })

}


btn.addEventListener("click", UP);


