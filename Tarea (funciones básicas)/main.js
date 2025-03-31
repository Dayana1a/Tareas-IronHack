
function sumar(a, b) {
    alert("Resultado: " + (a + b));
}

function restar(a, b) {
    alert("Resultado: " + (a - b));
}

function calcularOperacion() {
    let num1 = parseFloat(prompt("Introduce el primer número:"));
    let num2 = parseFloat(prompt("Introduce el segundo número:"));
    let operacion = prompt("¿Quieres sumar o restar? (+/-)");

    if (operacion === "+") {
        sumar(num1, num2);
    } else if (operacion === "-") {
        restar(num1, num2);
    } else {
        alert("Operación no válida");
    }
}

// EXTRA: Con return
function sumarConReturn(a, b) {
    return a + b;
}

function restarConReturn(a, b) {
    return a - b;
}

function calcularConReturn() {
    let num1 = parseFloat(prompt("Introduce el primer número:"));
    let num2 = parseFloat(prompt("Introduce el segundo número:"));
    let operacion = prompt("¿Quieres sumar o restar? (+/-)");

    let resultado;
    if (operacion === "+") {
        resultado = sumarConReturn(num1, num2);
    } else if (operacion === "-") {
        resultado = restarConReturn(num1, num2);
    } else {
        alert("Operación no válida");
        return;
    }
    alert("Resultado: " + resultado);
}



function comprobarNumero(secreto, intento) {
    if (intento > secreto) {
        alert("El número es demasiado grande.");
    } else if (intento < secreto) {
        alert("El número es demasiado pequeño.");
    } else {
        alert("¡Felicidades! Has acertado.");
    }
}

function jugarAdivinaNumero() {
    let numeroSecreto = Math.floor(Math.random() * 100) + 1; // Número aleatorio entre 1 y 100
    let intentos = 3;

    for (let i = 0; i < intentos; i++) {
        let intentoUsuario = parseInt(prompt("Adivina el número (1-100):"));
        comprobarNumero(numeroSecreto, intentoUsuario);

        if (intentoUsuario === numeroSecreto) {
            break; // Termina el juego si acierta
        }
    }

    alert("El número secreto era: " + numeroSecreto);
}



function saludoIterativo() {
    let cantidad = parseInt(prompt("¿Cuántos saludos quieres dar?"));
    let mensajes = [];

    for (let i = 0; i < cantidad; i++) {
        let saludo = prompt("Introduce un saludo (ejemplo: Hola, Adiós):");
        let nombre = prompt("Introduce un nombre:");
        mensajes.push(`${saludo} ${nombre}`);
    }

    alert(mensajes.join("\n"));
}
