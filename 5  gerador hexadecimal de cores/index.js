let colorInput = document.querySelector('#color') //seletor de cores
let hexInput = document.querySelector('#hex') //onde aparecerá o nome das cores

colorInput.addEventListener('input',()=>{
    let color = colorInput.value
    hexInput.value = color 
    document.querySelector('h1').style.color=color
})


/*
Explicando o código:

1- chamamos o input de cores e o input que irá aparecer o nome hexadecimal da cor
2- foi adicionado um 'evento de input', que irá receber o valor da cor clicada
3- e o input que vai receber o nome hexadecimal da cor vai receber também o valor da cor clicada
4- por fim, h1 vai ter a cor alterada, e será igual a cor clicada

*/