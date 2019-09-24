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



let hearts = document.querySelectorAll('.heart');

hearts.forEach((e)=>{

    
    e.addEventListener('click', (f)=>{
        e.querySelector('.count');
        e.querySelector('.count').dataset.count;
        e.querySelector('.count').dataset.count++;
        e.querySelector('.count').innerHTML = e.querySelector('.count').dataset.count;
        if (e.querySelector('.count').dataset.count == 20) {
            alert('Please stop');
        }
        if (e.querySelector('.count').dataset.count == 40) {
            alert('No, really, stop');
        }
        if (e.querySelector('.count').dataset.count == 100) {
            alert('You REALLY don\'t have anything better to do');
        }
    })
})