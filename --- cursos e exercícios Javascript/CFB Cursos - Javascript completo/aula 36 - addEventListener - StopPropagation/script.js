const caixa1 = document.querySelector("#caixa1")
const btnC1 = document.querySelector("#c1")
const cursos = [...document.querySelectorAll(".cursos")]  //é a classe q a lista dos cursos tem em comum

cursos.map((el)=>{  // o array 'cursos' vai ser mapeado elemento por elemento e vai executar uma função
    el.addEventListener("click", (evt)=>{  //cada elemento desse array vai escutar o click e vai executar umafunção
        evt.stopPropagation     //essa função vai ser retornada no 'evt' e essa variável, vai impedir a propagação do click
    })
})
       

// passo a passo:

// 1- todos os elementos q tem em comum a classe 'curso' vao ser 'mapeados', 'elemento por elemento'
// 2- o parâmetro 'el' serve para recber o retorno da aplicação 
// 3- cada 'el' que está percorrendo o array 'curso' vai receber um ouvidor de click
// 4 - o elemento q for clicado, vai executar uma função 
// 5 - essa função vai ser retornada no 'evt' e essa variável, vai impedir a propagação do click


//>>>>>>1º
// caixa1.addEventListener ("click",(evt)=>{  //evt=evento
//     console.log("clicou")                // quando add o evento de click em um elemento pai q engloba outros, automaticamente é passado para outros elementos esse mesmo evento 
// })

//>>>>>>2º
// caixa1.addEventListener ("click",(evt)=>{  //evt=evento
//     console.log(evt.target)                //target vai capturar quem está executando o click
// })

//>>>>>> 3º
// btnC1.addEventListener ("click",(evt)=>{  // usaremos o stopPropagation no elemento q estiver chegando no 'evt', através do 'target'
//     evt.stopPropagation()      //       stopPropagation vai parar somente no id c1. nos outros o evento de click vai continuar acontecendo
// })

