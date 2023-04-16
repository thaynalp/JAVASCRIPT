var arr=[]

function addItem(){
    if(localStorage.meuArr){
        arr = JSON.parse(localStorage.getItem('meuArr'))  //pegando dados do localStorage
    }
    let novoItem = document.getElementById('input').value
    arr.push(novoItem)
    document.getElementById('input').value = ''

    localStorage.meuArr = JSON.stringify(arr)  //enviando dados pro localStorage
}

function showItems(){
    let resultadoDiv = document.getElementById('resultado')
    resultadoDiv.innerHTML=''
    if(localStorage.meuArr){
        arr = JSON.parse(localStorage.getItem('meuArr'))
    }
    
    for(var i in arr){
        let p = document.createElement('p')
        p.innerHTML = arr[i]
        resultadoDiv.append(p)
    }
}

function clearItems(){
    arr=[]  //zera o array
    localStorage.meuArr = JSON.stringify(arr)
    //atualiza 'meuArr' no localStorage, com o array que foi zerado, em formato de string
}

/*
EXPLICANDO O CÓDIGO:

 
 1- if(localStorage.meuArr) -- 
    aqui vai verificar se dentro do localStorage tem o 'meuArr'
 2- na primeira app, 'meuArr' não existe, então não vai entrar na condição, e seguir para as outras linhas do cód

 3- então vai pegar o valor do 'input'
 4- vai armazenar na variável 'arr', através do 'push'
 5- novoItem = ""    >>> aqui está limpando o input 

 6- localStorage.meuArr = JSON.stringify(arr) ---
  JSON.stringify(arr) >>> agora esse array que tem um dado, vou transformar esse dado em JSON.string
  e estando nesse formato, vamos armazenar no 'meuArr', dentro do localStorage

  >>> no segundo momento, quando adicionamos um item,
       como já existe o 'meuArr' no localStorage
  
  7- arr = JSON.parse(localStorage.getItem('meuArr') --
    peço pro localStorage recuperar o 'meuArr' que já está salvo
    e como está no formato string peço para transformar em JSON, 
    para armazenar novamente na variável 'arr'
    tem que transformar em JSON, pois o javascript só lê assim
*/