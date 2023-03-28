const btn_start = document.getElementById('btn-start')
const btn_pause = document.getElementById('btn-pause')
const btn_stop = document.getElementById('btn-stop')
const counter = document.getElementById('counter')


let sec = 0
let min = 0
let hr = 0
let interval


function twoDigits(digit){
    if(digit < 10){
        return ('0'+digit)
    }else{
        return (digit)
    }
}

function start(){
        watch()
        interval = setInterval(watch,1000)      
}

function pause(){
       clearInterval(interval)
}

function stop(){
        counter.innerText = '00:00:00'
}


/* Contando os minutos e segundos do Cronômetro */
function watch() {

    if (sec == 60) {
        min++
        sec = 0
        if (min == 60) {
            min = 0
            hr++
        }
    }
    counter.innerText = `${twoDigits(hr)}:${twoDigits(min)}:${twoDigits(sec++)}`
}
watch()



btn_start.addEventListener('click',(start))
btn_pause.addEventListener('click',(pause))
btn_stop.addEventListener('click',(stop))

/*
 setInterval(umaFunção, miliseg) - é uma função que chama outra função a cada período de tempo

clearInterval - vai pausar a fnção setInterval dentro da função start


 1- quando o botao de start for clicado, 
    vai acionar o setInterval, 
    que vai chamar a função watch a cada 1000 milisegundos

2 - Dentro da função watch:
    se a variável 'sec' chegar a 60
    a variável minutos vai receber mais um
    e  'sec' vai zerar

    counter - é o H3, onde vai mostrar os números do relógio
             dentro da tag H3, receberá os segundos a cada renderização de setInterval(sec++)
    
*/
