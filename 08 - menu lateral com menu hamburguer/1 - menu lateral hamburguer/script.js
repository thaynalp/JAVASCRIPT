const btnAbrir = document.querySelector('.btn-abrir')
const btnFechar = document.querySelector('.btn-fechar')
const menu = document.getElementById('menu')
const main = document.getElementById('main')

function abrirMenu(){
    btnAbrir.addEventListener('click',()=>{
        menu.style.width = '250px'
        main.style.marginLeft = '250px'
    })
}
abrirMenu()

function fecharMenu(){
    btnFechar.addEventListener('click',()=>{
        menu.style.width = '0px'
        main.style.marginLeft='0px'
    })
}
fecharMenu()