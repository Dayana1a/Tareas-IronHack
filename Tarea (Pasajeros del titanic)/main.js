// Ejercicio 1: Inventario del Zoo
function inventarioZoo() {
    let zoo = ["Tigre", "Elefante", "Cebra", "Jirafa", "Mono"];
    let resultado = "";

    // Imprimir array inicial
    resultado += "Inventario inicial: " + zoo.join(", ") + "<br>";

    // Añadir dos animales
    zoo.push("León", "Panda");
    resultado += "Después de añadir dos animales: " + zoo.join(", ") + "<br>";

    // Cambiar el tercero
    zoo[2] = "Cocodrilo";
    resultado += "Después de cambiar el tercero: " + zoo.join(", ") + "<br>";

    // Quitar el último
    zoo.pop();
    resultado += "Después de quitar el último: " + zoo.join(", ") + "<br>";

    // Total de animales
    resultado += "Total de animales: " + zoo.length + "<br>";

    // Recorrer el array con un bucle FOR
    resultado += "Recorrido del inventario: ";
    for (let i = 0; i < zoo.length; i++) {
        resultado += zoo[i] + (i < zoo.length - 1 ? ", " : "");
    }

    // Pantalla
    document.getElementById("zoo-inventario").innerHTML = resultado;
}

// Ejercicio 2: Listado del Zoo a la Inversa
function zooInverso() {
    let zoo = ["Tigre", "Elefante", "Cocodrilo", "Jirafa", "Mono", "León"];
    let resultado = "Listado del zoo a la inversa: ";

    // Array en sentido inverso
    for (let i = zoo.length - 1; i >= 0; i--) {
        resultado += zoo[i] + (i > 0 ? ", " : "");
    }

    // Pantalla
    document.getElementById("zoo-inverso").innerHTML = resultado;
}

// Ejercicio 3: Lista de Pasajeros Titanic
function listaTitanic() {
    let pasajeros = ["John", "Alice", "Robert", "Sophie", "Michael", "Emma", "Chris", "Olivia", "Jack", "Sarah", "Daniel", "Chloe"];
    let resultado = "Lista inicial: " + pasajeros.join(", ") + "<br>";

    // Los dos últimos se dan de baja
    pasajeros.pop();
    pasajeros.pop();
    resultado += "Después de bajas: " + pasajeros.join(", ") + "<br>";

    // Añadir dos nuevos pasajeros
    pasajeros.push("Liam", "Emily");
    resultado += "Después de añadir nuevos pasajeros: " + pasajeros.join(", ") + "<br>";

    // Sustituir al segundo pasajero
    pasajeros[1] = "Lucas";
    resultado += "Después de sustituir al segundo pasajero: " + pasajeros.join(", ") + "<br>";

    // Lista final
    resultado += "Lista definitiva: " + pasajeros.join(", ") + "<br>";
    resultado += "Buena suerte a todos los pasajeros... 🙏";

    // Pantalla
    document.getElementById("titanic-lista").innerHTML = resultado;
}

// Ejercicio 4: Aleatorio sobre Array
function jugar() {
    let opciones = ["¡Premio! Ganaste un chocolate.", "Castigo: Debes hacer 10 sentadillas.", "¡Premio! Ganaste una entrada al cine.", "Castigo: Debes cantar en público.", "¡Premio! Ganaste un abrazo.", "Castigo: Sin redes sociales por 1 día."];
    let indiceAleatorio = Math.floor(Math.random() * opciones.length);

    // Resultado
    document.getElementById("resultado-juego").innerText = opciones[indiceAleatorio];
}
