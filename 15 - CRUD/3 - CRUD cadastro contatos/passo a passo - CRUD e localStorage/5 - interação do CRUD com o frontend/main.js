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



