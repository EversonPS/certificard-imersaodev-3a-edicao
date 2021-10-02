var botaoAlteraTema = document.getElementById("altera-tema")
botaoAlteraTema.addEventListener("click", alteraTema)

function alteraTema(){
    document.body.classList.toggle("escuro")
}

