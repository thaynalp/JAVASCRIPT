
const tempClient ={
    nome: 'Rodrigo',
    email: 'rodrigo@gmail.com',
    celular: '21983125405',
    cidade: 'São Paulo'
}

const getLocalStorage =()=> JSON.parse(localStorage.getItem('db_client')) ?? []
const setLocalStorage =(dbClient)=> localStorage.setItem('db_client',JSON.stringify(dbClient))


const createClient =(client)=>{
    const dbClient = getLocalStorage()
    dbClient.push(client)
    setLocalStorage(dbClient)
}


 