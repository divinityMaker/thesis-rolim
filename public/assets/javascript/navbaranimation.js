window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('scrolling-active', windowPosition);

    function changeLogo() {
        document.getElementById('whiteLogo').style.display = "none";
        document.getElementById('originalLogo').style.display = "block";
    }
    function backLogo(){
        document.getElementById('whiteLogo').style.display = "block";    
        document.getElementById('originalLogo').style.display = "none";
    }
    if (windowPosition){
        changeLogo();
    }
    if (windowPosition == 0 ){
        backLogo();
    }
})

/* let search = document.querySelector('.search');
let clear = document.querySelector('.clear');

search.onclick = function(){
    document.querySelector(".search-box").classList.toggle('active');
}

clear.onclick = function(){
    document.querySelector(".search-box").classList.toggle('active');
} */


// SCRIPT DO SCROLL DOWN ON CLICK.

var arrowDown = document.getElementById('arrow');

arrowDown.addEventListener('click', function() {
    var modelos = document.getElementById('modelos');

    modelos.scrollIntoView();
});