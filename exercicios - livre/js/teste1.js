// ==============================
// 🧪 MINI PROVA JS (nível progressivo)
// ==============================
// *1. Variables*
// Declare uma variável com um número.
// Crie outra variável que seja a metade dele.
// Mostre no console o resultado.
let variavel = 15
let metade = variavel / 2
console.log(metade)

// *2. Functions*
// Crie uma função que receba 2 números.
// Retorne true se a soma deles for maior que 20, senão false.
function recebedor (a,b){
    if (a + b > 20){
        return(true)
    }else {
        return(false)
    }
}

// *3. Conditionals*
// Crie uma função que receba um número.
// - Se for múltiplo de 2 e de 3 → "FizzBuzz"
// - Se for só múltiplo de 2 → "Fizz"
// - Se for só múltiplo de 3 → "Buzz"
// - Caso contrário → "Nada"
function (a){
    if (a % 2 === 0 && a % 3 === 0){
        alert("FizzBuzz")
    }else if(a % 2 === 0){
        alert("Fizz")
    }else if (a % 3 === 0){
        alert("Buzz")
    }else {
        alert("Nada")
    }
}

// *4. Loops*
// Crie uma função que receba um número.
// Mostre no console todos os números de 1 até ele,
// mas:
// - pule os múltiplos de 4
// - pare o loop se encontrar o número 15
function nome (a){
    for (let i = 1; i <= a; i++){
        if (i === 15){
            break
        }
        if (i % 4 !== 0){
            console.log(i)
        }
        
    }
}

// *5. Arrays (básico)*
// Crie uma função que receba um array.
// Retorne a soma de todos os números negativos.
function arr(array){
    let soma = 0
    array.forEach(element => {
        if(element < 0){
            soma += element
        }
    });
    return soma
} 

// *6. Arrays + lógica*
// Crie uma função que receba um array de números.
// Retorne o menor número do array (sem usar Math.min)
function arr(array){
    let variavel = array[0]
    array.forEach(element => {
        if(element < variavel){
            variavel = element
        }
    });
    return(variavel)
}

// *7. Arrays + condição*
// Crie uma função que receba um array.
// Retorne um novo array contendo apenas os números entre 5 e 15 (inclusive).
function arr(array){
    let reirei = []
    array.forEach(element => {
        if(element >= 5 && element <= 15){
            reirei.push(element)
        }
    });
    return(reirei)
}

// *8. Desafio final 🧠*
// Crie uma função que receba um array de números.
// Retorne:
// - quantos números são pares
// - quantos números são ímpares
function arr(array){
    let pares = 0
    let impares = 0
    array.forEach(element => {
        if (element % 2 === 0){
            pares++
        }else{
            impares++
        }
    });
    return { pares: pares, impares:  impares }
}

// Exemplo de retorno esperado:
// { pares: 3, impares: 2 }