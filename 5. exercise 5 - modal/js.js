const wrap = document.querySelector('.wrap');
const btn = document.querySelector('button');
const mdl = document.querySelector('.modal-wrap');
const spn = document.querySelector('span');

btn.addEventListener("click", function(){
    wrap.classList.add('blur');
    mdl.classList.add('active');
})

spn.addEventListener("click", function(){
    wrap.classList.remove('blur');
    mdl.classList.remove('active');
})