
const tempClient ={
    nome: 'Márcio',
    email: 'marcio@gmail.com',
    celular: '21983125405',
    cidade: 'São Paulo'
}

//CRUD 
const createClient =(client)=>{
    const db_client = JSON.parse(localStorage.getItem('db_client')) ??[]
    db_client.push(client)
    localStorage.setItem('db_client',JSON.stringify(db_client))
}

/*
para testar vamos no console do navegador e 
chamamos a função createClient(tempClient).

recebendo 'tempClient', que são os dados que queremos ver no localStorage

*/

