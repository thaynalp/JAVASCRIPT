//https://www.youtube.com/watch?v=5I4W0Mtcfqo

const miniTwitter = {
    usuarios: [
        {
            username: 'omariosouto',
        }
    ],
    posts: [
        {
            id: 1,
            owner: 'omariosouto',
            content: 'Meu primeiro teet'
        }
    ]
}

//CREATE
function criaPost (dados){
    miniTwitter.posts.push({
        id: miniTwitter.posts.length + 1,
        owner: dados.owner,
        content: dados.content
    })
}

criaPost({owner:'omariosouto',content:'primeiro tweet'})
criaPost({owner:'omariosouto',content:'segundo tweet'})

//pra criar post tem que passar um objeto {}, que tem o owner e que tem o content
//aqui está basicamente dando um push num array
console.log(miniTwitter.posts)


// READ

function pegaPosts(){
    return miniTwitter.posts
}
console.log(pegaPosts())

// UPDATE

function atualizaContentDoPost(id, novoConteudo){
    const postQueVaiSerAtualizado = pegaPosts().find((post)=>{
        return post.id == id
    })
    console.log(postQueVaiSerAtualizado)
    postQueVaiSerAtualizado.content = novoConteudo
}   

//temos que pegar o post que tem o id que precisamos
atualizaContentDoPost(1,"Novo conteúdo do post") //id,conteúdo do post


//DELETE
function apagaPost(id){
    const listaDePostsAtualizada = pegaPosts().filter((postAtual)=>{
        return postAtual.id !== id
    })
    miniTwitter.posts = listaDePostsAtualizada
    console.log(listaDePostsAtualizada)
}
apagaPost(1)
apagaPost(2)

console.log(pegaPosts()) //[]