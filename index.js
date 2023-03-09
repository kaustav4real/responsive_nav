const menu=document.getElementById('menu');
const mobileMenuHandler=document.getElementById('mobileMenu');

menu.addEventListener('click', ()=>{
    mobileMenuHandler.classList.toggle('displayMenu');
})