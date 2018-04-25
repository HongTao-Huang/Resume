
window.onload = function(){
    loading();
    listentopBar();
}

function loading() {
    setTimeout(function () {
        upload.classList.remove('active');
    },1000);
}

function listentopBar() {
    window.onscroll = function () {
        if(window.scrollY > 0){
            header.classList.add('active');
        }
        else {
            header.classList.remove('active');
        }
    }
}