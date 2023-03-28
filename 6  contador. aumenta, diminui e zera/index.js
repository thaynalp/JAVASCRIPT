const btnDecrementar = document.getElementById('btn_decrementar')
const btnZerar = document.getElementById('btn_zerar')
const btnIncrementar = document.getElementById('btn_incrementar')
const p = document.getElementById('contador')

// let contador = 0
// p.innerHTML = contador  //o HTML contido em 'p' vai receber o contador


// btnDecrementar.addEventListener('click',()=>{
//     p.innerHTML = --contador
// })

// btnIncrementar.addEventListener('click',()=>{
//     p.innerHTML = ++contador
// })

// btnZerar.addEventListener('click',()=>{
//     p.innerHTML = contador = 0
// })

function contador() {
    let contador = 0
    p.innerHTML = contador

    btnDecrementar.addEventListener('click', () => {
        p.innerHTML = --contador
    })

    btnIncrementar.addEventListener('click', () => {
        p.innerHTML = ++contador
    })

    btnZerar.addEventListener('click', () => {
        p.innerHTML = contador = 0
    })
}

contador()