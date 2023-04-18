
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

/*
separadando cada função
função de enviar dados pro localStorage
função de pegar dados do localStorage
função de criar cliente. que pega as duas funções: enviar e pegar dados

setLocalStorage(dbClient)  -- enviar o que do localStorage? 'dbClient'
getLocalStorage(dbClient) -- pegar o que pro localStorage? 'dbClient


fluxo do código:

1- getLocalStorage vai pegar os dados no localStorage e retornar para a variável 'dbClient', que está dentro da função createClient
2- a variável 'dbClient', que está recebendo um array, vai enviar dados do 'client' pelo 'push'. Esses dados estão vindo direto do 'objeto' 'tempClient'

3- a função setLocalStorage vai receber por parâmetro 'dbClient'. O valor lançado para o localStorage será o valor recebido por 'dbClient')

4- e a função 'createClient' vai receber o parâmetro 'client', que são dados que esão vindo do objeto 'tempClient'
5-e essa função vai receber a função 'setLocalStorage', que vai enviar dados do 'dbClient'

obs: 'dbClient' é uma variável que está recebendo dados do array que está no localStorage
        e está sendo enviado dados também, pela função 'setLocalStorage(dbClient)
*/
 