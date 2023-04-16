const openModal =()=> document.getElementById('modal')
    .classList.add('active')

const closeModal =()=> document.getElementById('modal')
    .classList.remove('active')

//base de dados temporária em formato [JSON]
const tempClient ={
    nome: 'Fernando',
    email: 'fernando@gmail.com',
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











//Eventos    
document.getElementById('cadastrarCliente')
    .addEventListener('click',openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)