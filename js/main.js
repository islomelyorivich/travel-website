
// ///////// for navbar
let menu = document.querySelector("#menu-bar");

let navbar = document.querySelector(".navbar");

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    searchbtn.classList.remove('fa-times');
    searchform.classList.remove('active');
    loginform.classList.remove('active');
}

menu.addEventListener('click', ()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

///////////////// searchform

let searchform = document.querySelector(".search-bar-container");
let searchbtn = document.querySelector("#search-btn");

searchbtn.addEventListener('click',()=>{
    searchbtn.classList.toggle('fa-times');
    searchform.classList.toggle('active');
});

let formBtn = document.querySelector("#login-btn");
let loginform = document.querySelector('.login-container');
let close = document.querySelector("#form-close");


formBtn.addEventListener('click',()=>{
    loginform.classList.add("active");
});

close.addEventListener('click',()=>{
    loginform.classList.remove("active");
});


let videobtn = document.querySelectorAll('.vid-btn');



videobtn.forEach(a =>{
    a.addEventListener('click',()=>{
        document.querySelector('.controls .active').classList.remove("active");
        a.classList.add('active');

        let src = a.getAttribute("data-src");
        document.querySelector("#video-slider").src = src;
    })
});


let swiper = new Swiper(".review-slider",{
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    breakpoints: {
        600: {
            slidesPerView: 1,
        },
        768:{
            slidesPerView: 2,
        },
        1000:{
            slidesPerView: 3,
        },
    },
});


let swiper1 = new Swiper(".brand-slider",{
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    breakpoints: {
        468: {
            slidesPerView: 2,

        },
        768: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 4,
        },
        1200:{
            slidesPerView: 5,
        },
    },
});
