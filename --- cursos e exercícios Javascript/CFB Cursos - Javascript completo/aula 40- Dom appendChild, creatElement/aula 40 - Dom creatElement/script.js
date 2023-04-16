//const caixa1 = document.querySelector("#caixa1")
const btnC1 = [...document.querySelectorAll(".curso")]

//vamos criar um elemento HTML(tag, class, id) e anexar esse elemento no HTML 

const novoElemento = document.createElement("div")
novoElemento.setAttribute("id","c7")  //(atributo, valor)
novoElemento.setAttribute("class","curso c1")  //(atributo, valor)
novoElemento.innerHTML = "ReactNative"
caixa1.appendChild(novoElemento) 

// 1- createElement("div") - criando um elemento
// 2 - appendChild(novoElemento) - anexando ele no 'caixa1'