// ==============================
// 🧪 SESSÃO DE DESAFIOS v6
// Mais lógica, mesma dificuldade
// ==============================
// *1. Análise simples*
// Crie uma função que receba um array de números.
// Retorne:
// - quantos números são maiores que 10
// - quantos são menores ou iguais a 10
function comparation(array){
    let maioresDez = 0
    let outro = 0
    array.forEach(element => {
        if(element > 10){
            maioresDez++
        }else {
            outro++
        }
    });
    return{maiores: maioresDez, menoresIguais: outro}
}


// *2. Soma condicional*
// Crie uma função que receba um array.
// Retorne a soma apenas dos números pares que são maiores que 5.
function conditUm(array){
    let soma = 0
    array.forEach(element => {
        if (element > 5 && element % 2 ===0){
            soma += element
        }
    });
    return(soma)
}

// *3. Misturando condições*
// Crie uma função que receba um número.
// - Se for par e maior que 20 → "Alto e par"
// - Se for par e menor ou igual a 20 → "Par comum"
// - Se for ímpar → "Ímpar"
function mistCond(a){
    if (a > 20 && a % 2 === 0){
        return("Alto e par")
    }else if (a <= 20 && a % 2 === 0){
        return("Par comum")
    }else if (a % 2 !== 0) {
        return("Impar")
    }
}

// *4. Loop com controle*
// Crie uma função que receba um número.
// Mostre no console os números de 1 até ele,
// mas:
// - pule os números múltiplos de 3
// - pare o loop se encontrar um número maior que 30
function lupCond(a){
    for (let i = 1;i <=a;i++){
        if (i > 30){
            break
        }
        if (i % 3 !== 0){
            console.log(i)
        }
    }
}

// *5. Comparação em array*
// Crie uma função que receba um array de números.
// Retorne quantos elementos são maiores que o primeiro elemento.
function compArr(array){
    let primEl = 0
    array.forEach(element => {
        if (element > array[0]){
            primEl++
        }
    });
    return(primEl)
}

// *6. Dupla verificação*
// Crie uma função que receba um array.
// Retorne true se:
// - existir pelo menos um número negativo
// - E existir pelo menos um número maior que 50
function dupVer(array){
    let negNum = 0
    let cincMaior = 0
    array.forEach(element => {
        if (element < 0){
            negNum++
        }
        if (element > 50){
            cincMaior++
        }
    });
    if (negNum > 0 && cincMaior > 0){
        return(true)
    }else {
        return(false)
    }
}

// *7. Transformação de array*
// Crie uma função que receba um array de números.
// Retorne um novo array onde:
// - números pares são multiplicados por 2
// - números ímpares são mantidos como estão
function transArr(array){
    let arrayNov = []
    array.forEach(element => {
        if (element % 2 === 0){
            arrayNov.push(element*2)
        }else{
            arrayNov.push(element)
        }
    });
    return(arrayNov)
}

// *8. Desafio final 🧠*
// Crie uma função que receba um array de números.
// Retorne um objeto contendo:
// - soma total dos números
// - quantidade de números pares
// - quantidade de números ímpares
// - média dos valores]
function finalDes(array){
    let somaTot = 0
    let quantTotPar = 0
    let quantNumImp = 0
    let media = 0
    array.forEach(element => {
        somaTot += element
        if (element % 2 === 0){
            quantTotPar++
        }else{
            quantNumImp++
        }
    });
    media = somaTot / array.length
    return{
        Soma: somaTot, 
        Pares: quantTotPar, 
        Impares: quantNumImp, 
        Media: media}
}

