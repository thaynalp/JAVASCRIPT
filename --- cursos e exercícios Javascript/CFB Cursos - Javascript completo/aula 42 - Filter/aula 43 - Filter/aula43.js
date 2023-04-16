const caixaCursos=document.querySelector("#caixaCursos")
const btn_c=[...document.querySelectorAll(".curso")]
const c1_2=document.querySelector("#c1_2")
const cursos=["HTML","CSS","Javascript","PHP","React","MySQL","ReactNative"]
const btnCursoSelecionado=document.getElementById("btnCursoSelecionado")
const btnRemoverCurso = document.getElementById("btnRemoverCurso")

//elementos criados tudo em JS
cursos.map((el,chave)=>{
    const novoElemento=document.createElement("div")
    novoElemento.setAttribute("id","c"+chave) // chave---(posição do id, cada id vai ter uma posição) / *se for +chave+1 --o id começa na posição 1 e não zero
    novoElemento.setAttribute("class","curso c1")
    novoElemento.innerHTML=el  // a 'div' vai receber um elemento de texto em cada 'el'(elemento)

    const comandos=document.createElement("div")
    comandos.setAttribute("class","comandos")
    
    const rb=document.createElement("input")
    rb.setAttribute("type","radio")
    rb.setAttribute("name","rb_curso")

    comandos.appendChild(rb) //a 'div comandos' vai receber um filho 'radio'(rb)

    novoElemento.appendChild(comandos) //a 'div novoElemento' vai recber um filho 'div comandos'

    caixaCursos.appendChild(novoElemento)
})

//fUNÇÃO PARA CAPTURAR A SELEÇÃO DO BOTÃO RADIO
const radioSelecionado = ()=>{
    const todosRadios = [...document.querySelectorAll("input[type=radio]")] //'spread' para retornar um 'array' e não um nodeList
    const radioSelecionado = todosRadios.filter((elemento,indice,array)=>{
        return elemento.checked  
    })
    return radioSelecionado[0]
}

// FUNÇÃO PARA O BOTÃO DE CURSO SELECIONADO
btnCursoSelecionado.addEventListener("click", (evt)=>{
    const rs = radioSelecionado()
    console.log(rs)                               //verificar qual mensagem de erro dá. está retornando: 'undefined', ao nao selecionar nenhum curso e apertar no botao 'cursoselecionado'
    if (rs==! = undefined) {                          //quando 'rs' for diferente de 'undefined' ele vai remover o botao com o curso
 //     console.log("indefinido")                   //teste para capturar o texto e verificar se está retornando o erro
        const cursoSelecionado = rs.parentNode.previousSibling.textContent //previousSibling -elemento irmao  **outra forma de capturar o texto
        alert(`curso selecionado: ${cursoSelecionado}`)
    } else {
        alert(`selecione um curso`)
    }
})

//FUNÇÃO PARA O BOTÃO DE REMOVER
btnRemoverCurso.addEventListener("click", (evt)=>{
    const rs = radioSelecionado()
    const cursoSelecionado = rs.parentNode.parentNode
    cursoSelecionado.remove()
})

//fUNÇÃO PARA CAPTURAR A SELEÇÃO DO BOTÃO RADIO:
// essa função verifica qual curso foi selecionado e 
// mostra o conteúdo da div, o texto

// FUNÇÃO PARA O BOTÃO DE CURSO SELECIONADO:
//
//

// FUNÇÃO PARA REMOVER:
// para remover temos que fazer basicamente a mesma operação
// 1 - verificar qual rádio foi selecionado 
// 2 - e remover os elementos pais desse 'radio'


//TRATAMENTO DE ERROS TRY/CATCH  (O QUE A FUNÇÃO ESTÁ RETORNANDO DE MSGM DE ERRO?)
//console.log(rs)   //verificar qual mensagem de erro dá. está retornando: 'undefined', ao nao selecionar nenhum curso e apertar no botao 'cursoselecionado'
// para capturar essa mensagem "undefined" vamos colocar em um alert