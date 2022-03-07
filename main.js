'use strict';
const navbar = document.getElementById("navbar");

// navbar보다 스크롤이 아래로가면 background를 pink로
window.addEventListener('scroll', () =>{
    let scrollLocation = document.documentElement.scrollTop;
    const navbarHeight = navbar.getBoundingClientRect().height; 
    console.log( );

    if(scrollLocation > navbarHeight) {
        navbar.style.background = "var(--color-pink)";
        navbar.style.transition = "all var(--animation-duration) ease-in";
    }
    else {
        navbar.style.background = "transparent";
    }
})


// Navbar 메뉴클릭하면 스크롤링
//ㄱㅗㅇ토ㅇ함수
function scrollIntoView(selector){
    document.querySelector(selector).scrollIntoView({behavior:'smooth'});
}
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener('click', (e)=>{
    scrollIntoView(e.target.dataset.link);
})

const contactMe = document.querySelector('.home__contact');
contactMe.addEventListener('click', ()=>{
    scrollIntoView('#contact');
})
