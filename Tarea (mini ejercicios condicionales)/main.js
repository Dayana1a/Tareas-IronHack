
function entradaDiscoteca() {
    let edad = parseInt(prompt("¿Cuántos años tienes?"));

    if (edad > 18) {
        alert("Puedes entrar. ¡Bienvenido a la discoteca!");
    } else if (edad === 18) {
        alert("Puedes entrar, pero es tu primera vez. ¡Diviértete!");
    } else {
        alert("Lo siento, eres menor de edad y no puedes entrar.");
    }
}

function cincoColores() {
    let color = prompt("Elige un color: azul, verde, rojo, amarillo o violeta").toLowerCase();

    switch (color) {
        case "azul":
            alert("El azul es como el mar, siempre que el cielo sea azul (y sea de día).");
            break;
        case "verde":
            alert("El verde es el color de la naturaleza y la esperanza.");
            break;
        case "rojo":
            alert("El rojo es pasión y fuego.");
            break;
        case "amarillo":
            alert("El amarillo representa la felicidad y la energía.");
            break;
        case "violeta":
            alert("El violeta es el color de la creatividad y la imaginación.");
            break;
        default:
            alert("Ese color no está en la lista, pero seguro que es bonito.");
    }
}

function lamparaNoEnciende() {
    let enchufada = prompt("¿La lámpara está enchufada? (sí/no)").toLowerCase();

    if (enchufada === "no") {
        alert("Solución: Enchúfala.");
    } else if (enchufada === "sí") {
        let focoQuemado = prompt("¿El foco está quemado? (sí/no)").toLowerCase();
        if (focoQuemado === "sí") {
            alert("Solución: Reemplaza el foco.");
        } else {
            alert("Solución: Compra una nueva lámpara.");
        }
    } else {
        alert("Por favor, responde con 'sí' o 'no'.");
    }
}
