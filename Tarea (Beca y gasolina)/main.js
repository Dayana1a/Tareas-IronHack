
function becaEstudiante() {
    let edad = parseInt(prompt("¿Cuántos años tienes?"));
    let residencia = prompt("¿En qué ciudad vives?").toLowerCase();
    let familiaNumerosa = prompt("¿Tienes familia numerosa? (sí/no)").toLowerCase();
    let genio = prompt("¿Eres un genio de la programación? (sí/no)").toLowerCase();

    if ((edad >= 18 && residencia === "barcelona") ||
        (edad > 30 && familiaNumerosa === "sí") ||
        (edad >= 12 && edad <= 18 && genio === "sí")) {
        alert("¡Felicidades! Cumples con los requisitos para la beca.");
    } else {
        alert("Lo sentimos, no cumples con los requisitos para la beca.");
    }
}

function cocheNoArranca() {
    let cerca = prompt("¿Vives cerca? (sí/no)").toLowerCase();
    let caminar = prompt("¿Tienes ganas de caminar? (sí/no)").toLowerCase();

    if (cerca === "sí" && caminar === "sí") {
        alert("Te vas andando y lo arreglas mañana.");
    } else {
        let gasolina = prompt("¿El coche tiene gasolina? (sí/no)").toLowerCase();

        if (gasolina === "no") {
            let dinero = prompt("¿Tienes dinero para gasolina? (sí/no)").toLowerCase();

            if (dinero === "sí") {
                alert("Pon gasolina.");
            } else {
                alert("Ve en metro.");
            }
        } else {
            let bateria = prompt("¿El coche tiene batería? (sí/no)").toLowerCase();

            if (bateria === "no") {
                alert("Recarga la batería.");
            } else {
                alert("Pásate por el mecánico.");
            }
        }
    }
}
