function unhide(e) {
    e.classList.remove('hidden');
}
function opaque(e){
    e.classList.remove('transparent');
}
function opaqueNot(e) {
    e.classList.add('transparent');
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
window.addEventListener('scroll', ()=>{
    if (scrollY > 600) {
        document.querySelector('video').style.display="none";
    }
    else {
        document.querySelector('video').style.display="block";
    }
})

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
});

document.querySelector('.back-to-top').addEventListener('click', (e)=>{
    window.scrollTo(0,0);
});


function showButtonToTop(){
    let button = document.querySelector('.back-to-top');
    if (document.querySelector('.mobile').classList.contains('selected-display-type') && scrollY >= 200) {
        opaque(button);
        console.log('opaque');
    }
    else {
        opaqueNot(button);
        console.log('transparent');
    }
}

window.addEventListener('load', showButtonToTop);
window.addEventListener('scroll', showButtonToTop);




document.querySelectorAll('.display-switch').forEach((e)=>{
    e.addEventListener('click', function(){
        let pc = document.querySelector('.pc');
        let mobile = document.querySelector('.mobile');
        let body = document.querySelector('body');
        if (pc.classList.contains('selected-display-type')) {
            pc.classList.remove('selected-display-type');
            body.classList.remove('pc-mode');
            mobile.classList.add('selected-display-type');
            body.classList.add('mobile-mode');
            showButtonToTop();
            // enter mobile mode
        }
        else if (mobile.classList.contains('selected-display-type')) {
            mobile.classList.remove('selected-display-type');
            body.classList.remove('mobile-mode');
            pc.classList.add('selected-display-type');
            body.classList.add('pc-mode');
            showButtonToTop();
            // enter pc mode
        }
    })
})

let chatCloseButton = document.querySelector('.chat-close');
chatCloseButton.addEventListener('click', (e)=>{
    document.querySelector('body').classList.remove('chat-open');
})
document.querySelector('.chat-icon').addEventListener('click', (e)=>{
    document.querySelector('body').classList.add('chat-open');
})

document.querySelector('.chat-input').addEventListener('click', function(e) {
    if (document.querySelector('.chat-wrap').classList.contains('chat-active')) {}
    else {
        let h3 = document.querySelector('.chat-hero').querySelector('h3');
        h3.style.opacity="0";
        h3.style.display='none';
        document.querySelector('.chat-hero').querySelector('p').style.opacity="0";
        
        document.querySelector('.chat-wrap').classList.add('chat-active');
        
        
        setTimeout(function(){
            h3.style.opacity='1';
            h3.style.display='block';
        },200);
    }
    
})
document.querySelector('.chat-hero').addEventListener('click', function(e){
    if (e.target != document.activeElement) {
        document.querySelector('.chat-hero').querySelector('h3').style.opacity='0';
        document.querySelector('.chat-hero').querySelector('h3').style.display='none';
        document.querySelector('.chat-wrap').classList.remove('chat-active');
        setTimeout(function(){
            document.querySelector('.chat-hero').querySelector('h3').style.opacity='1';
            document.querySelector('.chat-hero').querySelector('h3').style.display="block";
            document.querySelector('.chat-hero').querySelector('p').style.opacity="1";
        },200);
        

    }
    
})

document.querySelector('.enter').addEventListener('click', function(){
    let message = document.querySelector('.chat-input').value;
        if (message != '') {
            
            let chatBubble = document.createElement('div');
            chatBubble.innerText = message;
            document.querySelector('.chat-input').value = '';
            chatBubble.classList.add('chat-me');
            document.querySelector('.chat-field').appendChild(chatBubble);
        }
})
document.querySelector('.chat-input').addEventListener('keypress', function(e){
    if (document.querySelector('.chat-input').value != "") {
        document.querySelector('.clip').classList.add('transparent');
        document.querySelector('.enter').classList.remove('transparent');        
    }
    else {
        document.querySelector('.clip').classList.remove('transparent');
        document.querySelector('.enter').classList.add('transparent');
    }
    if(e.code == "Enter") {
        let message = e.target.value;
        if (message != '') {
            
            let chatBubble = document.createElement('div');
            chatBubble.innerText = message;
            e.target.value = '';
            chatBubble.classList.add('chat-me');
            document.querySelector('.chat-field').appendChild(chatBubble);
        }
    }
})
document.querySelector('body').addEventListener('click', function() {
    if (document.querySelector('.chat-input').value != "") {
        document.querySelector('.clip').classList.add('transparent');
        document.querySelector('.enter').classList.remove('transparent');        
    }
    else {
        document.querySelector('.clip').classList.remove('transparent');
        document.querySelector('.enter').classList.add('transparent');
    }
})