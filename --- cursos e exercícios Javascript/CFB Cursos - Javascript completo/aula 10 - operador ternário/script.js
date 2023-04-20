let num=10

res=(!(num%2) ? 'par':'ímpar')
console.log(res)
//não vai dar o resultado correto, que é 'par'
// o resto da divisão por 2 é zero.

//0=false
//1=false

//o resultado do resto da divisão de 10/2 é zero, portanto é 'par'
//mas zero no js é false. E aí cai na condição do false, que é 'ímpar'
//para consertar isso, negamos a condição, usando ponto de exclamação
// o que for true vira false e vice-versa
// !(num%2) >> !(true) mas por causa da negativa, vira false


//síntaxe:
// condition ? true : false
//Uma expressão que é avaliada como true ou false.










//operação if/else comum
// num = 10
// let res = num%2

// if(res==0){
//     console.log("par")
// } else {
//     console.log('Ímpar')
// }

//lê-se "se o 'res'(10/2) for igual a zero,
// imprima no console par
//senão imprima ímpar"

