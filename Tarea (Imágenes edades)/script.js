function evaluarEdad() {
    let edad = document.getElementById("edad").value;
    let mensaje = document.getElementById("mensaje");
    let imagen = document.getElementById("imagen");

    if (edad >= 0 && edad <= 20) {
        document.body.style.background = "#a8e6cf";
        mensaje.textContent = "¡Eres un bebé!";
        imagen.src = "https://cdn-icons-png.flaticon.com/128/7890/7890168.png";
    } else if (edad >= 21 && edad <= 35) {
        document.body.style.background = "#ffeb94";
        mensaje.textContent = "¡Pero si estás en la crema de la vida!";
        imagen.src = "https://cdn-icons-png.flaticon.com/128/4660/4660772.png";
    } else if (edad >= 36 && edad <= 65) {
        document.body.style.background = "#ffc07f";
        mensaje.textContent = "¡Pero si estás en la crema de la vida!";
        imagen.src = "https://cdn-icons-png.flaticon.com/128/4440/4440953.png";
    } else if (edad > 65) {
        document.body.style.background = "#ffaaa5";
        mensaje.textContent = "¡Felicidades, la sabiduría viene con el tiempo!";
        imagen.src = "https://cdn-icons-png.flaticon.com/128/7703/7703936.png";
    } else {
        mensaje.textContent = "Ingresa una edad válida.";
        return;
    }

    imagen.style.display = "block";
    document.getElementById("edad").style.display = "none";
    document.querySelector("button").style.display = "none";
}


