const finin = document.querySelector('#finin')
const grossin = document.querySelector('#grossin')
const feinho = document.querySelector('#feinho')



document.querySelector('#beckUm').addEventListener('click', primeiroBeck)
document.querySelector('#beckDois').addEventListener('click', segundoBeck)
document.querySelector('#beckTres').addEventListener('click', terceiroBeck)


function primeiroBeck() {
    finin.classList.toggle('hidden')
}

function segundoBeck() {
    grossin.classList.toggle('hidden')
}

function terceiroBeck() {
    feinho.classList.toggle('hidden')
}