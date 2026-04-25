// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let comida = "Baião Cremoso"
alert(comida)

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let variavelLetras = "string"
alert(variavelLetras[1])

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function numeros (a,b,c){
    alert((a/b) * c)
}
numeros (3, 5, 7)


// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function numeroUm (a){
    console.log(Math.cbrt(a))
}
numeroUm (15)

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
document.querySelector('#botaoEstac').addEventListener('click', estac)
function estac (){
    let valor = document.querySelector('#valor').innerText.toLowerCase()
    if (valor === "janeiro" || valor === "fevereiro" || valor === "março"){
        alert("YAY")
    }else {
        alert("boo")
    }
}

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
function numeroLup(a){
    for (let i = i; i <= a; i++){
        if (i % 5 !== 0){
            console.log(i)
        }
    }
}
// Create a function that takes in an array. If the first number is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".
function ArrayCod (arr) {
    let first = arr[1]
    let less = arr[arr.length - 1]
    if (first < less){
        alert("hi")
    }else if (first > less){
        alert("bye")
    }else {
        alert("we close in an hour")
    }
}

//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)
function arr (arrAy) {
    let novaArray = []
    arrAy.forEach((element, item) => {
          if (element % 2 === 0){
            novaArray.push(element)
        }
    });
    // for (let i = 0; i < arrAy.length; i++){
    //     if (arr[i] % 2 ===0){
    //         novaArray.push(arrAy[i])
    //     }
    // }
    return novaArray
}
arr([1,2,3,4,5])