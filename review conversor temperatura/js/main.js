document.querySelector('#botao').addEventListener('click', converter)


function converter () {

    const valor = document.querySelector('#grau').value
    const resultado = valor * 9/5 + 32
    document.querySelector('#temp').innerText = resultado
}