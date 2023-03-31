const btnAbrir = document.getElementById('btnAbrir')
const btnFechar = document.getElementById('btnFechar')
const menu = document.getElementById('menu')
const main = document.querySelector('main')
 
function abrir(){
    menu.style.width='250px'
    main.style.marginLeft='250px'
}

function fechar(){
    menu.style.width='0px'
    main.style.marginLeft='0px'
}



btnFechar.addEventListener('click',(fechar))
btnAbrir.addEventListener('click',(abrir))