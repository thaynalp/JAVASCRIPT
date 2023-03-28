const btn_verde = document.getElementById('btn-verde')
const btn_amarelo = document.getElementById('btn-amarelo')
const btn_vermelho = document.getElementById('btn-vermelho')
const body = document.querySelector('body')
const caixa_verde = document.getElementById('caixa-verde')
const caixa_amarela = document.getElementById('caixa-amarela')
const caixa_vermelha = document.getElementById('caixa-vermelha')

function ativarCor(){

    btn_verde.addEventListener('click',()=>{
        body.classList.toggle('verde')
        //   caixa.setAttribute('class','caixaApareceu')
        caixa_verde.classList.toggle('caixaVerdeApareceu')
        
    })

    btn_amarelo.addEventListener('click',()=>{
        body.classList.toggle('amarelo')
        caixa_amarela.classList.toggle('caixaAmarelaApareceu')

    })

    btn_vermelho.addEventListener('click',()=>{
        body.classList.toggle('vermelho')
        caixa_vermelha.classList.toggle('caixaVermelhaApareceu')
    })
    
}
ativarCor()




//TOGGLE - SIGNIFICA 'ALTERNAR'   
//"documento, na lista de classes alterne para verde"


//usando setAttribute

// btn_verde.addEventListener('click',()=>{
//     body.setAttribute('class','verde')
// })