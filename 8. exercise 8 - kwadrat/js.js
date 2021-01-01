const sqr = document.createElement('div');
document.body.appendChild(sqr);

let grow = true; // flaga
let size = 100; // wielkość kwadratu
sqr.style.width = size + "px";
sqr.style.height = size + "px";

//maksymalna wielkość kwadrtau
//window.innerWidth * 0.5


const topDown = function(){
if ( grow == true) {
    size += 5;
    sqr.style.width = size + "px";
    sqr.style.height = size + "px";
}

else {
    size -= 5;
    sqr.style.width = size + "px";
    sqr.style.height = size + "px";
}

if ( size >= window.innerWidth/2) {
    grow = !grow
}

else if(size <= 0) {
    grow = !grow;   //odwrócony już na true
}
}


window.addEventListener("scroll", topDown)
