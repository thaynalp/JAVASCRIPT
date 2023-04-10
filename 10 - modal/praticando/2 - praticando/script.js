    const openModal = document.querySelector('#open-modal')
    const closeModal = document.querySelector('#close-modal')
    const modal = document.querySelector('#modal')
    const fade = document.querySelector('#fade')
    

    // const toggleModal =()=>{
    //     modal.classList.toggle('hide') 
    //     fade.classList.toggle('hide')
    // }

    // [openModal,closeModal,fade].forEach(el=>{
    //     el.addEventListener('click',()=>{toggleModal()})
    // })
    

     [modal,fade].forEach(el=>{
            el.addEventListener('scroll',()=>{
            
            if(window.pageYOffset > 800){
            modal.classList.toggle('hide') 
            fade.classList.toggle('hide')

           }

        })
    })





/*método toggle: 
    verifica se na lista de classes existe a classe desejada. 
    caso nao tenha, ele coloca a classe, caso tenha ele remove
*/

//classList: 
//modal vai encontrar a lista de classes dele e
// vai add um 'esconder', hide
