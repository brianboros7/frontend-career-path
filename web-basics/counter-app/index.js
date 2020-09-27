let myButton = document.getElementById("btn")
let myTitle = document.getElementById("title")
let counter = 5; 

myButton.addEventListener('click', function() {
    
    counter += 5

    myButton.textContent = counter 
})