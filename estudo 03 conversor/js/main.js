document.querySelector("#botao").addEventListener('click', conversor)

function conversor() {
    const valor = document.querySelector('#grau').value

    const resultado = valor * 9/5 + 32

    document.querySelector('#result').innerText = resultado

}