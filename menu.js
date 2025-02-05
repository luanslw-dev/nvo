let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu');

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

// Obtenha o botão
const backToTopButton = document.getElementById('backToTopBtn');

// Quando o usuário rolar para baixo 300px a partir do topo da página, exiba o botão
window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopButton.style.display = 'block'; // Mostra o botão
    } else {
        backToTopButton.style.display = 'none'; // Esconde o botão
    }
};

// Quando o usuário clicar no botão, volta para o topo
backToTopButton.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Rolagem suave até o topo
});
