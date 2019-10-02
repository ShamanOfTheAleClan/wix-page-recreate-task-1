
function hide(e) {
    e.classList.add('hidden');
}
function unhide(e) {
    e.classList.remove('hidden');
}
function opaque(e){
    e.classList.remove('transparent');
}
function opaqueNot(e) {
    e.classList.add('transparent');
}
function display(e) {
    e.classList.remove('undisplayed');
}
function undisplay(e) {
    e.classList.add('undisplayed');
}

let doc = {
    get: function(e){
      return document.querySelector(e);
    },
    getAll: function(e){
      return document.querySelectorAll(e);
    },
    id: function(e){
      return document.getElementById(e);
    },
    create: function(e){
        return document.createElement(e);
    }
};


let burger = doc.get('.burger');
let menu = doc.get('nav').querySelector('.wrapper');

burger.addEventListener('click', function(e) {
    if (burger.classList.contains('burger-active')){
        burger.classList.remove('burger-active');
        menu.classList.add('menu-hidden');
    }
    else {
        burger.classList.add('burger-active');
        menu.classList.remove('menu-hidden');
    }
});
window.addEventListener('scroll', function(){
    if (pageYOffset > 600) {
        doc.get('video').style.display="none";
    }
    else {
        doc.get('video').style.display="block";
    }
})

// lazy-load
let sections = doc.getAll('section');
function showSection(){
    for(i=0;i<sections.length;i++) {
        sections[i]
        let dist = sections[i].offsetTop - window.innerHeight;
        let view = pageYOffset;
        if (view >= dist+50) {
            unhide(sections[i]);
        }
    }
}
window.addEventListener('scroll', showSection);
window.addEventListener('load', showSection);



let hearts = doc.getAll('.heart');


for(i=0; i<hearts.length;i++) {

    
    hearts[i].addEventListener('click', function(f){
        hearts[i].querySelector('.count');
        hearts[i].querySelector('.count').dataset.count;
        hearts[i].querySelector('.count').dataset.count++;
        hearts[i].querySelector('.count').innerHTML = hearts[i].querySelector('.count').dataset.count;
        if (hearts[i].querySelector('.count').dataset.count == 20) {
            alert('Please stop');
        }
        if (hearts[i].querySelector('.count').dataset.count == 40) {
            alert('No, really, stop');
        }
        if (hearts[i].querySelector('.count').dataset.count == 100) {
            alert('You REALLY don\'t have anything better to do??');
        }
    })
};

doc.get('.back-to-top').addEventListener('click', function(e){
    window.scrollTo(0,0);
});


function showButtonToTop(){
    let button = doc.get('.back-to-top');
    if (doc.get('.mobile').classList.contains('selected-display-type') && pageYOffset >= 200) {
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


let pc = doc.get('.pc');
let mobile = doc.get('.mobile');
let body = doc.get('body');
doc.get('.display-switch.mobile').addEventListener('click', function(){        
    
    if (pc.classList.contains('selected-display-type')) {
        pc.classList.remove('selected-display-type');
        body.classList.remove('pc-mode');
        mobile.classList.add('selected-display-type');
        body.classList.add('mobile-mode');
        showButtonToTop();
        doc.get('section.empty').style.backgroundPosition='top';
        // enter mobile mode
        let sections = doc.getAll('section');
        for (i=1;i<sections.length;i++) {
            unhide(sections[i]);
        }
    }
});
    doc.get('.display-switch.pc').addEventListener('click', function(){
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
let chatCloseButton = doc.get('.chat-close');
chatCloseButton.addEventListener('click', function(e){
    doc.get('body').classList.remove('chat-open');
})
doc.get('.chat-icon').addEventListener('click', function(e){
    doc.get('body').classList.add('chat-open');
})

// chat activate on chat input focus
doc.get('.chat-input').addEventListener('click', function(e) {
    if (doc.get('.chat-wrap').classList.contains('chat-active')) {}
    else {
        let h3 = doc.get('.chat-hero').querySelector('h3');
        h3.style.opacity="0";
        h3.style.display='none';
        doc.get('.chat-hero').querySelector('p').style.opacity="0";
        doc.get('.chat-wrap').classList.add('chat-active');
        setTimeout(function(){
            h3.style.opacity='1';
            h3.style.display='block';
            h3.style.fontSize ='18px';
            h3.style.marginBottom='0px';
        },200);
    }
});

// chat deactivate on chat hero image click
doc.get('.chat-hero').addEventListener('click', function(e){
    if (e.target != document.activeElement) {
        let h3 = doc.get('.chat-hero').querySelector('h3');
        h3.style.opacity='0';
        h3.style.display='none';
        doc.get('.chat-wrap').classList.remove('chat-active');
        setTimeout(function(){
            h3.style.opacity='1';
            h3.style.display="block";
            h3.style.marginBottom="15px";
            h3.style.fontSize="23px";
            doc.get('.chat-hero').querySelector('p').style.opacity="1";
        },200);
    }
})

let firstResponse = doc.create('div');
// create that form from first bot response.
let fieldset = doc.create('fieldset');
let input1 = doc.create('input');
let input2 = doc.create('input');
let submit = doc.create('input');
let placeholder1 = doc.create('div');
let placeholder2 = doc.create('div');

placeholder1.classList.add('label');
placeholder2.classList.add('label');

firstResponse.appendChild(fieldset);
fieldset.appendChild(input1);
fieldset.appendChild(placeholder1);
fieldset.appendChild(input2);
fieldset.appendChild(placeholder2);
fieldset.appendChild(submit);

placeholder1.innerText='Name';
placeholder2.innerText='Email';


input1.setAttribute('type','text');
input1.setAttribute('required','true')
input2.setAttribute('type','email');
input2.setAttribute('required','true');
submit.setAttribute('type','submit');


// send typed text as message
function sendMessage(){
    let message = doc.get('.chat-input');
    let chat = doc.get('.chat-field');
    
    // send message
    if (message.value != '') {
        let chatBubble = doc.create('div');
        chatBubble.innerText = message.value;
        message.value= '';
        chatBubble.classList.add('chat-me');
        chat.appendChild(chatBubble);
    }
    // if first message - show time
    if ((chat.querySelector('.chat-me')!=null) &&(doc.get('.chat-date') == null)) {
        let date = doc.create('div');
        let options = { hour: 'numeric', minute: 'numeric'  };
        let today  = new Date();
        date.innerText = today.toLocaleTimeString("en-US", options).toUpperCase();
        date.classList.add('chat-date');
        chat.insertBefore(date, chat.firstChild);
    }
    // always show newest message
    function showNewestMessage(){
        chat.lastElementChild.scrollIntoView();
    }

    // automated reply on first message
    if (chat.childElementCount == 2) {
        let typing = doc.create('div');
        let loadingFx1 = doc.create('span');
        let loadingFx2 = doc.create('span');
        let loadingFx3 = doc.create('span');
        showNewestMessage();
        setTimeout(function(){
            typing.appendChild(loadingFx1);
            typing.appendChild(loadingFx2);
            typing.appendChild(loadingFx3);
            typing.classList.add('typing');
            chat.appendChild(typing);
            showNewestMessage();
            setTimeout(function(){
                typing.style.display="none";
                let chatBubble2 = doc.create('div');
                chatBubble2.innerText = "Hey there, please leave your details so we can contact you even if you are no longer on the site.";
                chatBubble2.classList.add('chat-you');
                chat.appendChild(chatBubble2);

                let chatBubble3 = doc.create('div');
                chatBubble3.appendChild(firstResponse);
                chatBubble3.classList.add('chat-you');
                chat.appendChild(chatBubble3);
                showNewestMessage();
            },4000);
        },500);
    }

    // if this is not the first message, reply with random shit
    else {
        let typing = doc.create('div');
        let loadingFx1 = doc.create('span');
        let loadingFx2 = doc.create('span');
        let loadingFx3 = doc.create('span');
        showNewestMessage();
        setTimeout(function(){
            typing.appendChild(loadingFx1);
            typing.appendChild(loadingFx2);
            typing.appendChild(loadingFx3);
            typing.classList.add('typing');
            chat.appendChild(typing);
            showNewestMessage();
            setTimeout(function(){
                typing.style.display="none";
                let chatBubble2 = doc.create('div');
                chatBubble2.innerHTML = "That's very interesting, but I don't have time for that ;)";
                chatBubble2.classList.add('chat-you');
                chat.appendChild(chatBubble2);
                showNewestMessage();
            },4000);
        },500);
    }
}

// create chat bubbles
doc.get('.enter').addEventListener('click', sendMessage);

// chat clip/enter button transform on input
doc.get('.chat-input').addEventListener('keypress', function(e){
    setTimeout(function(){
        if (e.target.value != "") {
            doc.get('.clip').classList.add('transparent');
            doc.get('.enter').classList.remove('transparent');  
        }
        else {
            doc.get('.clip').classList.remove('transparent');
            doc.get('.enter').classList.add('transparent');
        };
    },1)
    
    // send message on enter
    if(e.code == "Enter") {
        sendMessage();
    }
});

// update enter/attatchement icons on mouseclick
if (doc.get('.chat-wrap').classList.contains('chat-open')){
    doc.get('body').addEventListener('click', function() {
        if (doc.get('.chat-input').value != "") {
            doc.get('.clip').classList.add('transparent');
            doc.get('.enter').classList.remove('transparent');        
        }
        else {
            doc.get('.clip').classList.remove('transparent');
            doc.get('.enter').classList.add('transparent');
        }
    });
}

// IMPLEMENT show only one instance of chat "typing"
// doc.get().addEventListener('')
// IMPLEMENT JS menu scroll

// Empty section parallax
if(window.innerWidth > 767 || doc.id('displayPc').classList.contains('selected-display-type')) {
    window.addEventListener('scroll', function parallax(){
        if ((window.innerWidth > 767 || doc.id('displayPc').classList.contains('selected-display-type')) && pageYOffset > 1100) {
            doc.get('section.empty').offsetTop
            let startingPoint =doc.get('section.empty').offsetTop - 2383;
            let position = 0 - 1790 + (pageYOffset - startingPoint)*0.8;
            doc.get('section.empty').style.backgroundPosition="center "+position+"px";
        }
    })
}

doc.id('bookOnline').addEventListener('click', function showBookSection(){
    let sections = doc.getAll('section');

    for(i=0; i<sections.length;i++) {
        hide(sections[i]);
        setTimeout(function(){
            for(j=0; j<sections.length;j++) {
            undisplay(sections[j])
        }
        },1000);
    }
    setTimeout(function(){
        display(doc.get('.book-online'));
        
    },1000);
    setTimeout(function(){
        unhide(doc.get('.book-online'));
    },1200);
});

let menuItems = doc.getAll('.menu-wrap li');
for(i=0;i<5;i++) {
    menuItems[i].addEventListener('click',function exitBookShow(){
        let sections = doc.getAll('section');

    for(k=0; k<sections.length;k++) {
        hide(sections[k]);
        setTimeout(function(){
            for(j=0; j<sections.length;j++) {
            undisplay(sections[j])
        }
        },1000);
    }
    setTimeout(function(){
        
        for(j=0; j<sections.length;j++) {
            display(sections[j])
        }
        undisplay(doc.get('.book-online'))
        
    },1000);
    setTimeout(function(){
        for(j=0; j<sections.length;j++) {
            unhide(sections[j])
        }
    },1200);
    })
}








//# sourceMappingURL=prod.js.map
