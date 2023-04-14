class Produto{

    constructor(){
        this.id = 0
        this.nomeProduto = ""
        this.valor = 0
    }

    adicionar(){
        alert('o método add foi chamado')
    }

    excluir(){
        alert('item deletado')
    }
}

let produto = new Produto()