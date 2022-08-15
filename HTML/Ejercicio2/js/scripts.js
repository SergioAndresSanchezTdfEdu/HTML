let botonesOcultarMostrar = document.querySelectorAll(".btnOcultarMostrar");

for (let i = 0; i < botonesOcultarMostrar.length; i++){
    botonesOcultarMostrar[i].addEventListener("click",ocultarMostrar)
}

function ocultarMostrar() {
    document.getElementById("div").classList.toggle("ocultar");
}