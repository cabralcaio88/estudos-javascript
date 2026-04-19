document.querySelector('#botao').addEventListener('click', qualDia)

function qualDia() {
    const diaSemana = document.querySelector('#dia').value.toLowerCase().normalize()

    if (diaSemana === "segunda" || diaSemana === "terça" || diaSemana === "quarta" || diaSemana=== "quinta"){
        document.querySelector('#aviso').innerText = "hoje tem trampo brother"
    }else if (diaSemana ==="sexta" || diaSemana ==="sabado" || diaSemana === "domingo") {
        document.querySelector('#aviso').innerText = "já da pra tomar uma"
    }else {
        document.querySelector('#aviso').innerText = "nem sei que dia é hoje irmão"
    }
}