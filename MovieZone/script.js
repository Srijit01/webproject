'use strict';

/**
 * navbar variables
 */

const navOpenBtn = document.querySelector("[data-menu-open-btn]");
const navCloseBtn = document.querySelector("[data-menu-close-btn]");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

for (let i = 0; i < navElemArr.length; i++) {

  navElemArr[i].addEventListener("click", function () {

    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("active");

  });

}



/**
 * header sticky
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {

  window.scrollY >= 10 ? header.classList.add("active") : header.classList.remove("active");

});



/**
 * go top
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  window.scrollY >= 500 ? goTopBtn.classList.add("active") : goTopBtn.classList.remove("active");

});

// slider
var container=document.querySelector('.container');
var arrow_left=container.querySelector('#arrow-left');
var arrow_right=container.querySelector('#arrow-right');
var slide=document.querySelectorAll('.slide');
var slideIndex=0;
var durationSliderInterval= setInterval(nextSlide, 6000);


function resetActive(){
    slide.forEach(item=>{
        item.classList.remove("active");
    });
}
function resetInterval(){
    clearInterval(durationSliderInterval)
    durationSliderInterval= setInterval(nextSlide, 6000);
}
function changeSlide(){
    resetActive();
    slide[slideIndex].classList.add('active');
}
function nextSlide(){
    slideIndex<slide.length-1 ? slideIndex++ : slideIndex=0;
    changeSlide();
}
function previousSlide(){
    slideIndex>0 ? slideIndex-- : slideIndex=slide.length-1;
    changeSlide();
}

arrow_left.addEventListener('click',()=>{
    resetInterval();
    previousSlide();
});

arrow_right.addEventListener('click',()=>{
     resetInterval();
     nextSlide();
});


