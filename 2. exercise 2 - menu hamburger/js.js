const burger = document.querySelector(".burger");
const iconBurger = document.querySelector(".fa-bars");
const iconX = document.querySelector(".fa-times");
const column = document.querySelector("aside");

burger.addEventListener("click", function(){

iconBurger.classList.toggle("show"); // wyłączenie klasy
iconX.classList.toggle("show"); // dodanie klasy
column.classList.toggle("show"); // dodanie klasy
})