const p_array=document.querySelector("#array")
const btnVerificar=document.querySelector("#btnVerificar")
const resultado=document.querySelector("#resultado")

// const elementos_array=[21,25,19,20,18,18,22,2]
// p_array.innerHTML="["+elementos_array+"]"

// btnVerificar.addEventListener("click",(evt)=>{
//     const retorno = elementos_array.every((e,i)=>{
//         if(e<18){
//             resultado.innerHTML=`Array não conforme na posição ${i+1}`
//         }
//         return e>=18
//     })
//     if(retorno){
//         resultado.innerHTML="OK"
//     }
//     //console.log(ret)
// })

//array no conforme - retorna OK
const elementos_array=[21,25,19,20,18,18,22]
p_array.innerHTML="["+elementos_array+"]"

btnVerificar.addEventListener("click",(evt)=>{
    const retorno = elementos_array.every((e,i)=>{
        if(e<18){
            resultado.innerHTML=`Array não conforme na posição ${i+1}`
        }
        return e>=18
    })
    if(retorno){
        resultado.innerHTML="OK"
    }
    //console.log(ret)
})