/*================== comfunção callback ==============*/
//vamos  fazer uma função que já deixe o button estilizado, com função e vamos chamar essa função quantas vezes quisermos  abaixo

function newButton (text, callback){

    const body = document.querySelector('body')
    const button = document.createElement('button')
    button.textContent = text
    body.insertAdjacentElement('beforeend',button)

    callback()

    // return button
}    

newButton('login',()=>{
    console.log('funcionou, estamos dentro da função newButton - login')
})
newButton('signup',()=>{
    console.log('funcionou, estamos dentro da função newButton - signup')

})

//aquele callback lá em cima, vai ser representado nas funções abaixo











/*==================sem função callback ==============*/

// const login = newButton('Login')
// const signup = newButton('Signup')

// login.style.cssText=`
//     font-size: 40px;

// `
// login.addEventListener('click',()=>{
//     alert('fazendo login')
// })


// signup.style.cssText=`
//     font-size: 40px;
//     background: red;
//     margin-left: 15px;
//     color: white;
// `
// signup.addEventListener('click',()=>{
//     alert('fazendo signup')
// })