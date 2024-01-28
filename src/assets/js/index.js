const botao = document.querySelector(".btn-plataforma");


const elementPlataformas = document.querySelector(".btn-plataforma . plataforma");

botao.addEventListener("click", () => {
        elementPlataformas.classList.toggle("ativo");
})