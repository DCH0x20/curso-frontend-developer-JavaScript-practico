const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click',toggleMobileMenu)

function toggleDesktopMenu(){
    //quita o pone la clase inactive dependiendo si ya lo tiene o no
    desktopMenu.classList.toggle('inactive');
    /*
    --- Mi Razonamiento
    if (menuEmail){
        desktopMenu.classList.remove('inactive');
    }else if(){
        desktopMenu.classList.add('inactive')
    }
    */
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
}
