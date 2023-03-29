let textArea = document.querySelector('textarea')
let h3 = document.querySelector('h3')

textArea.addEventListener("input",()=>{
    let caracterMax = textArea.maxLength
    quantidadeDeCaracter = textArea.value.length

    console.log(textArea.value.length)
    h3.innerText = caracterMax - quantidadeDeCaracter
})


 
 
/*

maxLength - é o tamanho máximo de caracteres que são aceitos como entrada
            essa propriedade já foi referenciada no HTML, no textarea

Evento de 'input' - tudo o que for escrito no 'textArea' o evento de input vai receber
                    e vai executar uma função


caracterMax é como se fosse maxLength que é igual a 255 caracteres no máx                    
('h3').innerText - o h3 vai receber o caracterMax menos a quantidadeDeCaracter                    

então: 255 - (qtde de caracteres digitados)
*/