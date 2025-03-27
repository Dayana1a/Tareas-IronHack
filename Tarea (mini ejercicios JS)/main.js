
function ejercicio1() {
    let num1 = parseFloat(prompt("Introduce el primer número:"));
    let num2 = parseFloat(prompt("Introduce el segundo número:"));
    let resta = num1 - num2;
    alert("El resultado de la resta es: " + resta);
    console.log("El resultado de la resta es:", resta);
}

function ejercicio2() {
    let nombre = prompt("Introduce tu nombre:");
    let localidad = prompt("¿En qué localidad vives?");
    let hobby = prompt("¿Cuál es tu hobby?");
    let mensaje = `Te llamas ${nombre}, vives en ${localidad}, y te gusta ${hobby}.`;
    alert(mensaje);
    console.log(mensaje);
}

function ejercicio3() {
    let radio = parseFloat(prompt("Introduce el radio del círculo:"));
    let pi = 3.1416; // Valor de PI con 4 decimales
    let area = pi * (radio ** 2);
    alert(`El área de un círculo con radio ${radio} es: ${area}`);
    console.log(`El área de un círculo con radio ${radio} es: ${area}`);
}
