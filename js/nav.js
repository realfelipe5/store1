const navbar = document.querySelector('nav');
const cart = document.getElementById('shopping');
window.onscroll = () => {
    if (window.scrollY > 610) {
        navbar.classList.add('sch');
        shopping.src = "img/b_cart.png";
    } else {
        navbar.classList.remove('sch');
        shopping.src = "img/w_cart.png";
    }
};