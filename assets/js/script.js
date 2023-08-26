

let overlay = document.querySelector('.overlay');
let navbar = document.querySelector('.navbar');
let menu_icon = document.querySelector('.menu_icon');

menu_icon.onclick = () => {
    navbar.classList.toggle('active')
    overlay.classList.toggle('active')
}
overlay.onclick = () => {
    navbar.classList.remove('active')
    overlay.classList.remove('active')
}

window.onscroll = () => {
    navbar.classList.remove('active')
    overlay.classList.remove('active')
}