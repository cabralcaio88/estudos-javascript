//---- Easy
//create a variable and assign it a number
//minus 10 from that number
//print that number to the console
let numer = 77
console.log(numer - 10)
//---- Medium
//create a variable that holds a value from the input
//add 25 to that number
//alert that number
document.querySelector('#botaoValor').addEventListener('click', valorSoma)
let resultSoma = 0
function valorSoma() {
    let valorInput = Number(document.querySelector("#inputValor").value)
    resultSoma = valorInput + 25
    alert(resultSoma)
}
//---- Hard
//create a variable that holds the h1
//add an event listener to that element that console logs the sum of the two
// previous variables
let variaSom = document.querySelector('#somVar')
variaSom.addEventListener('click', somador)
function somador(){
    console.log(resultSoma + numer)
}
//Create a conditonal that checks their age
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they
// can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too
document.querySelector('#ageButton').addEventListener('click', conditAge)
function conditAge(){
    let idadeCheck = Number(document.querySelector('#ageCheck').value)
    if (idadeCheck < 16) {
        document.querySelector('#aviso').innerText = "Você não pode dirigir"
    }else if (idadeCheck < 18) {
        document.querySelector('#aviso').innerText = "Não pode entrar na festa"
    }else if (idadeCheck < 21) {
        document.querySelector('#aviso').innerText = "Não pode dirigir"
    }else if (idadeCheck < 25) {
        document.querySelector('#aviso').innerText = "Não pode alugar carros"
    }else if (idadeCheck < 30) {
        document.querySelector('#aviso').innerText = "Ainda não pode financiar carros"
    }else{
        document.querySelector('#aviso').innerText = "Sua vida já está acabando bro"
    }
}
//----Easy
//create a function that subtracts two numbers and alerts the difference
function subTen (a,b) {
    let result = a - b
    alert(result)
}

//create a function that divides three numbers and console logs the quotient
function dividNum (a,b,c) {
    let resultFun = a / b / c
    console.log(resultFun)
}
//create a function that multiplys three numbers and returns the product
function multNum (a,b,c) {
    let resultMult = a * b * c
    return resultMult
}
//----Medium
// Crie uma função que recebe três números. Some os dois primeiros e retorne o resto da divisão dessa soma pelo terceiro número.
function numerosS (a,b,c) {
    let result = a + b
    return result % c
}
function numerosS (a,b,c) {
    return (a + b) / c
}
//----Hard
//create a function that takes in 4 numbers. Multiply the first two numbers.
// If the product is greater than 100 add the sum of the last two numbers and
// console log the value. If the product is less that 100, subtract the
// difference of the last two numbers and console log the value. If the product
// is 100, multiply the first three numbers together and alert the remainder of
// dividing the fourth number
function hardCor (a,b,c,d) {
    let resultUm = a * b
    if (resultUm > 100){
        console.log(resultUm + c + d)
    }else if (resultUm < 100){
        let parcial = c - d
        console.log(resultUm - parcial)
    }else {
        let parcialDois = a * b * c
        console.log(parcialDois % d)
    }
}

