document.querySelector('#botao').addEventListener('click', gritar)

function gritar() {
    const primeiroNome = document.querySelector('#nomeUm').value
    const segundoNome = document.querySelector('#nomeDois').value
    const terceiroNome = document.querySelector('#nomeTres').value

    document.querySelector('#nomeCompleto').innerText = `${primeiroNome} ${segundoNome} ${terceiroNome}`


}