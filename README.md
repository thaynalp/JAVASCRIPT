## <img height="25" src="https://user-images.githubusercontent.com/112887006/228707454-621d0a9b-0de7-42d3-b383-06fe830e87c0.png"/> Mini Projetos utilizando Manipulação do DOM e POO
_Projetos em Javascript #1_
 
 
 ### :open_file_folder: 01 - Botão que muda a cor de fundo com método toggle

<p align="center">
<img src="https://user-images.githubusercontent.com/112887006/228675727-c8acd4c6-514e-4248-a684-a9aa2bca4b92.gif" />
</p>
    
    
    Conceitos utilizados em CSS e JS: 
    
    classList.toggle() - o método toggle pertence ao objeto classList de um elemento. Ele irá inserir a 
                         classe caso não exista e remover caso exista.
    
**outro projeto dentro desta pasta:**
    
    .ball-move{left: calc(100% - 40%);} - com CSS foi utilizado esse comando, que faz com que a bola do botão se mova, ao clicar. 
    (na pasta ball-move)
                         
    position relative e position absolute para posicionar o botão em formato de bola e a estrutura dele.
 
 ### :open_file_folder: 02 - Botão que troca cor do body
 
     Conceitos utilizados em JS: 
     
     setAttribute() - método que adiciona um novo atributo ou modifica o valor de um atributo existente num elemento específico,
                      elemento de class, por exemplo
 
     addEventListener('click',()) - método que escuta um evento, nesse caso, de click e executa uma função
      


### :open_file_folder: 03 - Alterar o texto de um botão para (play/pause)

<p align="center">
<img src="https://user-images.githubusercontent.com/112887006/228676738-d09f12dd-720d-4eb7-aaf5-d18312363f3b.gif" alt="animated" />
</p>
               
    Conceitos utilizados em CSS e JS: 
    
    textContent - usar textContent em um h2, span ou div retorna o conteúdo textual deles
    
    height e width - com CSS, definir altura e largura mantém o tamanho do botão fixo


### :open_file_folder: 04 - Gerador de paleta de cores hexadecimal aleatória

<p align="center">
<img src="https://user-images.githubusercontent.com/112887006/231041294-08f8cbca-1649-4fce-b1f2-ca969b70952c.gif" alt="animated" />
</p>

   
    Conceitos utilizados em JS: 
    
    Math.random() - função usada para retornar um nº aleatório de ponto flutuante (nºs reais) entre 0 e 1 (ex: 0.8244415641011535).
                    Este nº aleatório pode ser escalado de acordo com o intervalo desejado, multiplicando o nº de ponto flutuante
                    pelo nº máximo que queremos gerar.
                    Imagine que você precise de um nº aleatório entre 0 e 20, isso é possível através da fórmula Math.random() * 21.
                    
    Math.floor() -  função usada para arredondar o número passado como parâmetro para seu inteiro mais próximo,
                    levando como base o valor menor.
    
    length - propriedade que retorna o 'comprimento do caracter'
    
    charAt - retorna o caracter da string, de acordo com o índice passado como parâmetro, exemplo "HELLO".charAt(0); resultado é: H
             isso tudo é para devolver um nº aleatório inteiro -> charAt(Math.floor(Math.random() * chars.length))
    loop for - é um código que vai ser repetido até que uma determinada condição seja alcançada. 
    
   
### :open_file_folder: 05 - Gerador de cores hexadecimal com `<input type="color">`
     
     Conceitos utilizados em JS: 
     
     addEventListener('input',()=>{}) - Evento de 'input'. Nesse projeto, quando o usuário selecionar uma cor no 'input color' 
                                        será executada uma função.
     
    .value - é uma propriedade que serve para capturar o valor recebido por um input. 
     
     
### :open_file_folder: 06 - Contador com funções de aumentar, diminuir e zerar


#### **Clique no link para acessar projeto e interagir!**

<br>
     
## <div align="center"> :link: <a href="https://github.com/thaynalp/Contador-em-JS" target="_blank">código do projeto</a></div>
## <div align="center"> :link: <a href="https://thaynalp.github.io/Contador-em-JS/" target="_blank">Projeto: contador</a></div>

<div align="center"> <img  height="200" alt="coding-time" src="https://user-images.githubusercontent.com/112887006/228672489-db7af0a0-bc5d-4636-b7bb-73f47e2d8f87.png"></div>

### :open_file_folder: 07 - Validador de quantidade de caracteres `<textarea maxlength="20"></textarea>`


<p align="center">
<img src="https://user-images.githubusercontent.com/112887006/228672123-66acb432-f0f2-41d2-815f-a429a39ed174.gif" />
</p>

    
    Conceitos utilizados em HTML e JS:
    
    <textarea maxlength="20"></textarea> - 'maxlength' é a propriedade que determina o máximo de strings recebidas no input 'textarea'
                                            em JS chamamos essa propriedade assim: textarea.maxLength
                                            e para capturar o quantas strings estão sendo digitadas: textarea.value.length
     
    addEventListener('input',()=>{} - o valor do input será recebido e executará uma função a partir daí






     
     

     
