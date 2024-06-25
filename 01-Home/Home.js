//neste bloco estamos recuperando os botões
const hamburgerButton = document.querySelector('#hamburguerButton');

const closeButton = document.querySelector('#closeButton');

const mobileMenu = document.querySelector('#mobileMenu');

//....
hamburgerButton.addEventListener('click', function(){
    mobileMenu.classList.add('flex');
});

closeButton.addEventListener('click', function(){
    mobileMenu.classList.remove('flex');
});


window.revelar = ScrollReveal({reset:true});

revelar.reveal('.efeito-img-topo', {
  duration: 2000,
  distance: '90px'
});

