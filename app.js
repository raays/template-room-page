//variable sliders
let imgSliders = document.querySelectorAll(".slide");
let arrowLeft = document.getElementById("arrowLeft");
let arrowRight = document.getElementById("arrowRight");
let textSliders = document.querySelectorAll(".positionSlide")
let count = 0;

//variable toggleMenu
let closeMenu = document.getElementById('close');
let openMenu = document.getElementById('open');
let nav = document.getElementById('nav')

// function slide next
function slideNext(){
    imgSliders[count].classList.remove('activeSlide');
    textSliders[count].classList.remove('activeSlide');

    count < imgSliders.length - 1 ? count++ : count = 0;
    
    console.log(count);
    imgSliders[count].classList.add('activeSlide');
    textSliders[count].classList.add('activeSlide');
}

//function slide prev
function slidePrev(){
    imgSliders[count].classList.remove('activeSlide');
    textSliders[count].classList.remove('activeSlide');
    
    count > 0 ? count-- : count = imgSliders.length - 1;

    textSliders[count].classList.add('activeSlide');
    imgSliders[count].classList.add('activeSlide');
}

//Click evenement
arrowLeft.addEventListener('click', slidePrev);
arrowRight.addEventListener("click", slideNext);

openMenu.addEventListener("click", function(){
    nav.classList.toggle('activeSlide'); 
});

closeMenu.addEventListener("click", function(){
    nav.classList.toggle('activeSlide'); 
});