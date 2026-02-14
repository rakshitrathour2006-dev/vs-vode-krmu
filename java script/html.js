let display = document.getElementById('display')
let incrementElement = document.getElementById('plus')
let decrementElement = document.getElementById('minus')
let resetElement = document.getElementById('reset')
 
let displayvalue = 0

decrementElement.addEventListener('click',()=>{
    displayvalue= displayvalue-1;
    display.textContent=displayvalue
    console.log(displayvalue)

})

incrementElement.addEventListener('click', ()=>{
    displayvalue=displayvalue+1;
    display.textContent=displayvalue
    console.log(displayvalue)
})

resetElement.addEventListener('click',()=>{
    displayvalue=0;
    display.textContent=displayvalue
    console.log(displayvalue)
})