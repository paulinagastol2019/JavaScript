// $(".burger").on("click", function () {
//     $(".fas, aside, .wrapper").toggleClass("show");

// })
// const burger = document.querySelector(".burger");
// const iconBurger = document.querySelector(".fa-bars");
// const iconX = document.querySelector(".fa-times");
// const column = document.querySelector("aside");
// const wrap = document.querySelector(".wrapper");

// burger.addEventListener("click", function(){

// iconBurger.classList.toggle("show"); // wyłączenie klasy
// iconX.classList.toggle("show"); // dodanie klasy
// column.classList.toggle("show"); // dodanie klasy
// wrap.classList.toggle("show"); // dodanie klasy
// })

const burger = document.querySelector(".burger");
const activeElement = document.querySelectorAll(".active");

burger.addEventListener("click", function(){
    for(let i = 0; i < activeElement.length; i++){
        activeElement[i].classList.toggle("show");
    }

})