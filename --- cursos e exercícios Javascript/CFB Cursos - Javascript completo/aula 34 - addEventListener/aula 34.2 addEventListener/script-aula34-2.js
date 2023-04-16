//tres formas de executar a msm função

// ooooou posso fazer assim:

// const c1 = document.querySelector("#c1")
// const msg =()=> {       //Arrow function 1-declare uma variável 2-sinal de igual 3-parametros 4-arrow 5-chaves
//     alert ("CLICOU!")   
// }
// c1.addEventListener("click",msg)     //vou add um escutador no 'c1'

// passo a passo:

// 1 - chamei o elemento do html que quero trabalhar e atribuí a ele uma variável 'c1'
// 2 - criei uma função que desejo que aconteça
// 3 - juntei a variável criada 'c1' a um 'ouvidor de evento click'
// 4 - o ouvidor vai executar a variável'msg' criada lá em cima, que tem uma função de exibir o 'alert'



// ooooou posso fazer assim:

// const c1 = document.querySelector("#c1")
// c1.addEventListener("click", ()=>{
//     alert ('CLICOU!')
// })

// ooooou posso fazer assim:

const c1 = document.querySelector("#c1")

const msg =()=> {
    alert("Clicou!")
}

c1.addEventListener("click",()=>{
    msg()
})