const cursos = ["HTML","CSS","javascript","PHP","MySQL","ReactNative"]

cursos.map((el,chave)=>{   //map(elemento, chave)  chave=posição
    //console.log(chave)
    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id","c"+chave+1) //+1 começar do 1(elemento,valor) + chave(posição do id, cada um vai ter uma posição)
    novoElemento.setAttribute("class","curso c1") 
    novoElemento.innerHTML=el
    caixa1.appendChild(novoElemento)
})


//for-it ou map - para percorrer um Array

// 1-crio variável para capturar o array com as strings dos cursos
// 2- 'cursos' vai ser mapaeado
// 3 - chave +1 para contar a partir de 1 e nao de zero
//  para cada 'el' do array, que agr se chama 'novoElemento' de 'cursos' será 'criado' uma 'div'
//   -será atribuída a div criada um 'id #c7'
//  - será atribuída, também a div criada uma 'class curso c1'
//  - 'novoElemento' vai receber um 'texto no HTML' innerHTML. vai receber o prórpio elemento
//  - e aí vamos anexar tudo isso na div caixa1