const openModal =()=> document.getElementById('modal')
    .classList.add('active')

const closeModal =()=>{
    clearFields()
    document.getElementById('modal').classList.remove('active')
}

const getLocalStorage =()=> JSON.parse(localStorage.getItem('db_client')) ?? []
const setLocalStarage =(dbClient)=> localStorage.setItem('db_client',JSON.stringify(dbClient))

//CRUD 
const deleteClient =(index)=>{
    const dbClient = JSON.parse(localStorage.getItem('db_client')) ?? []
    dbClient.splice(index,1)
    setLocalStarage(dbClient)
}

const updateClient =(index, client)=>{
    const dbClient = getLocalStorage()
    dbClient[index] = client
    setLocalStarage(dbClient)
}

const readClient =()=> getLocalStorage()

const createClient =(client)=>{
    const dbClient = getLocalStorage()
    dbClient.push(client)
    setLocalStarage(dbClient)
}

//interação com o frontend
const isValidFields =()=>{
   return document.getElementById('form').reportValidity()

}

const clearFields =()=>{
    const fields = document.querySelectorAll('.modal-field')
    fields.forEach(field => field.value = '')
}

const saveClient =()=>{
    if(isValidFields()){
        const client = {
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            celular: document.getElementById('celular').value,
            cidade: document.getElementById('cidade').value
        }
        createClient(client)
        updateTable()
        closeModal()
    }
}


/*
passo a passo (integração com frontend) 

1- função saveClient
    vai validar primeiro os campos de input, para obrigar o usuário a preencher todos os inputs
    vai receber um objeto com todos os dados, capturando os valores que vão ser recebidos pelo input
2- função isValidFields
    pega o form do HTML d verifica se todos os campos estão sendo preenchidos pelo usuário,
    através do método reportValidity()
    >> reportValidity() - esta função retorna verdadeiro, quando todos os requisitos HTML foram atendidos
            caso o input não esteja preenchido ele retorna uma mensagem ao usuário de 'preencha este campo'
    >> 'required' proprieda que permite fazer a chamda de validação dos campos de input direto no HTML

3 - chamar a função createClient(client)
    essa função envia e recebe dados dos clientes para o localStorage

4- chamar a função closeModal
    esta função fecha o modal quando o 'X' é clicado,
    através da propriedade classList.remove('active')
    ao clicar no botão de 'salvar', vai acionar a função closeModal,
    que vai acionar a função 'clearFields', vai limpar todos os campos de input
    e depois vai fechar o modal, tudo simultaneamente 

5- função clearFields     
    >>> querySelectorAll - vai retornar um array com todos os elementos que ele achar, que foram passados como parâmetro
        como ele vai retornar um array, podemos usar métodos de array 
        
    >>> método de array: forEach 

    - forEach(field => field.value = '') - interpretando o código
    forEach vai passar por cada elemento de 'field', vai pegar o valor desses elementos
    e vai atribuir a eles um valor vazio 


6- função updateTable 
    vai ler os dados do localStorage com a função 'readClient', 
    que vai trazer um array, e nesse array tem elementos que são 'objetos'.
    com forEach ele vai percorrer cada dado do localStorage
    vai enviar pra função createRow, cliente por cliente

    função updateTable para renderizar na tela
    para quando salvar os dados, atualizar na tabela
    colocar essa função dentro da função saveClient

7- na função createRow
    é onde será inserido elementos HTML dinamicamente
    será criado uma 'tr' (nova linha vazia)
    e vai ser inserido dentro das linhas da tabela os dados dos clientes, de forma dinâmica
    esses dados vão chegar pelo parâmetro 'client'
    inserir essas linhas no HTML com o appendChild(newRow)

8- vamos tratar erros da função update
    toda vez que o update for executado, ele vai duplicar os dados e reincerir na tabela
    para tratar esse erro, toda vez que der um update antes de preencher as linhas
    vamos então limpar a tabela com a função clearTable
    
9- função clearTable
    querySelectorAll('#tableClient >tbody tr') >>> para pegar as 'tr' (as linhas da tabela)


obs: não usaremos mais o objeto 'tempClient', pois os dados dos usuários vão
        chegar diretamente pelo form, pela função saveClient



    */

const createRow =(client)=>{
    const newRow = document.createElement('tr')
    newRow.innerHTML = `
        <td>${client.nome}</td>
        <td>${client.email}</td>
        <td>${client.celular}</td>
        <td>${client.cidade}</td>
        <td>
            <button type="button" class="button green">editar</button>
            <button type="button" class="button red">excluir</button>
        </td>
    `
    document.querySelector('#tableClient >tbody').appendChild(newRow)
}

const clearTable =()=>{
    const rows = document.querySelectorAll('#tableClient >tbody tr')
    rows.forEach(row =>)
}


const updateTable =()=>{
    const dbClient = readClient()
    clearTable()
    dbClient.forEach(createRow)
} 
updateTable()


//Eventos    
document.getElementById('cadastrarCliente')
    .addEventListener('click',openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)

document.getElementById('salvar')
    .addEventListener('click',saveClient)