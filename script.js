const display = document.querySelector('#display')

function numDisplay(num){
    display.value += num
}

function clearDisplay(){
    display.value = ''
}

function Calculate(){
    display.value = eval(display.value)
}

