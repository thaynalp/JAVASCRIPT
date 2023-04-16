const p_array = document.querySelector("#array")
const txt_pesquisar = document.querySelector("#txt_pesquisar")
const btnPesquisar = document.querySelector("#btnPesquisar")
const resultado = document.querySelector("#resultado")


const elementos_array = ["2","5","8","10","20","30","100"]
p_array.innerHTML = `[${elementos_array}]`

btnPesquisar.addEventListener("click", (evt)=>{
    resultado.innerHTML = `valor não encontrado`
    const retorno = elementos_array.find((e,i)=>{
        if(e == txt_pesquisar.value){
            resultado.innerHTML = `valor encontrado: ${e} na posição ${i+1}` // i+1 significa que a contagem do índice vai começar do 1 e nao do zero
            return e
        }
    })
        console.log(retorno)
 })


 
 // 'find' vai percorrer os elementos do array e seus índices e retirar de acordo com a função estabelecida
 // a função diz:
 // 1- 'se' p elemenento do array, que está em letras maiusculas, for 'igual' ao que for digitado no 'espaço de pesquisar', que tbm tá em maiuscula(para nao dar divergencia) 
 // 2 - vai aparecer no campo 'resultado' o texto: 'valor encontrado + o elemento do array + a posição em que ele está (i)
// e retorne o 'elemento do array' 

// const p_array=document.querySelector("#array")
// const txt_pesquisar=document.querySelector("#txt_pesquisar")
// const btnPesquisar=document.querySelector("#btnPesquisar")
// const resultado=document.querySelector("#resultado")

// const elementos_array=["html","css","javascript"]
// p_array.innerHTML="["+elementos_array+"]"

// btnPesquisar.addEventListener("click",(evt)=>{
//     resultado.innerHTML="Valor não encontrado"
//     const ret=elementos_array.find((e,i)=>{
//         if(e.toUpperCase()===txt_pesquisar.value.toUpperCase()){
//             resultado.innerHTML="Valor encontrado " + e + " na posição " + i
//             return e
//         }
//     })
//     console.log(ret)
// })
