## Javascript-2023   
_Projetos utilizando POO e Manipulação do DOM_
 
 
 ### 1 - Botão que troca cor do body
 
     Conceitos utilizados em JS: 
     
     setAttribute() - método que adiciona um novo atributo ou modifica o valor de um atributo existente num elemento específico, elemento de class, por exemplo
 
     addEventListener('click',()) - método que escuta um evento, nesse caso, de click e executa uma função
     
     
     
### 2 - Botão que muda a cor de fundo com método toggle

<p align="center">
<img src="https://user-images.githubusercontent.com/112887006/228379323-835fdf59-dcbb-4ca8-9168-a93a2d7b87e1.gif" alt="animated" />
</p>
    
    
    Conceitos utilizados em CSS e JS: 
  
    .ball-move{left: calc(100% - 40%);} - com CSS foi utilizado esse comando, que faz com que a bola do botão se mova, ao clicar. (na pasta ball-move)
                         
    position relative e position absolute para posicionar o botão em formato de bola e a estrutura dele.
    
    classList.toggle() - o método toggle pertence ao objeto classList de um elemento. Ele irá inserir a classe caso não exista e remover caso exista.


### 3 - Alterar o texto de um botão para (play/pause)

<p align="center">
<img src="https://user-images.githubusercontent.com/112887006/228371657-7acb4eeb-5963-4e08-81c9-284380253694.gif" alt="animated" />
</p>
               
    Conceitos utilizados em CSS e JS: 
    
    textContent - usar textContent em um h2, span ou div retorna o conteúdo textual deles
    
    height e width - com CSS, definir altura e largura mantém o tamanho do botão fixo


### 4 - Gerador de paleta de cores hexadecimal aleatória
   
    Conceitos utilizados em JS: 
    
    Math.random() - função usada para retornar um nº aleatório de ponto flutuante (nºs reais) entre 0 e 1 (ex: 0.8244415641011535).
                    Este nº aleatório pode ser escalado de acordo com o intervalo desejado, multiplicando o nº de ponto flutuante pelo nº máximo que queremos gerar.
                    Imagine que você precise de um nº aleatório entre 0 e 20, isso é possível através da fórmula Math.random() * 21.
                    
    Math.floor() -  função usada para arredondar o número passado como parâmetro para seu inteiro mais próximo, levando como base o valor menor.
    
    length - propriedade que retorna o 'comprimento do caracter'
    
    charAt - retorna o caracter da string, de acordo com o índice passado como parâmetro, exemplo "HELLO".charAt(0); resultado é: H
             isso tudo é para devolver um nº aleatório inteiro -> charAt(Math.floor(Math.random() * chars.length))
    loop for - é um código que vai ser repetido até que uma determinada condição seja alcançada. 
    
   
### 5 - Gerador de cores hexadecimal com `<input type="color">`
     
     Conceitos utilizados em JS: 
     
     addEventListener('input',()=>{}) - Evento de 'input'. Nesse projeto, quando o usuário selecionar uma cor no 'input color' será executada uma função.
     
    .value - é uma propriedade que serve para capturar o valor recebido por um input. 
     
     
### 6 - Contador com funções de aumentar, diminuir e zerar


**Tem uma versão deste projeto para você interagir!**
**Acesse o link:**

<br>
     
<div align="center"> :link: <a href="https://thaynalp.github.io/Contador-em-JS/" target="_blank">Projeto: contador</a></div>
<div align="center"> :link: <a href="https://github.com/thaynalp/Contador-em-JS" target="_blank">Projeto e seus códigos</a></div>

<div align="center"> <img  height="200" alt="coding-time" src="https://user-images.githubusercontent.com/112887006/228624287-3c2abca3-4d2c-415b-83fa-403f66b3dada.png"></div>

### 7 - Validador de quantidade de caracteres `<textarea maxlength="20"></textarea>`


<p align="center">
<img src="https://user-images.githubusercontent.com/112887006/228646457-0a1bd0d8-7147-492d-8ed1-0da46768f4a8.gif" alt="animated" />
</p>

    
    Conceitos utilizados em HTML e JS:
    
    <textarea maxlength="20"></textarea> - 'maxlength' é a propriedade que determina o máximo de strings recebidas no input 'textarea'
                                            em JS chamamos essa propriedade assim: textarea.maxLength
                                            e para capturar o quantas strings estão sendo digitadas: textarea.value.length
     
    addEventListener('input',()=>{} - o valor do input será recebido e executará uma função a partir daí






     
     

     
