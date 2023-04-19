
const tempClient ={
    nome: 'Indiana',
    email: 'indiana@gmail.com',
    celular: '21983125405',
    cidade: 'São Paulo'
}

const getLocalStorage =()=> JSON.parse(localStorage.getItem('db_client')) ?? []
const setLocalStorage =(dbClient)=> localStorage.setItem('db_client',JSON.stringify(dbClient))


const deleteClient =(index)=>{
    const dbClient = readClient()
    dbClient.splice(index,1)
    setLocalStorage(dbClient)
}

const updateClient =(index, client)=>{
    const dbClient = readClient()
    dbClient[index] = client
    setLocalStorage(dbClient)
}

const readClient =()=> getLocalStorage()

const createClient =(client)=>{
    const dbClient = getLocalStorage()
    dbClient.push(client)
    setLocalStorage(dbClient)
}
