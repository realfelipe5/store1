const navbar = document.querySelector('nav');
const cart = document.getElementById('shopping');
window.onscroll = () => {
    if (window.scrollY > 610) {
        navbar.classList.add('sch');
    } else {
        navbar.classList.remove('sch');
    }
};