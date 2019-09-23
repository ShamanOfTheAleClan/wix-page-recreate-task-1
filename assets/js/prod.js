function unhide(e) {
    e.classList.remove('hidden');
}


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


// lazy-load
let sections = document.querySelectorAll('section');
function showSection(){
    sections.forEach((f)=>{
        
        let dist = f.offsetTop - window.innerHeight;
        let view = pageYOffset;
        if (view >= dist+50) {
            unhide(f);
        }
    })
}
window.addEventListener('scroll', showSection);
window.addEventListener('load', showSection);

//# sourceMappingURL=prod.js.map
