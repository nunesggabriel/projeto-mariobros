console.log('mostrar o document', document);

const botaoTrailer = document.querySelector(".botao-trailer");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

function alternarModal(){
    modal.classList.toggle("aberto");
}
// passo 2 - identificar quando o usuário clicar no botão 

botaoTrailer.addEventListener("click", () => {
    video.setAttribute("src", linkDoVideo);
})



const botaoFecharModal = document.querySelector(".fechar-modal");


botaoFecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "");
});

// passo 1 - pegar o elemento que representa o botão na tela usando o js

 // passo 4 - abrir a modal na tela
 // passo 3- pegar o elemento da modal no js
// objetivo 2
// quando usuário clicar no X , fechar modal
// identificar quando o usuário clique no X
    // passo 3 - fechar a modal 