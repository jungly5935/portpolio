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

//home밑으로 스크롤내리면 up버튼 나타나게 하기
const upBtn = document.querySelector(".upBtn i");
window.addEventListener('scroll', () =>{
    if(window.scrollY >= home_container.scrollHeight){
        upBtn.classList.add("visible");
    }
    else {
        upBtn.classList.remove("visible");
    }
    upBtn.addEventListener('click', ()=>{
        scrollIntoView("#home");
    })

})




//공통함수
function scrollIntoView(selector){
    document.querySelector(selector).scrollIntoView({behavior:'smooth'});
}