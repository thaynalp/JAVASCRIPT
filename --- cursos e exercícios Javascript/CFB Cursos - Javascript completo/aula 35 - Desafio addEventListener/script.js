const cx1 = document.querySelector("#caixa1")
const cx2 = document.querySelector("#caixa2")
const btn = document.querySelector("#btn-transferir")
const todosCursos = [...document.querySelectorAll(".curso")]

todosCursos.map((el)=>{
    el.addEventListener("click",(evt)=>{
    const curso = evt.target
    //console.log(curso)
    curso.classList.toggle("selecionado")
    })
})

//aqui ao clicar no botao, os elementos vao p cx1 e cx2.

btn.addEventListener("click",()=>{
    const cursosSelec = [...document.querySelectorAll(".selecionado")]
    const cursosNaoSelec = [...document.querySelectorAll(".curso:not(.selecionado)")]  //:not() - serve para listar os elementos que não possuam a classe 'selecionado'
     // console.log(cursosSelec)                                                 //dos elementos que contenham a classe 'curso', traga p mim os que não tem a classe 'selecionado'
    cursosSelec.map((el)=>{
    cx2.appendChild(el)   //'anexar um filho' ao 'caixa2'. o filho que está no el(elemento, que cai percorrer tods o elementos selecionads)
    })
    cursosNaoSelec.map((el)=>{
    cx1.appendChild(el)
}) 
}) 






//***aqui ao clicar no botao, os elementos vao p cx2. mas nao voltam p caixa 1
// btn.addEventListener("click",()=>{
//     const cursosSelec = [...document.querySelectorAll(".selecionado")]
//    // console.log(cursosSelec)
//    cursosSelec.map((el)=>{
//    cx2.appendChild(el)   //'anexar um filho' ao 'caixa2'. o filho que está no el(elemento, que cai percorrer tods o elementos selecionads)
//     })
// }) 

/* Passo a passo do botao
    1- quando o botao ouvir um 'click', vai executar uma função
    2- a função é passar os elementos selecionados da 'cx1' para 'cx2'
    3 - p isso temos que pegar todos os elementos 'selecionos' e armazenar numa variável 'cursosSelec'. e trans em array pelo 'spread'
    4 -pega 'cursosSelec' e atribui o 'map' que faz com que o array seja todo percorrido, 'elemento por elemento'
    5 - e o 'map' vai executar a função de mandar pra 'cx2' através do 'appendChild'
    6 - e 'appendChild' vai receber o parâmetro 'el' da função map, que são os prórprios elementos do array
    7 - "significa dizer: que será anexado todos os elementos seleionados, quando escutar o click ao caixa2"
*/


//***toggle - ele verifica se o elemento tem a classe 'selecionado' e se não tiver ele coloca, se tiver ele tira. toggle é interativo

//**appendChild  - anexar no elemento filho
//1- quando o 'botao de copiar' for clicado
//2- vamos pegar os elementos que tem a classe 'selecionado'
//3- e passar para 'caixa2'