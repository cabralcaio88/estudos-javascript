//Create a function that has a loop that prints '21' 21 times to the console
// and then call that function
//Bonus can you make it print '21' 21 times to the dom?
document.querySelector('#imprimir').addEventListener('click', selvagem)
function selvagem() {
    for (let i = 0; i < 22; i++) {
    console.log(i)
    document.querySelector('#vinteUm').innerText += "21" 
    }
}


//Create a function that grabs the number of snacks from the input and tells // you to stop that many times
document.querySelector('#comer').addEventListener('click', comedor)
function comedor() {
    let contador = Number(document.querySelector('#contUm').value)
    let i = 0
    while (i < contador){
        document.querySelector('#pare').innerText += "PARE" + " "
        i++
    }
}

// *Variables*
// Create a variable and console log the value
let variavel = 33
console.log(variavel)
// Create a variable, add 10 to it, and alert the value
let variavel = 10
alert(variavel + 10)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subUm(a,b,c,d){
    alert(a - b - c - d)
}
// Create a function that divides one number by another and returns the
// remainder
function dividUm(a,b){
    return(a % b)
}

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50
// alert Jumanji
function conditUm(a,b){
    let result = a + b
    if (result > 50) {
        alert("jumanji")
    }
}
// Create a function that multiplys three numbers and if the product is
// divisible by 3 alert ZEBRA
function multUm (a,b,c){
    let result = a * b * c
    if (result % 3 === 0){
        alert("ZEBRA")
    }
}

//*Loops*
//Create a function that takes in a word and a number. Console log the word x
// times where x was the number passed in
function lupe(a,b){
    for (let i = 0; i < a;i++){
        console.log(b)
    }
}