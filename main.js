'use strict';
const navbar = document.getElementById("navbar");

// navbar보다 스크롤이 아래로가면 background를 pink로
window.addEventListener('scroll', () =>{
    let scrollLocation = document.documentElement.scrollTop;
    const navbarHeight = navbar.getBoundingClientRect().height; 

    if(scrollLocation > navbarHeight) {
        navbar.style.background = "var(--color-pink)";
        navbar.style.transition = "all var(--animation-duration) ease-in";
    }
    else {
        navbar.style.background = "transparent";
    }
})


// Navbar 메뉴클릭하면 스크롤링

const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener('click', (e)=>{
    scrollIntoView(e.target.dataset.link);
})

const contactMe = document.querySelector('.home__contact');
contactMe.addEventListener('click', ()=>{
    scrollIntoView('#contact');
})

//스크롤링이 되면 home 투명하게 fadein
const home_container = document.querySelector('.home_container');
console.log(home_container.scrollHeight);
// console.log(window.innerHeight);

window.addEventListener('scroll', ()=>{
        console.log(window.scrollY);
        home_container.style.opacity = (home_container.scrollHeight - window.scrollY) / home_container.scrollHeight;
        // home_container.style.transition = "all var(--animation-duration) ease-in";
})



//공통함수
function scrollIntoView(selector){
    document.querySelector(selector).scrollIntoView({behavior:'smooth'});
}