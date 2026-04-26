// ==============================
// 🧪 SESSÃO DE DESAFIOS v4
// Mesmo nível, novos problemas
// ==============================


// *1. Variables*
// Declare uma variável com um número.
// Crie outra variável que seja o triplo dele.
// Mostre no console o resultado.
let variavel = 10
let variavelDois = variavel * 3
console.log(variavelDois)

// *2. Functions*
// Crie uma função que receba 1 número.
// Retorne true se ele for maior que 50, senão false.
function numer(a){
    if(a > 50){
        return(true)
    }else {
        return(false)
    }
}

// *3. Conditionals*
// Crie uma função que receba um número.
// - Se for múltiplo de 5 → "Múltiplo de 5"
// - Se for múltiplo de 7 → "Múltiplo de 7"
// - Se for múltiplo dos dois → "Múltiplo de 5 e 7"
// - Caso contrário → "Nenhum"
function numeroUm(a){
    if(a % 5 === 0 && a % 7 ===0){
        return("Múltiplo de 5 e 7")
    }else if(a % 5 === 0){
        return("Múltiplo de 5")
    }else if(a % 7 === 0){
        return("Múltiplo de 7")
    }else {
        return("Nenhum")
    }
}


// *4. Loops*
// Crie uma função que receba um número.
// Mostre no console todos os números de 0 até ele,
// mas:
// - pule os números ímpares
// - pare o loop se encontrar o número 20
function number(a){
    for (let i = 0; i <= a; i ++){
        if(i ===20){
            break
        }
        if (i % 2 !== 0){
            continue
        }
        console.log(i)
    }
}

// *5. Arrays (básico)*
// Crie uma função que receba um array.
// Retorne a soma apenas dos números pares.
function nova(array){
    let soma = 0
    array.forEach(element => {
        if (element % 2 === 0){
            soma += element
        }
    });
    return (soma)
}

// *6. Arrays + lógica*
// Crie uma função que receba um array de números.
// Retorne a diferença entre o maior e o menor número (sem usar Math.max/min)
function logica(array){
    let maior = array[0]
    let menor = array[0]
    array.forEach(element => {
        if(element > maior){
            maior = element
        }
        if (element < menor){
            menor = element
        }
    });
    return (maior - menor)
}

// *7. Arrays + condição*
// Crie uma função que receba um array.
// Retorne um novo array contendo apenas os números menores que 0.
function novaDois(array){
    let arrDois = []
    array.forEach(element => {
        if(element < 0){
            arrDois.push(element)
        }
    });
    return(arrDois)
}

// *8. Desafio final 🧠*
// Crie uma função que receba um array de números.
// Retorne:
// - a soma dos números positivos
// - a soma dos números negativos
function nova(array){
    let positivo = 0
    let negativo = 0
    array.forEach(element => {
        if (element > 0){
            positivo += element
        }else {
            negativo += element
        }
    });
    return {positivos: positivo, negativos: negativo}
}
// Exemplo:
// entrada: [10, -5, 3, -2]
// saída: { positivos: 13, negativos: -7 }


// ==============================
// 🧪 SESSÃO DE DESAFIOS v5
// Levemente mais complexo
// ==============================


// *1. Variables*
// Declare uma variável com um número.
// Crie outra variável que seja o resto da divisão desse número por 4.
// Mostre no console o resultado.
let numberOne = 15
let variaDois = numberOne % 4
console.log(variaDois)

// *2. Functions*
// Crie uma função que receba 2 números.
// Retorne a média entre eles.
function numberDois(a,b){
    return ((a+b) / 2)
}

// *3. Conditionals*
// Crie uma função que receba um número.
// - Se for múltiplo de 2 e maior que 10 → "Par e maior que 10"
// - Se for múltiplo de 2 → "Apenas par"
// - Caso contrário → "Ímpar"
function numberTres(a) {
    if (a % 2 === 0 && a > 10){
        return("Par e maior que 10")
    }else if (a % 2 === 0){
        return("Apenas par")
    }else {
        return("Ímpar")
    }
}

// *4. Loops*
// Crie uma função que receba um número.
// Mostre no console todos os números de 1 até ele,
// mas:
// - some apenas os números pares
// - ao final, mostre também a soma total desses pares
function numberQuatro(a){
    let pares = 0
    for (let i = 1;i <= a;i++){
        console.log(i)
        if(i % 2 === 0){
            pares += a
        }
    }
}

// *5. Arrays (básico)*
// Crie uma função que receba um array.
// Retorne quantos números são maiores que 100.
function rey(array) {
    let maiCem = 0
    array.forEach(element => {
        if (element > 100){
            maiCem++
        }
    });
    return(maiCem)
}

// *6. Arrays + lógica*
// Crie uma função que receba um array de números.
// Retorne o segundo maior número do array (sem usar sort)
function reirei(array){
    let maior = array[0]
    let segundoMaior = array[0]
    array.forEach(element => {
        if (element > maior){
            segundoMaior = maior
            maior = element
        }else if (element > segundoMaior && element < maior){
            segundoMaior = element
        }
    });
    return(segundoMaior)
}

// *7. Arrays + condição*
// Crie uma função que receba um array.
// Retorne um novo array contendo apenas os números que são múltiplos de 3.
functio seteArr(array){
    let novoArray = []
    array.forEach(element => {
        if(element % 3 === 0){
            novoArray += element
        }
    });
    return(novoArray)
}

// *8. Desafio final 🧠*
// Crie uma função que receba um array de números.
// Retorne um objeto contendo:
// - o maior número
// - o menor número
// - a média dos valores
function finalArray(array){
    let maiorNum = array[0]
    let menorNum = array[0]
    let soma = 0
    array.forEach(element => {
        if (element > maiorNum){
            maiorNum = element
        }
        if(element < menorNum){
            menorNum = element
        }
        soma += element
    });
    let media = soma / array.length
    return {maior: maiorNum, menor: menorNum, média: media}
}



// Exemplo de retorno:
// { maior: 20, menor: 2, media: 10 }