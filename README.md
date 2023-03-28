## Javascript-2023   
_Projetos utilizando POO e Manipulação do DOM_
 
 
 ### 1 - Trocador de cores. Ao clicar no botão muda a cor do body para a cor configurada
 
     Conceitos utilizados em JS: 
     
     setAttribute() - método que adiciona um novo atributo ou modifica o valor de um atributo existente num elemento específico, elemento de class, por exemplo
 
     addEventListener('click',()) - método que escuta um evento, nesse caso, de click e executa uma função
     
     
     
### 2 - Botão que muda a cor de fundo com método toggle

    Conceitos utilizados em CSS e JS: 
    
  
    .ball-move{left: calc(100% - 40%);} - com CSS foi utilizado esse comando, que faz com que a bola do botão se mova, ao clicar. (na pasta ball-move)
                         
    position relative e position absolute para posicionar o botão em formato de bola e a estrutura dele.
    
    classList.toggle() - o método toggle pertence ao objeto classList de um elemento. Ele irá inserir a classe caso não exista e remover caso exista.
    
    
### 3 - Alterar o texto de um botão para (play pause)

    Conceitos utilizados em CSS e JS: 
    
    textContent - usar textContent em um h2, span ou div retorna o conteúdo textual deles
    
    height e width - com CSS, definir altura e largura mantém o tamanho do botão fixo
    
### 4 - Gerador de paleta de cores aleatórias  
   
    Conceitos utilizados em CSS e JS: 
    
    Math.random() - função usada para retornar um nº aleatório de ponto flutuante (nºs reais) entre 0 e 1 (ex: 0.8244415641011535).
                    Este nº aleatório pode ser escalado de acordo com o intervalo desejado, multiplicando o nº de ponto flutuante pelo nº máximo que queremos gerar.
                    Imagine que você precise de um nº aleatório entre 0 e 20, isso é possível através da fórmula Math.random() * 21.
                    
    Math.floor() -  função usada para arredondar o número passado como parâmetro para seu inteiro mais próximo, levando como base o valor menor.
    
    chars.length - propriedades que vão pegar o 'comprimento do caracter' desejado
