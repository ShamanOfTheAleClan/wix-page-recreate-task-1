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


let pc = document.querySelector('.pc');
let mobile = document.querySelector('.mobile');
let body = document.querySelector('body');
document.querySelector('.display-switch.mobile').addEventListener('click', function(){        
    
    if (pc.classList.contains('selected-display-type')) {
        pc.classList.remove('selected-display-type');
        body.classList.remove('pc-mode');
        mobile.classList.add('selected-display-type');
        body.classList.add('mobile-mode');
        showButtonToTop();
        // enter mobile mode
    }
});
    document.querySelector('.display-switch.pc').addEventListener('click', function(){
    if (mobile.classList.contains('selected-display-type')) {
        mobile.classList.remove('selected-display-type');
        body.classList.remove('mobile-mode');
        pc.classList.add('selected-display-type');
        body.classList.add('pc-mode');
        showButtonToTop();
        // enter pc mode
    }
    })



// CHAT functionality
// chat open
let chatCloseButton = document.querySelector('.chat-close');
chatCloseButton.addEventListener('click', (e)=>{
    document.querySelector('body').classList.remove('chat-open');
})
document.querySelector('.chat-icon').addEventListener('click', (e)=>{
    document.querySelector('body').classList.add('chat-open');
})

// chat activate on chat input focus
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
            h3.style.fontSize ='18px';
            h3.style.marginBottom='0px';
        },200);
    }
});

// chat deactivate on chat hero image click
document.querySelector('.chat-hero').addEventListener('click', function(e){
    if (e.target != document.activeElement) {
        let h3 = document.querySelector('.chat-hero').querySelector('h3');
        h3.style.opacity='0';
        h3.style.display='none';
        document.querySelector('.chat-wrap').classList.remove('chat-active');
        setTimeout(function(){
            h3.style.opacity='1';
            h3.style.display="block";
            h3.style.marginBottom="15px";
            h3.style.fontSize="23px";
            document.querySelector('.chat-hero').querySelector('p').style.opacity="1";
        },200);
    }
})

let firstResponse = document.createElement('div');
// create that form from first bot response.

function sendMessage(){
    let message = document.querySelector('.chat-input');
    let chat = document.querySelector('.chat-field');
    
    if (message.value != '') {
        let chatBubble = document.createElement('div');
        chatBubble.innerText = message.value;
        message.value= '';
        chatBubble.classList.add('chat-me');
        chat.appendChild(chatBubble);
    }
    if ((chat.querySelector('.chat-me')!=null) &&(document.querySelector('.chat-date') == null)) {
        let date = document.createElement('div');
        let options = { hour: 'numeric', minute: 'numeric'  };
        let today  = new Date();
        date.innerText = today.toLocaleTimeString("en-US", options).toUpperCase();
        date.classList.add('chat-date');
        chat.insertBefore(date, chat.firstChild);
    }
    chat.lastElementChild.scrollIntoView();
    if (chat.childElementCount == 2) {
        let typing = document.createElement('div');
        let loadingFx1 = document.createElement('span');
        let loadingFx2 = document.createElement('span');
        let loadingFx3 = document.createElement('span');
        setTimeout(function(){
            typing.appendChild(loadingFx1);
            typing.appendChild(loadingFx2);
            typing.appendChild(loadingFx3);
            typing.classList.add('typing');
            chat.appendChild(typing);
            setTimeout(function(){
                typing.style.display="none";
                let chatBubble2 = document.createElement('div');
                chatBubble2.innerText = "Hey there, please leave your details so we can contact you even if you are no longer on the site.";
                chatBubble2.classList.add('chat-you');
                chat.appendChild(chatBubble2);

                let chatBubble3 = document.createElement('div');
                chatBubble3.appendChild = firstResponse;
                chatBubble3.classList.add('chat-you');
                chat.appendChild(chatBubble3);
            },4000);
        },500);
    }
    else {
        let typing = document.createElement('div');
        let loadingFx1 = document.createElement('span');
        let loadingFx2 = document.createElement('span');
        let loadingFx3 = document.createElement('span');
        setTimeout(function(){
            typing.appendChild(loadingFx1);
            typing.appendChild(loadingFx2);
            typing.appendChild(loadingFx3);
            typing.classList.add('typing');
            chat.appendChild(typing);
            setTimeout(function(){
                typing.style.display="none";
                let chatBubble2 = document.createElement('div');
                chatBubble2.innerHTML = "That's very interesting, but I don't have time for that ;)";
                chatBubble2.classList.add('chat-you');
                chat.appendChild(chatBubble2);
            },4000);
        },500);
    }
}

// create chat bubbles
document.querySelector('.enter').addEventListener('click', sendMessage);

// chat clip/enter button transform on input
document.querySelector('.chat-input').addEventListener('keypress', function(e){
    if (document.querySelector('.chat-input').value != "") {
        document.querySelector('.clip').classList.add('transparent');
        document.querySelector('.enter').classList.remove('transparent');        
    }
    else {
        document.querySelector('.clip').classList.remove('transparent');
        document.querySelector('.enter').classList.add('transparent');
    };
    // send message on enter
    if(e.code == "Enter") {
        sendMessage();
    }
});

document.querySelector('body').addEventListener('click', function() {
    if (document.querySelector('.chat-input').value != "") {
        document.querySelector('.clip').classList.add('transparent');
        document.querySelector('.enter').classList.remove('transparent');        
    }
    else {
        document.querySelector('.clip').classList.remove('transparent');
        document.querySelector('.enter').classList.add('transparent');
    }
});



