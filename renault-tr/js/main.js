/*gallery*/
var swiper = new Swiper('.swiper-container', {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
/*hamburger menu*/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let navbarLinks = document.querySelectorAll(".navbar a");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
}
navbarLinks.forEach(link => {
    link.onclick = () => {
        menuIcon.classList.remove("bx-x");
        navbar.classList.remove("active");
    };
});
