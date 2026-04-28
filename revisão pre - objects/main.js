// ==============================
// 🧪 SESSÃO DE DESAFIOS v11
// Mesmo nível — problemas diferentes
// ==============================
// *1. Primeiro par*
// Crie uma função que receba um array de números.
// Retorne o primeiro número par encontrado.
// Se não existir, retorne null.
function primeiroPar (array){
    for (let i = 0; i < array.length;i++){
        if (array[i] % 2 === 0){
            return(array[i])
        }
    }
    return(null)
}

// *2. Ordem decrescente*
// Crie uma função que receba um array.
// Retorne true se os números estiverem em ordem decrescente.
// Caso contrário, false.
function ordDec(array){
    for (let i = 0;i < array.length;i++){
        if (array[i] < array[i + 1]){
            return(false)
        }
    }
    return(true)
}

// *3. Soma ignorando zeros*
// Crie uma função que receba um array de números.
// Some todos os valores ignorando os zeros.
// Retorne a soma.
function somIgZer(array){
    let soma = 0
    array.forEach(element => {
        if (element !== 0){
            soma += element
        }
    });
    return(soma)
}

// *4. Contagem de maiores que a média*
// Crie uma função que receba um array.
// Calcule a média dos números e retorne
// quantos números são maiores que essa média.
function contMaiMed(array){
    let somaMed = 0
    let totalMai = 0
    array.forEach(element => {
        somaMed += element
    });
    for (let i = 0; i < array.length;i++){
        if (array[i] > somaMed / array.length){
            totalMai++
        }
    }
    return(totalMai)   
}

// *5. Diferença entre vizinhos*
// Crie uma função que receba um array.
// Retorne quantas vezes a diferença entre
// dois vizinhos é maior que 10.
function difViz(array){
    let quant = 0
    for (let i = 0; i < array.length -1;i++){
        let diff = array[i] - array[i + 1]
        if (diff > 10 || diff < -10){
            quant++
        }
    }
    return(quant)
}

// *6. Encontrar último índice*
// Crie uma função que receba um array e um número.
// Retorne o índice da última vez que esse número aparece.
// Se não existir, retorne -1.
function ultIn(array, a){
    for (let i = array.length - 1;i > 0;i--){
        if (array[i] === a){
            return(i)
        }
    }
    return(-1)
}

// *7. Novo array sem múltiplos de 3*
// Crie uma função que receba um array.
// Retorne um novo array removendo todos os múltiplos de 3.
function arrNoTr(array){
    let novoArr = []
    array.forEach(element => {
        if (element % 3 !== 0){
            novoArr.push(element)
        }
    });
    return(novoArr)
}

// *8. Desafio final 🧠*
// Crie uma função que receba um array de números.
// Retorne um objeto contendo:
// - o maior número
// - o menor número
// - a quantidade de números negativos
// - a soma apenas dos números positivos
// (sem usar Math.max ou Math.min)
function desFin(array){
    let maior = array[0]
    let menor = array[0]
    let neg = 0
    let soma = 0
    for (let i = 0; i < array.length;i++){
        if (array[i] < 0){
            neg++
        }else{
            soma += array[i]
        }
        if (array[i] > maior){
            maior = array[i]
        }
        if(array[i] < menor){
            menor = array[i]
        }
    }
    return{
    Maior: maior,
    Menor: menor,
    Negativos: neg,
    PositivosSoma: soma
    }
}
