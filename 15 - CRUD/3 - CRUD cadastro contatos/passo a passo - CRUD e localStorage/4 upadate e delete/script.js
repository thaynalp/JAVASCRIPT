
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

// a função readClient é a própria função getClient. 
//não precisaria criar a função readClient, mas foi criada pela didática

/*
update vai pegar os dados do banco que está no localStorage, com readClient()
e armazenar na variável 'dbClient', que é um array desse banco


 dbClient[index] = client >> o index é para saber qual cliente queremos editar
                esse cliente que vai ser recebido, são os dados atualizados

e enviamos pra o banco, com a função setLocalStorage
*/