// display content
function displayContent(content){
    result.value+=content
}

// func to clear
function calcClear() {
    result.value=""
}

// result
function calcOutput() {
    result.value=eval(result.value)
}

// backspace
function removeLastDigit() {
    result.value=result.value.slice(0,-1)
}