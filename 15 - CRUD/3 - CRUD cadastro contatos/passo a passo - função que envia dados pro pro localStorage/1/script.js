//base de dados temporária em formato [JSON]
const tempClient ={
    nome: 'Ana',
    email: 'ana@gmail.com',
    celular: '21983125405',
    cidade: 'São Paulo'
}

//CRUD 
const createClient =(client)=>{
    localStorage.setItem('db_client',JSON.stringify(client))
}

/*
1- localStorage.setItem('chave','valor da chave') >> envia os dados para o localStorage
    para testar vamos no console do navegador e chamamos a função createClient

*/

