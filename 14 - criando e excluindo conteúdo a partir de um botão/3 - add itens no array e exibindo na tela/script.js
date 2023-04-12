const button = document.querySelector('button')

function adicionar(){
    const input = document.querySelector('input').value
    let array =[]
    array.push(input)
    
    console.log(array)
    document.write(array)
   
}

button.addEventListener('click',adicionar)