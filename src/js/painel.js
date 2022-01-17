const imagensPainel = document.querySelectorAll('.imagem-painel')
const setaVoltar = document.getElementById('btn-voltar')
const setaAvancar = document.getElementById('btn-avancar')
let imagemAtual = 0

function esconderImagem() {
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    })
}

function mostrarImagem() {
    imagensPainel[imagemAtual].classList.add('mostrar')
}

setaVoltar.addEventListener('click', function() {
    imagemAtual--

    esconderImagem()
    mostrarImagem()
})

setaAvancar.addEventListener('click', function() {
    imagemAtual++

    esconderImagem()
    mostrarImagem()
})