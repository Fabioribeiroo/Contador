var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0;
const messageText = document.querySelector('currentNumber')



function increment(){
    if(currentNumber >= 0){
        currentNumberWrapper.style.color = "#6DB193"
    }
    
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    
}


function decrement(){
    if(currentNumber <= 0){
        currentNumberWrapper.style.color = "red"
    }
   
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
     
}




