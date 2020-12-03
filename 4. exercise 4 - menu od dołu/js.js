const ar = document.querySelector(".arrow");
const nv = document.querySelector("nav");

ar.addEventListener("click", function(){
    ar.classList.toggle("on")
    nv.classList.toggle("on")
})