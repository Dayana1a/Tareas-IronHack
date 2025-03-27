document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("iniciar").addEventListener("click", iniciarViaje);
});

function iniciarViaje() {
    let distancia = 100;
    let intervalo = setInterval(() => {
        if (distancia === 100) {
            document.getElementById("mensaje").innerText = "Arrancamos!";
        } else if (distancia === 50) {
            document.getElementById("mensaje").innerText = "Ya vamos por la mitad!";
        } else if (distancia === 15) {
            document.getElementById("mensaje").innerText = "Ya casi estamos!";
        } else if (distancia === 0) {
            document.getElementById("mensaje").innerText = "Llegamos! Vivan las vacaciones!";
            clearInterval(intervalo);
        }
        console.log(`Quedan ${distancia} km`);
        distancia -= 5;
    }, 1000);
}
