const btn_iniciar = document.getElementById('btn-iniciar')
const btn_pausar = document.getElementById('btn-pausar')
const btn_zerar = document.getElementById('btn-zerar')
const mostrarNaTela = document.getElementById('mostrarNaTela')


let segundos=0
let minutos=0
let horas=0
let interval


function doisDigitos(digito){
    if(digito < 10){
       return `0${digito}`
    } else {
        return digito
    }
}

function iniciar (){
    contando()
   interval = setInterval(contando,1)
}

function pausar (){
    clearInterval(interval)
}

function zerar(){
    mostrarNaTela.innerText = '00:00:00'
}

function contando(){
    if(segundos == 60){
        segundos=0
        minutos++
    if(minutos == 60){
        minutos=0
        horas++
    }
    }
    mostrarNaTela.innerText = `${doisDigitos(horas)}:${doisDigitos(minutos)}:${doisDigitos(segundos++)}`
}
contando()


btn_iniciar.addEventListener('click',(iniciar))
btn_pausar.addEventListener('click',(pausar))
btn_zerar.addEventListener('click',(zerar))
