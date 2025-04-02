
function cambiarColor(selector, color) {
    let elemento = document.querySelector(selector);
    if (elemento.tagName === 'H3') {
        elemento.style.color = color;
    } else {
        elemento.style.backgroundColor = color;
    }
}




function descubrirMensaje() {
    let mensaje = document.getElementById("secreto");
    mensaje.classList.add("mostrar");
    mensaje.classList.remove("fondo");
}
