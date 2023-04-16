// const cursosTodos = document.getElementsByClassName("curso") //dessa forma ele retorna no console um 'HTMLcollection'
                                                                //1 - vamos transformar 'HTMLcollection' em um 'array' para tornar a manipulação mais ampla
                                                                //vamos usar o operador 'SPREAD' -  e agr podemos usar os métodos de um array

const divTodas = [...document.getElementsByTagName("div")] //
const cursosTodos = [...document.getElementsByClassName("curso")] //
const cursosC1 = [...document.getElementsByClassName("c1")] //
const cursosC2 = [...document.getElementsByClassName("c2")] //
const cursosEspecial = document.getElementById("c1")[6] //

console.log(divTodas)
console.log(cursosTodos)
console.log(cursosC1)
console.log(cursosC2)
console.log(cursosEspecial)



// cursosC1.map((el)=>{   //map vai percorrer todos os elementos de 'cursosC1' e vai executar uma 'função'
// el.classList.add("destaque") //vou pegar 'el'(elemento por elemento) 2 - e vou chamar o'classList' com 'add' (vou add uma classe 'destaque' a esses elementos)
// })                                //classe 'destaque' foi criada no css e chamada aq. nao existe no html