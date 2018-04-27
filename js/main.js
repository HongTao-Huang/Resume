
window.onload = function(){
    loading();
    listentopBar();
    linstenMenu();
    linstenNavA();
}

function loading() {
    setTimeout(function () {
        upload.classList.remove('active');
    },1000);
}

function listentopBar() {
    window.onscroll = function () {
        if(window.scrollY > 0){
            header.classList.add('sticky');
        }
        else {
            header.classList.remove('sticky');
        }
    }
}

function linstenMenu() {
    let liTags = document.querySelectorAll('nav.menu > ul > li');
    for(let i = 0; i < liTags.length; i++){
        liTags[i].onmouseenter = function (e) {
            e.currentTarget.classList.add('active');
        }
        liTags[i].onmouseleave = function (e) {
            e.currentTarget.classList.remove('active');
        }
    }
}

function linstenNavA() {
    let aTags = document.querySelectorAll('nav.menu > ul > li > a');
    for(let i = 0; i < aTags.length; i++){
        aTags[i].onclick = function (ev) {
            ev.preventDefault();
            let a = ev.currentTarget;
            let href = a.getAttribute('href');
            let element = document.querySelector(href);
            let top = element.offsetTop;
            window.scrollTo(0, top - 80);
        }
    }
}