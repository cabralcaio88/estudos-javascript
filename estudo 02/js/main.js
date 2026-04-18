document.querySelector('#botao').addEventListener('click', check)

function check (){
    const resposta = document.querySelector('#dia').value.toLowerCase()

    if (resposta === "segunda" || resposta === "terça"){
        document.querySelector('#localVer').innerText = "Trabalhar hoje meu chapinha"
    }else if (resposta === "sexta" || resposta ==="Sexta"){
        document.querySelector('#localVer').innerText = "Já da pra tomar uma"
    }else {
        document.querySelector('#localVer').innerText = "sei nem que dia é hoje brow"
    }
    
    
}


// GRITADOR DE NOMES

document.querySelector('#botaoNome').addEventListener('click', gritarNomes)

function gritarNomes (){
const nomeUm = document.querySelector('#primeiroNome').value
const nomeDois = document.querySelector('#segundoNome').value
const nomeTres = document.querySelector('#terceiroNome').value

    document.querySelector('#grito').innerText = `${nomeUm} ${nomeDois} ${nomeTres}`
}