let sec = document.querySelectorAll('section');
let li = document.querySelectorAll('header nav ul li a');

function activeMenu(){
    let len=sec.length;
    while(--len && window.scrollY + 97 < sec[len].offsetTop){}
    li.forEach(ltx => ltx.classList.remove("active"));
    li[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll", activeMenu)

let ul = document.querySelector('header nav ul');
let menu = document.querySelector('.menu');

menu.onclick =function(){
    ul.classList.toggle('active');
    menu.classList.toggle('active');

}

/////////////////////////////////
ScrollReveal({
    reset: true,
    distance:'60px',
    duration:2500,
    delay:300
});


ScrollReveal().reveal('.homeTitele, .note, .note2, .foter', {delay: 300, origin: 'left'});
ScrollReveal().reveal('.homeP, .info', {delay: 400, origin: 'bottom'});

ScrollReveal().reveal('.SM, .name, .position, .boit, .team', {delay: 500, origin: 'bottom'});
ScrollReveal().reveal('.dis, .dis2, .dis3', {delay: 400, origin: 'bottom'});