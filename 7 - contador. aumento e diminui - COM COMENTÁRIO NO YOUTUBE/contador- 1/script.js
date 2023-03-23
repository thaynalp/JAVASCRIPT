const btnDiminuir = document.getElementById('btnDiminuir')
const btnAumentar = document.getElementById('btnAumentar')
const btnResetar = document.getElementById('btnResetar')
const p = document.getElementById('contador')


//estado da aplicação
let numero = 0

// alteradores de estado da aplicação
function diminuir(){
    btnDiminuir.addEventListener('click',()=>{
       numero--
       mostrarNaTela()
    })
}
diminuir()

function aumentar (){
    btnAumentar.addEventListener('click',()=>{
        numero++
        mostrarNaTela()
    })
}
aumentar()

function resetar (){
    btnResetar.addEventListener('click',()=>{
        if(numero > 0 || numero < 0){
            numero = 0
            mostrarNaTela()
        }
    })
}
resetar()

//jogar o estado da app na tela
function mostrarNaTela(){
    p.innerText = numero   //p.inntext (o que estiver contido no 'p' receberá o valor de 'numero' )
}
mostrarNaTela()


//quando o contador ficar negativo, o nº ficará vermelho
function mudaCorVermelho(){
    btnDiminuir.addEventListener('click',()=>{
    if(numero < 0 ){
        console.log('é menor que zero')
        p.style.color="red"
    }
})
}
mudaCorVermelho()

function mudaCorBranco(){
    btnAumentar.addEventListener('click',()=>{
   if (numero >= 0){
        console.log('é zero ou maior que zero')
        p.style.color="white"
    }
})
}
mudaCorBranco()