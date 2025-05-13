const menuBtn = document.getElementById('menu-btn');
const menuClose = document.getElementById('menu-close');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('-translate-x-full');
});

menuClose.addEventListener('click', () => {
    mobileMenu.classList.add('-translate-x-full');
});
