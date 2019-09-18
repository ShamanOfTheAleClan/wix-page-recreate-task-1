let burger = document.querySelector('.burger');
let menu = document.querySelector('nav').querySelector('.wrapper');

burger.addEventListener('click', e => {
    if (burger.classList.contains('burger-active')){
        burger.classList.remove('burger-active');
        menu.classList.add('menu-hidden');
    }
    else {
        burger.classList.add('burger-active');
        menu.classList.remove('menu-hidden');
    }
});


