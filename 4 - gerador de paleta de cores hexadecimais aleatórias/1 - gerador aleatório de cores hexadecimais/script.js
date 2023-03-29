/* função que gera as cores hexadecimais */

function geraCores(){

    const chars = '0123456789ABCDEF'
    let color = '#'

    for(let i=0; i < 6; i++){
        color += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return color
}
/*função que aloca as cores geradas nas respectivas divs */

document.getElementById('btn-action').addEventListener('click',()=>{
    for(let i=0; i < 5; i++){      
        let color = geraCores() //variável que recebe o retorno da função
        let div_color = document.getElementById(`color-${i+1}`) //essa variável vai receber as divs 1,2,3,4,5 e para iniciar do 1 {i+1}
        // div_color.style.backgroundColor='red' para receber cores aleatórias, vamos mudar o valor 'red' para a função 'geraCores'
        div_color.style.backgroundColor = color

        let txt_color = document.getElementById(`txt-color-${i+1}`)
        txt_color.textContent = `${color}`
    }
})



/*
Explicando código:  função que gera as cores hexadecimais

1- a cada incremento do laço 'for', a variável 'color' vai receber um valor aleatório da variável 'chars' 
    e compor o código hexadecimal de uma cor

    CharAt (retorna o caracter da string, de acordo com o índice passado como parâmetro), exemplo
     "HELLO".charAt(0);  return H

    charAt() 
    isso tudo é para devolver um nº aleatório inteiro -> charAt(Math.floor(Math.random() * chars.length))


   
    Math.floor é usado para arredondar o número passado como um parâmetro para seu inteiro mais próximo

    a cor hexadecimal vai de 0 a 0xFFFFFF
    Math.random() (que gera valores float de 0 a 1)  para que o limite sempre seja 0xFFFFFF


    vai ser gerado um nº aleatório de 0 a 1 -Math.random()
    esse valor será multiplicado por pelos números de 'chars' e terá o tamanho de até 6 caracteres- que é o tamanho de um cód hexadecimal (length)
    esse valor será arredondado - Math.floor()
    e o charAt vai gerar um caracter referente ao nº gerado
    e vai fazer isso até completar 6 nº
    */


    /*
    Explicando código: 2ª função

    1- vamos chamar o botão com a função de click
    2- vamos colocar um iterador para percorrer as divs de 1a5
    3- chamar as divs pelo id color-${i+1}. a medida que vai iterando vai trocando a div 1,2,3,4,5
    4- vamos mudar o estilo das divs para um background de cores aleatórias. Essas cores são da 1ª função que gera cores aleatórias

    5- vamos chamar o text-color das cores pelo id color-${i+1}, fazendo assim a iteração dinâmica
    6- e text-color vai receber tdo o retorno da função de cores aleatórias

    */

