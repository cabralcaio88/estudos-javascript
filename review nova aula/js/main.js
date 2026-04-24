// *Variables*
// Declare a variable, assign it a boolean, and alert the value
let variavel = true
console.log(variavel)
// Declare a variable, reassign it to your favorite color, and console log the value
let variavel = "black"
console.log(variavel)
// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first
// 3 numbers divided by the fourth. Return the result. Call the function.
functio funcUm (a,b,c,d){
    return((a+b+c) / d)
}
// Create a function that takes in 2 numbers. Console log the first number to
// the power of the second. Call the function.
function takeIn (a,b){
    console.log(a ** b)
}
takeIn(3,5)
// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is
// true, alert the string. If the boolean is false, console log the string.

function booUm(true,str) {
    if (true){
        alert(str)
    }else{
        console.log(str)
    }
}


// *Loops*
// Create a function that takes in a number. Console log all values from 1 to
// that number, but if the number is divisible by 3 log "fizz" instead of that
// number, if the number is divisible by 5 log "buzz" instead of the number, and
// if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number.
function funcDois (a){
    for (let i = 1; i <= a;i++){
        if (i % 3 === 0 && a % 5 === 0){
            console.log("fizbuzz")
        }else if (i % 3 === 0){
            console.log("fizz")
        }else if (i % 5 === 0){
            console.log("buzz")
        }else{
            console.log(i)
        }
    }
}

con