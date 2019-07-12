let menu = document.getElementsByClassName('.bar');
let nav = document.getElementsByClassName('.nav');

menu.addEventListener('click', function(e) {
    this.classList.toggle('is-open');
    nav.classList.toggle('is-open');
});

let clickEvent = new Event('click');

window.addEventListener('load', function(e) {
    menu.dispatchEvent(clickEvent);
    
    setTimeout(function() {
        menu.dispatchEvent(clickEvent);
    });
});