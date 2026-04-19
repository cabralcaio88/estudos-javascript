// Cria uma soma de dois números que alerta o resultado

document.querySelector('#botaoSoma').addEventListener('click', somar)
function somar() {
    const valorUm = Number(document.querySelector('#numUm').value)
    const valorDois = Number(document.querySelector('#numDois').value)
    const valorTres = Number(document.querySelector('#numTres').value)
    const result = valorUm + valorDois + valorTres
    alert (result);
}
// function somar (x,y,z){
//     alert(x + y + z)
// }



// Create a function that multiplys three numbers and alert the product

document.querySelector('#botaoMult').addEventListener('click', multiplicar)
function multiplicar() {
    const valorUmUm = Number(document.querySelector('#numUm').value)
    const valorDoisDois = Number(document.querySelector('#numDois').value)
    const valorTresTres = Number(document.querySelector('#numTres').value)
    const resultDois = valorUmUm * valorDoisDois * valorTresTres
    alert (resultDois);
}
// function multiplicar(x,y,z){
//     alert(x * y * z)
// }


// Variables
// Create a variable and console log the value
const variavelTeste = 32
console.log(variavelTeste)

// Create a variable, add 10 to it, and alert the value
let valorTeste = 5
alert(valorTeste + 10)

// Functions
// Create a function that subtracts 4 numbers and alerts the difference
function subUm(numUm,numDois,numTres) {
    const result = numUm - numDois - numTres
    alert(result)
}

// Create a function that divides one number by another and returns the remainder
function divUm (numUm, numDois) {
    return numUm/numDois
}

// Conditionals
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function jumanji (a,b){
    if (a + b > 50) {
        alert ("jumanji")
    }else {
        alert ("menor que 50")
    }
}

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multDiv (a,b,c){
    const result = a * b * c
    if (result % 3 === 0){
        alert("ZEBRA")
    }else{
        alert("nao é por 3")
    }
}
