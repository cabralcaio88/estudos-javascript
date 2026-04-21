//---- Easy
//create a variable and assign it a boolean
//create a variable and assign it a string that is a number
//add 10 to that number - how?!? https://media.giphy.com/media/lkdH8FmImcGoylv3t3
//print that number to the console
let bulin = true
let variavel = "12"
let variavelDois = Number(variavel) + 10
console.log(variavelDois)
//---- Medium
//create a variable that holds a value from the input
//add 21 to that number
//alert that number
document.querySelector('#click').addEventListener('click', teste)
function teste() {
let variavel = Number(document.querySelector('#numberUm').value)
alert(variavel + 21)
}
//---- Hard
//create a variable that holds the h1
let variavem = document.querySelector('#agaUm')
//add an event listener to that element that places the product of the two previous variables in the paragraph
variavem.addEventListener('click', variavelDois)
function variavelDois() {
}


// Create a conditional that checks the day
// If Tuesday or Thursday, tell them they have class
// If Saturday, tell them they have Office Hours
// If Friday and House Turing, they have private office hours
// If Wednesday and House Hopper, tell them they have private office hours
// If Monday and House Hamilton, tell them to book a 1on1
// If any other day or wrong house, tell them to study
// On click of the h1
// Take the value from the input
// Place the result of the conditional in the paragraph
document.querySelector('#checkBtt').addEventListener('click', checador)
function checador() {
    let cheque = document.querySelector('#diaUm').value.toLowerCase().trim()
    let casa = document.querySelector('#casa').value.toLowerCase().trim()
    let resultado = document.querySelector("#resultado")
    if (cheque === "terça" || cheque === "quinta"){
        resultado.innerText = "Tem aula"
    }else if (cheque === "sábado"){
        resultado.innerText = "Office Hours"
    }else if (cheque === "sexta" && casa === "turing") {
        resultado.innerText = "Private Office"
    }else if (cheque === "quarta" && casa === "hopper") {
        resultado.innerText = "Private Office"
    }else if (cheque === "segunda" && casa === "hamilton") {
        resultado.innerText = "book 1on1"
    }else {
        resultado.innerText = "Vá Estudar"
    }
}


// ---- Easy
// Create a function that adds two numbers and alerts the difference
function addNum (a,b){
    alert(a + b)
}
// Create a function that divides two numbers and console logs the quotient
function divNum (a,b){
    console.log(a / b)
}
// Create a function that multiplies four numbers and returns the product
function (a,b,c,d) {
    return(a*b*c*d)
}
// ---- Medium
// Create a function that takes in four numbers.
// Add the first two numbers.
// Then take the result and divide it by the difference of the last two numbers.
function medUm (a,b,c,d){
    let soma = a + b
    let parc = c - d
    let resultado = soma / parc
    return(resultado)
}
// ---- Hard
// Create a function that takes in 4 numbers.
// Multiply the first two numbers.
// If the result is greater than 100, add the sum of the last two numbers and console log the result.
// If the result is less than 100, subtract the difference of the last two numbers and console log the result.
// If the result is 100, multiply the first three numbers together and alert the fourth number.
function hardUm (a,b,c,d){
    let resultUm = a * b
    if (resultUm > 100){
        let resultDois = c + d
        console.log(resultUm + resultDois)
    }else if (resultUm < 100){
        let resultDois = c - d
        console.log(resultUm - resultDois)
    }else {
        let resultDois = a * b * c
        return(resultDois)
        alert(d)
    }
}



// Create a function that has a loop that prints your resolution 365 times to the console
// and then call that function
// Bonus: can you make it print your resolution 365 times to the DOM?
document.querySelector('#checkBtt').addEventListener('click', lupe)
function lupe(){
    let texto = "teste"
    for (let i = 0; i < 365;i++){
        document.querySelector('#tresmeia').innerText += texto
        console.log(texto)
    }
}


// *Variables*
// Create a variable and alert log the value
let variavel = 30
alert(variavel)
// Create a variable, add -15 to it, and print the value to the console
let variavel = -15
console.log(variavel)

// *Functions*
// Create a function that multiplies 4 numbers and alerts the product
function cuLi (a,b,c,d){
    alert(a*b*c*d)
}
// Create a function that divides one number by another and returns the remainder plus 10
function divUm (a,b){
    let result = a%b
    return(result + 10)
}

// *Conditionals*
// Create a function that adds three numbers and if the sum is greater than 100 alert "Block Party"
function condUm (a,b,c){
    let result = a + b + c
    if(result > 100){
        alert("block party")
    }else {
        alert("no")
    }
}
// Create a function that divides five numbers and if the quotient is divisible by 5 alert LINCOLN
function divdDois (a,b,c,d,e){
    let result = a / b / c / d / e
    if (result % 5 === 0){
        alert("lincoln")
    }
}