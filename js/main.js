// NAVBAR
function toggleMenu(){
    var menuToggle = document.querySelector('.toggle');
    var menu = document.querySelector('.nav-items');
    var navbar = document.querySelector('.navbar');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
    navbar.classList.toggle('active');
}