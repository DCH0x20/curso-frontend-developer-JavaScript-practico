const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
menuEmail.addEventListener('click', toggleDesktopMenu);
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
