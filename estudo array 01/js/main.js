//Create an array of movies with at least three movies.
let novaArray = ["Agente Secreto", "Aquarius", "Ainda estou aqui"]

//Using the array from above, store the first movie in a variable
let varUm = novaArray[0]

//Get the length of the original array and store it in a new variable
let tamanhoArray = novaArray.length

//Get the last element in that array and store it in a new variable. What if your array was really large and you didn't know the last index? Would your solution still work?
let varDois = novaArray [-1]

//Create an array of movie titles. Loop through the array and each element to the h2.
document.querySelector('#botaoUm').addEventListener('click', arrayFunc)
function arrayFunc(){
    let filmesArray = ["Agente Secreto", "Aquarius", "Ainda estou aqui"]
    for (let i = 0; i < filmesArray.length;i++){
    document.querySelector('#arrayText').innerText += filmesArray[i]
    }
}
// opc2
function arrayFunc(){
    let filmesArray = ["Agente Secreto", "Aquarius", "Ainda estou aqui"]
    filmesArray.forEach((element,item) => {
    document.querySelector('#arrayText').innerText += element
    })
}


//Create an array of numbers. Loop through the array and three to each number and replace the old number.
let numArray = [1,2,3,4,5]
for (let i=0; i < numArray.length; i++){
    numArray[i] = numArray[i] + 3
}
// OPÇÃO 2
numArray.forEach((element,item) => {
    numArray[item] = element + 3
})
console.log(numArray)


//Find the average of all the numbers from question two
let numeroSoma = 0
for (let i = 0; i < numArray.length; i++){
    numeroSoma += numArray[i]
}
let result = numeroSoma / numArray.length
console.log(result)
// OPÇÃO 2
let numeroSomaDois = 0
numArray.forEach((element,item) => {
    numeroSomaDois += element
})
let resultDois = numeroSomaDois / numArray.length