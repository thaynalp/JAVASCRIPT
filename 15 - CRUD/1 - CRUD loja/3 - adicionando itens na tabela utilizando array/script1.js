class Produto{

    constructor(){
        this.id = 1
        this.arrayProdutos = []

    }

    salvar(){
        
       let produto = this.lerDados()
       if(this.validaCampo(produto) == true){
            this.adicionar(produto)
       }

       console.log(this.arrayProdutos)
    }

    adicionar(produto){
        this.arrayProdutos.push(produto)
        this.id++
    }

    lerDados(){

        let produto = {}

        produto.id = this.id
        produto.nomeProduto = document.getElementById('produto').value
        produto.preco = document.getElementById('preco').value
        return produto
    }

    validaCampo(produto){
        let msg = ''
        if(produto.nomeProduto == ''){
            msg += 'Informe o nome do produto \n'
        }

        if(produto.preco == ''){
            msg += 'Informe o preço do produto \n'
        }

        if(msg != ''){
            alert(msg)
            return false
        }
        return true
    }

    cancelar(){
        alert('item deletado')
    }
}

var produto = new Produto()


//let produto = {} - objeto produto
//   let produto = this.lerDados() - 
//agora todos os atributos do 'objeto produto' que estão na função 'lerDados'
//estão armazenados na variável 'produto'q está na 'função salvar'

//quando clicar na 'função salvar', ela vai chamar a 'função lerDados' 
//'lerDados' tem no seu retorno o  'objeto produtos', que ficará armazenado na variárvel 'produto',dentro da função salvar
