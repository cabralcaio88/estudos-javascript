const concorrentes = document.querySelectorAll('.concorrente')

Array.from(concorrentes).forEach(element => element.addEventListener('click', beckCerto))

function beckCerto(click) {
    if(click.target.classList.contains('correto')){
        document.querySelector('#finin').classList.toggle('hidden')
    }else{
        alert("PESSIMO");
    }

}