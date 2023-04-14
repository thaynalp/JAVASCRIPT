const inserirNome =(callback)=>{
    let name = 'Thayná'
    callback(name)  
}
const meuNome = (name)=>{
    console.log(`Olá ${name}`)
}

inserirNome(meuNome)

//callback(name) - variável name, sendo passada como parâmetro dentro da função callback
//inserirNome(meuNome) - a função 'meuNome' está sendo passada como parâmetro pra fução 'inserirNome'