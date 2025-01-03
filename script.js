const display = document.querySelector('#display')

function numDisplay(num){
    display.value += num
}

function Backspace(){
    display.value = display.value.slice(0, -1)
}

function clearDisplay(){
    display.value = ''
}

function Calculate(){
    display.value = eval(display.value)
}