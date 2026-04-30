//string e anuncia os 3 últimos caracteres
let texto = "javaScript"
return texto.slice(-3)

// subtraindo de 100 e mostrando absoluto
function subTrac(a,b,c,d,e){
    let fromHund = 100 - (a+b+c+d+e)
    if (fromHund < 0){
        fromHund = fromHund * - 1
    }
    console.log(fromHund)
}

// crie uma função com 3 números e alert o mais alto valor e o mais baixo valor
function numAlert(a,b,c){
    let nuMs = [a,b,c]
    let alto = a
    let baixo = a
    nuMs.forEach(element => {
        if(element > alto){
            alto = element
        }
        if (element < baixo){
            baixo = element
        }
    });
    alert ("Maior" + alto + " // Menor: " + baixo)
}

//v2
function mmaiorMenor(a,b,c) {
    console.log (`O maior número é ${Math.max(a,b,c)} e o menor número é ${Math.min(a,b,c)}`)
}

// aleatório cara ou coroa
    function caraOuCoroa(){
        let random = Math.random()
        if (random < .5){
            return ("cara")
        }else {
            return ("coroa")
        }
    }
    Math.random() < .5 ? 'cara' : 'coroa'

//chamando anterior em loop
    function chamadaCaraOuCoroa (b){
        for (let i = 0 ; i < b;i++){
            console.log(caraOuCoroa())
        }
    }

    // Exercício 3
// Crie um array dizendo se cada número é "par" ou "ímpar"
let arrayNum = [1, 2, 3, 4, 5, 6]
let final = arrayNum.map(valor => {
    if (valor % 2 ===0){
        return "par"
    }else {
        return "impar"
    }
})

// Exercício 2
// Crie um novo array com mensagens personalizadas
    // retorne uma string no formato:
    // "Olá, NOME!"
    let arrayNov = ["maria", "joão", "andré", "maricota"]
    let personaMens = arrayNov.map(a => `Olá ${a}!`) 

// *Arrays*
// Crie um array de séries de TV.
// Percorra o array e mostre cada série no console.
let seriesTv = ["Cangaço Novo", "Guerreiros do sol", "Chicos Butico's"]
seriesTv.forEach(element => console.log(element))

// Crie um array de números.
// Retorne um novo array que contenha todos os números pares do array anterior.
let arrayNum = [1,5,4,2,55,2,32,1]
let pares = []
arrayNum.forEach(element => {
    if (element % 2 === 0){
        pares.push(element)
    }  
});
//V2 Mas o de cima e o proximo são melhores - usar o ternário (abaixo) para retornar valor e if pra executar ações
arrayNum.forEach(element => element % 2 ===0 ? pares.push(element) : null)
// V3
function novArray(arrayNum){
    return arrayNum.filter(value => value % 2 === 0)
}

let pares = arrayNum.filter(value => value & 2 === 0)

// Crie uma função que receba um array de números.
// Mostre (alert) a soma do segundo menor e do segundo maior número.
function numA(array){
    let ordenado = array.sort((a,b) => a - b)
    return (ordenado [1] + ordenado[ordenado.length - 2])
}

