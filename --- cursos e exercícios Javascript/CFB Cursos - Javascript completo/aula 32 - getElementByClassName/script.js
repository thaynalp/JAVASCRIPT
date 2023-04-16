// const cursosTodos = document.getElementsByClassName("curso") //dessa forma ele retorna no console um 'HTMLcollection'
                                                                //1 - vamos transformar 'HTMLcollection' em um 'array' para tornar a manipulação mais ampla
                                                                //vamos usar o operador 'SPREAD' -  e agr podemos usar os métodos de um array

const cursosTodos = [...document.getElementsByClassName("curso")] //...Spread= array
const cursosC1 = [...document.getElementsByClassName("c1")] //...Spread= array
const cursosC2 = [...document.getElementsByClassName("c2")] //...Spread= array
const cursosEspecial = document.getElementsByClassName("curso")[0] //retornando um elemento específico na class'curso', o elemento da posição zero

console.log(cursosTodos)
console.log(cursosC1)
console.log(cursosC2)
console.log(cursosEspecial)

// Vamos add uma outra classe em cima da classe já existente
// essa classe adicionada, será criada diretamente no css e chamada no js, com manipulação de DOM

/*
cursosTodos.map((el)=>{   //map vai percorrer todos os elementos de 'cursosTodos' e vai executar uma 'função'
    el.classList.add("destaque") //vou pegar 'el'(elemento por elemento) 2 - e vou chamar o'classList' com 'add' (vou add uma classe 'destaque' a esses elementos)
                                //classe 'destaque' foi criada no css e chamada aq. nao existe no html
})
*/

cursosC1.map((el)=>{   //map vai percorrer todos os elementos de 'cursosC1' e vai executar uma 'função'
el.classList.add("destaque") //vou pegar 'el'(elemento por elemento) 2 - e vou chamar o'classList' com 'add' (vou add uma classe 'destaque' a esses elementos)
})                                //classe 'destaque' foi criada no css e chamada aq. nao existe no html