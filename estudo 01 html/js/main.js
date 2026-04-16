// TESTE 01 BASICO DO BASICO
document.getElementById('blue').onclick = botAzul
document.getElementById('red').onclick = botVerm
document.getElementById('green').onclick = botVerd


function botAzul() {
    document.body.style.backgroundColor = 'blue'
    document.body.style.color = 'white'
}

function botVerm() {
    document.body.style.backgroundColor = 'red'
    document.body.style.color = 'white'
}

function botVerd() {
    document.body.style.backgroundColor = 'green'
    document.body.style.color = 'white'
}



// CALCULACU ESTUDO DE VARIÁVEIS
let total = 0

document.querySelector('#caju').addEventListener('click', retornaZero)
document.querySelector('#banana').addEventListener('click', maisTres)
document.querySelector('#manga').addEventListener('click', maisNove)
document.querySelector('#pedra').addEventListener('click', menosDois)

function retornaZero() {
    total = 0
    document.querySelector('#localResult').innerText = total
}

function maisTres() {
    total = total + 3
    document.querySelector('#localResult').innerText = total
}

function maisNove() {
    total = total + 9
    document.querySelector('#localResult').innerText = total
}

function menosDois() {
    total = total - 2
    document.querySelector('#localResult').innerText = total
}
