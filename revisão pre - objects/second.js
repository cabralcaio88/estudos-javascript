// ==============================
// 🧪 SESSÃO DE DESAFIOS v15
// Totalmente diferentes — mesmo nível
// (arrays, loops, condicionais, lógica)
// ==============================
// *1. Antes do maior*
// Crie uma função que receba um array de números.
// Retorne a soma de todos os números
// que aparecem antes do maior número do array.
function antesMaior(array){
    let maior = 0
    let soma = 0
    for (let i = 0;i<array.length;i++) {
        if (array[i] > array[maior]){
            maior = i
        }
    }
    for (let i = 0;i<maior;i++){
        soma += array[i]     
    }
    return soma     
}

// *2. Contar trocas de sinal*
// Crie uma função que receba um array.
// Retorne quantas vezes os números trocam de sinal
// (de positivo para negativo ou de negativo para positivo).
function trocSin(array){
    let troca = 0
    for (let i = 0;i<array.length - 1;i++){
        if (array[i] * array [i + 1] < 0){
            troca++
        }
    }
    return troca
}

// *3. Primeira sequência de 3*
// Crie uma função que receba um array.
// Retorne true se existir três números crescentes seguidos.
// Caso contrário, false.
function primSeq(array){
    for (let i = 0;i<array.length - 2;i++){
        if (array[i] < array[i +1] && array[i + 1] < array[i + 2]){
            return true
        }
    }
    return false
}

// *4. Soma pulando um*
// Crie uma função que receba um array.
// Some apenas os elementos de índice par.
// Retorne a soma.
function somPul(array){
    let soma = 0
    for (let i = 0;i < array.length;i++){
        if(i % 2 ===0){
            soma += array[i]
        }
    }
    return soma
}

// *5. Maior que a soma do anterior*
// Crie uma função que receba um array.
// Retorne quantas vezes um número é maior
// que a soma do número anterior com ele mesmo.
    function maiorAnt(array){
        let quant = 0
        for (let i = 1;i < array.length;i++){
            if (array[i] > array[i - 1] * 2){
                quant++
            }
        }
        return quant
    }

// *6. Cortar no primeiro zero*
// Crie uma função que receba um array.
// Retorne um novo array com os elementos
// apenas até o primeiro zero encontrado (sem incluir o zero).
function cortZero(array){
    let arrayNov = []
    for (let i = 0;i < array.length;i++){
        if (array[i] === 0){
            return arrayNov
        }
        arrayNov.push(array[i])
    }
    return arrayNov
}

// *7. Repetidos não consecutivos*
// Crie uma função que receba um array.
// Retorne true se existir um número que aparece
// mais de uma vez, mas não em posições seguidas.
function repCons(array){
    for (let i = 0;i < array.length;i++){
        for (let j = i + 1; j < array.length;j++){
            if (array[j] === array[i] && j !== i + 1){
                return true
            }
        }
        
    }
    return false
}

// *8. Desafio final 🧠*
// Crie uma função que receba um array de números.
// Retorne um objeto contendo:
// - a quantidade de números pares depois do primeiro ímpar
// - a soma dos números antes do último par
// - quantos números são iguais ao segundo elemento
function desFin(array){
    let quantParIn = 0
    let soma = 0
    let inparUm = 0
    let ultimoPar = 0
    let iguais = 0
    for (let i = array.length - 1;i >= 0;i--){
        if (array[i] % 2 ===0){
            ultimoPar = i
            break
        }
    }
    for (let i = 0;i < array.length;i++){
        if (array[i] % 2 !== 0){
            inparUm = i
            break
        }
    }
    for (let i = inparUm + 1; i < array.length;i++){
        if (array[i] % 2 === 0){
            quantParIn++
        }
    }
    for (let i = 0;i < ultimoPar;i++){
        soma += array[i]
    }
    for (let i = 0; i < array.length;i++){
        if (array[i] === array[1]){
            iguais++
        }
    }
    return {
        ParesQuant: quantParIn,
        SomaAntes: soma,
        IguaisSegundo: iguais
    }
}
