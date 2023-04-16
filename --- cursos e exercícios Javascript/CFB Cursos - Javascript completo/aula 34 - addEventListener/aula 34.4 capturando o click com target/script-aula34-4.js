const cursos = [...document.querySelectorAll(".curso")] //obtendo todos os elementos q usam a classe curso e retornar um array

cursos.map((el)=>{                         //o map vai percorrer todo o array 'cursos', e executar uma função
    el.addEventListener("click",(evt)=>{    //em cada 'elemento' do 'map', vou add um 'listener'
    const el = evt.target                 //evt vai armazenar a resp do target
    el.classList.add("destaque")
    //console.log(`${el.id} foi clicado`)
    console.log(`${el.innerHTML} foi clicado`)
})
})

// cursos.addEventListener("click",(evt)=>{  //crio uma const (na vdd um parâmetro da função) 'evt' (evento)
//     const el = evt.target           //esse parâmetro'evt' vai armazenar o elemento que disparou o evento. E 'target vai identificar qual elemento foi esse
//     el.classList.add('destaque')   // vai ser add ao 'el' uma classe 'destaque'/ essa classe nao existe no html, ela so será executada atraves do evento                          
// })                                //vou armazenar tudo isso numa const 'el' = elemento


// c1.addEventListener("click",(evt)=>{   //aqui eu vejo no console, a cada click qual elemento o target está me mostrando
//     console.log(evt.target )}) 
