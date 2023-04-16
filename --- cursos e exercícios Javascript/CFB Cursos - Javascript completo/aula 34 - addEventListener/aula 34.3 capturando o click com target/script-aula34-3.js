const c1 = document.querySelector("#c1")

c1.addEventListener("click",(evt)=>{  //crio uma const (na vdd um parâmetro da função) 'evt' (evento)
    const el = evt.target           //esse parâmetro'evt' vai armazenar o elemento que disparou o evento. E 'target vai identificar qual elemento foi esse
    el.classList.add('destaque')   // vai ser add ao 'el' uma classe 'destaque'/ essa classe nao existe no html, ela so será executada atraves do evento                          
})                                //vou armazenar tudo isso numa const 'el' = elemento


// c1.addEventListener("click",(evt)=>{   //aqui eu vejo no console, a cada click qual elemento o target está me mostrando
//     console.log(evt.target )}) 
