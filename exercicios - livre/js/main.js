// ==============================
// *NOVA SESSÃO DE DESAFIOS v2*
// ==============================
// *Variables*
// Declare uma variável com um número. Crie outra variável que seja o dobro dela e mostre com alert
let varUm = (a)
let varDois = (varUm * 2)
alert(varDois)

// Declare uma string. Mostre no console a quantidade de caracteres dessa string
let varStr = ("str")
console.log(varStr.length)

// *Functions*
// Crie uma função que receba 3 números. Some apenas o primeiro e o terceiro e mostre o resultado com alert. Chame a função.
function numUm (a,b,c){
    alert(a + c)
}
numUm (3,5,7)

// Crie uma função que receba 1 número. Mostre no console se ele é positivo, negativo ou zero. Chame a função.
function questDois (a){
    if (a < 0){
        console.log("negativo")
    }else if(a === 0){
        console.log("zero")
    }else {
        console.log("positivo")
    }
}

// *Conditionals*
// Crie uma função que receba uma senha (string). Se a senha for "1234", alert "Acesso permitido". Caso contrário, alert "Acesso negado".
function password (pass) {
    if (pass === "1234"){
        alert("Acesso Permitido")
    }else {
        alert("acesso negado")
    }
}

// Crie uma função que receba um número. Se for maior que 10, alert "Maior que 10". Se for menor que 10, alert "Menor que 10". Se for igual, alert "Igual a 10".
function questON (a) {
    if (a > 10){
        alert("maior que 10")
    }else {
        alert("menor que 10")
    }
}

// *Loops*
// Crie uma função que receba um número. Mostre no console a contagem regressiva desse número até 0.
function lupe (a){
    for (let i = a; i >= 0;i--){
        console.log(i)
    }
}

// Crie uma função que receba um array. Mostre no console apenas os elementos que estão nas posições pares (índices pares).
function arrEi(arrei){
    let arrAy = []
    arrei.forEach((element, index) => {
        if (index % 2 ===0){
            console.log(element)
        }
    });
}

// *Arrays & Lógica*
// Crie uma função que receba um array de números. Some todos os valores e mostre o resultado com alert.
function numArr(array){
    let result = 0
    array.forEach((element, index) => {
        result += element
    });
    alert(result)
}

// Crie uma função que receba um array de números. Retorne o maior número dentro do array (não usar Math.max)
function arrayNum(array){
    let maior = array[0]
    for (let i = 1 ; i < array.length; i++){
        if (array[i] > maior){
        maior = array[i]
        }
    }
    return(maior)
}

// ==============================
// *NOVA SESSÃO DE DESAFIOS v3*
// Um pouco mais difícil
// ==============================
// *Variables*
// Declare uma variável com um número. Crie outra variável que seja o quadrado desse número e mostre no console.
// Depois, crie uma terceira variável que seja o dobro do resultado anterior e mostre também.
let variavel = 15
let variaDois = variavel ** 2
console.log(variaDois)
let variaTres = variaDois * 2
console.log(variaTres)


// *Functions*
// Crie uma função que receba 2 números. Retorne o maior entre eles.
function test (a,b){
    if (a > b){
        return(a)
    }else if (b > a) {
        return(b)
    }else {
        return("iguais")
    }
}

// Crie uma função que receba um número. Retorne true se ele for múltiplo de 3, senão retorne false.
function numErro (a){
    if (a % 3 === 0){
        return(true)
    }else {
        return(false)
    }
}

// *Conditionals*
// Crie uma função que receba uma nota (0 a 10):
// - Se for maior ou igual a 7 → "Aprovado"
// - Se for entre 5 e 6 → "Recuperação"
// - Se for menor que 5 → "Reprovado"
function nota(a){
    if (a >= 7){
        alert("aprovado")
    }else if(a < 5){
        alert("reprovado")
    }else {
        alert("recuperação")
    }
}

// *Loops*
// Crie uma função que receba um número. Mostre no console a soma de todos os números de 1 até ele.
function lupe(a){
    let result = 0
    for (let i = 1;i <= a;i++){
        result += i
    }
    console.log(result)
}

// Crie uma função que receba um número. Mostre no console apenas os números pares de 0 até ele.
function pule(a){
    for (let i = 0;i < a;i++){
        if (i % 2 === 0){
            console.log(i)
        }
    }
}

// *Arrays & Lógica*
// Crie uma função que receba um array de números.
// Retorne a soma apenas dos números maiores que 10.
function arr(array){
    let result = 0
    array.forEach((element,index) => {
        if (element > 10){
            result += element
        }        
    });
    return(result)
}

// Crie uma função que receba um array de números.
// Retorne quantos números são positivos (maiores que 0).
function arrayNum(array){
    let elementUm = 0
    array.forEach(element => {
        if (element > 0){
            elementUm++
        }
    });
    return(elementUm)
}

// Crie uma função que receba um array de números.
// Retorne um novo array contendo apenas os números que são maiores que o primeiro elemento do array.
    function maisUm(array) {
        let arrei = []
        let prev = array[0]
        array.forEach(element => {
            if (element > prev)
                arrei.push(element)
        });
        return(arrei)   
    }