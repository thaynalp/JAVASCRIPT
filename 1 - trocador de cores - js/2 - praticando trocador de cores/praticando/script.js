const btn_verde = document.getElementById('btn-verde')
const btn_amarelo = document.getElementById('btn-amarelo')
const btn_vermelho = document.getElementById('btn-vermelho')
const body = document.querySelector('body')
// const p = document.querySelector('p')



function ativarCor(){

    btn_verde.addEventListener('click',()=>{
        body.classList.toggle('verde')
    })

    btn_amarelo.addEventListener('click',()=>{
        body.classList.toggle('amarelo')
    })

    btn_vermelho.addEventListener('click',()=>{
        body.classList.toggle('vermelho')
    })
    
}
ativarCor()

//TOGGLE - SIGNIFICA 'ALTERNAR'   
//"documento, na lista de classes alterne para verde"


//usando setAttribute

// btn_verde.addEventListener('click',()=>{
//     body.setAttribute('class','verde')
// })