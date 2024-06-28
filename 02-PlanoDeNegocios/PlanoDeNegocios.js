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


//configuração do PAUSA/PLAY do vídeo no Bloco-01
const iframe = document.getElementById("myVideo");  //Estamos fazendo uma busca dentro do HTML para salvar o ID
const button = document.getElementById("myBtn");

function myFunction() { //Aqui criamos uma Função 
  
if (iframe.paused) { //se o vídeo estiver pausado execute: Play.
    iframe.play();
    button.innerHTML = "Pause"; // O innerHTML funciona como uma alteração textual dentro do HTML, usamos ele no Javascript para executar essa chamada.
  } else { //caso contrário, se o 
    iframe.pause();
    button.innerHTML = "Play";
  }
}


