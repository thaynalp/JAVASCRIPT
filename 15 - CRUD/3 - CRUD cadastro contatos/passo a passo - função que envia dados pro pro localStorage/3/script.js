//base de dados temporária em formato [JSON]
const tempClient ={
    nome: 'Renata',
    email: 'renata@gmail.com',
    celular: '21983125405',
    cidade: 'São Paulo'
}

// CRUD 
const createClient =(client)=>{
    const db_client = JSON.parse(localStorage.getItem('db_client')) ?? []
    db_client.push(client)
    localStorage.setItem('db_client',JSON.stringify(db_client))
}


 