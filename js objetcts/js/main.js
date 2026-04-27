// ==============================
// 🧪 SESSÃO DE DESAFIOS v9
// Novos problemas (sem repetição)
// ==============================

// *1. Primeira ocorrência*
// Crie uma função que receba um array de números.
// Retorne o primeiro número que for maior que 10.
// (se não existir, retorne null)
function primeiraFunc(array){
    for (let i = 0; i < array.length; i++){
        if (array[i] > 10){
            return (array[i])
        }
    }
    return(null)
}

// *2. Sequência crescente*
// Crie uma função que receba um array.
// Retorne true se os números estiverem em ordem crescente.
// Caso contrário, false.
function seqCres(array){
    for (let i = 1; i <= array.length; i++){
        if (i < array[i - 1]){
            return(false)
        }
    }
    return(true)
}

// *3. Soma até parar*
// Crie uma função que receba um array de números.
// Some os valores até encontrar um número negativo.
// Retorne o resultado da soma.
function somAm(array){
    let result = 0
    array.forEach(element => {
        if (element < 0){
            return(result)
        }else{
            result += element
        }
    });
    return(result)
}

// *4. Contagem específica*
// Crie uma função que receba um array.
// Retorne quantos números estão entre 10 e 20 (exclusivo).
function contEsp(array){
    let contagemNum = 0
    array.forEach(element => {
        if (element >= 10 && element <= 20){
            contagemNum++
        }
    });
    return(contagemNum)
}

// *5. Comparação entre vizinhos*
// Crie uma função que receba um array.
// Retorne quantas vezes um número é maior que o número anterior.
function compViz(array){
    let cont = 0
    for (let i = 0; i < array.length;i++){
        if (array[i] > array[i - 1]){
            cont++
        }
    }
    return(cont)
}

// *6. Encontrar posição*
// Crie uma função que receba um array e um número.
// Retorne o índice da primeira vez que esse número aparece.
// (se não existir, retorne -1)
function retornPos(array, a){
    for (let i = 0; i < array.length;i++){
        if (array[i] === a){
            return(i)
        }
    }
    return(-1)
}

// *7. Construção de novo array*
// Crie uma função que receba um array de números.
// Retorne um novo array contendo:
// - apenas os números diferentes do primeiro elemento
function novArr(array){
    let arrayNov = []
    array.forEach(element => {
        if(element !== array[0]){
            arrayNov.push(element)
        }
    });
    return(arrayNov)
}

// *8. Desafio final 🧠*
// Crie uma função que receba um array de números.
// Retorne um objeto com:
// - quantos números são iguais ao último elemento
// - soma dos números antes do último elemento
function final(array){
    let igual = 0
    let soma = 0
    let ultimo = array[array.length - 1]
    for (let i = 0; i < array.length;i++){
        if (array[i] === ultimo){
            igual++
        }
        if(i < array.length - 1){
            soma+=array[i]
        }
    }
    return{
        Iguais: igual,
        somaNum: soma
    }
}

// ==============================
// 🧪 SESSÃO DE DESAFIOS v10
// (nível entrevista técnica)
// ==============================
// *1. Último diferente*
// Crie uma função que receba um array de números.
// Retorne o último número que for diferente do primeiro.
// (se todos forem iguais, retorne null)
function ultimo(array){
    let result = [0]
    for (let i = array.lenght -1; i >= 0;i--){
        if (array[i] !== array[0]){
            result.push(array[i])
        }
    }
    return (null)
}

// *2. Soma seletiva*
// Crie uma função que receba um array.
// Some os números até encontrar um número maior que 50.
// (não inclua esse número na soma)
function somaSel(array){
    let soma = 0
    for (let i = 0; i < array.length;i++){
        if (array[i] > 50){
            break
        }
        soma += array[i]
    }
    return(soma)
}

// *3. Par escondido*
// Crie uma função que receba um array.
// Retorne true se existir dois números pares seguidos.
// Caso contrário, false.
function parEsc(array){
    for (let i = 0; i < array.length;i++){
        if (array[i] % 2 === 0 && array[i] === array[i + 1] % 2 === 0){
            return(true)
        }
    }
    return(false)
}


// *4. Crescimento parcial*
// Crie uma função que receba um array.
// Retorne quantas vezes o número atual é maior que o anterior.
function crescParc(array){
    let result = 0
    for (let i = 1; i < array.length;i++){
        if (array[i]>array[i-1]){
            result++
        }
    }
    return(result)   
}

// *5. Remoção controlada*
// Crie uma função que receba um array de números.
// Retorne um novo array removendo apenas a primeira ocorrência de um número negativo.



// *6. Verificação dupla específica*
// Crie uma função que receba um array.
// Retorne true se:
// - o primeiro número for menor que o último
// - E existir pelo menos um número igual a 10


// *7. Transformação com índice*
// Crie uma função que receba um array.
// Retorne um novo array onde:
// - elementos em índices pares são multiplicados por 2
// - elementos em índices ímpares são divididos por 2


// *8. Desafio final 🧠*
// Crie uma função que receba um array de números.
// Retorne um objeto com:
// - quantos números são iguais ao primeiro elemento
// - quantos números são iguais ao último elemento
// - soma de todos os números que NÃO são iguais a nenhum desses dois