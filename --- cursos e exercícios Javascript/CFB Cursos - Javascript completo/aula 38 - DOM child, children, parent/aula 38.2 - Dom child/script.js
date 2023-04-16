//const caixa1 = document.querySelector("#caixa1")
const btnC1 = [...document.querySelectorAll(".curso")]

//console.log(caixa1.hasChildNodes()) //retorna true, se o elemento possui filhos. no caso retorna um texto, então true, q é filho da div.console.log(btnC1.children)
//console.log (btnC1[0].hasChildNodes())// ?? tem um filho?
// console.log (btnC1[0].childNodes) //childNodes - retorne entao o filho, no console

// console.log(btnC1[0].children) //na posição zero - retorna as tags q contem filho. sem retornar o texto da tag

/*automatizando a resposta*/
// if console.log(btnC1[0].children){
//     console.log("Possui filhos")
// } else {
//     console.log ("Não possui filhos")
// }
// 1-'se' o primeiro elemento de 'btnc1' for maior que zero
// 2 - vai significar q 'btnc1' tem elementos filho
// 3 - entao vai imprimir a resposta no console

//--------------------------------------------------------
// ooooouuu pode fazer uma condição ternária. que é a msm coisa, só se monta diferente

console.log(caixa1.children.length > 0 ? "Possui filhos" : "Não possui filhos")