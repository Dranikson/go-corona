$(document).ready(function() {
    $('.header__burger, .menu__link').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active');
        
        $('body').toggleClass('lock');
    }) 
});


// const headerMenu = document.getElementsByClassName('.header__menu');
// let index = 0;

// const activeMenu = a => {
//     for(n) {
//         headerMenu.classList.remove('active');
//     }
// }

// function close() {
//     if 
// }