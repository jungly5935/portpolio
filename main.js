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

