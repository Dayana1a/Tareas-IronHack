// Declaración inicial del catálogo
let bandas = ["Queen", "AC/DC", "The Beatles", "Metallica", "Radiohead"];

// Menú CRUD
function menuCRUD() {
    let opcion = prompt(
        `Menú CRUD: 
        1. Borrar el primero
        2. Añadir al principio
        3. Borrar el último
        4. Añadir al final
        5. Borrar o cambiar un índice
        6. Buscar un grupo por nombre
        7. Mostrar si existe un grupo según índice
        Elige una opción (1-7):`
    );

    let resultado = "";

    switch (opcion) {
        case "1":
            bandas.shift();
            resultado = `Después de borrar el primero: ${bandas.join(", ")}`;
            break;
        case "2":
            let bandaInicio = prompt("Introduce la banda para añadir al principio:");
            bandas.unshift(bandaInicio);
            resultado = `Después de añadir al principio: ${bandas.join(", ")}`;
            break;
        case "3":
            bandas.pop();
            resultado = `Después de borrar el último: ${bandas.join(", ")}`;
            break;
        case "4":
            let bandaFinal = prompt("Introduce la banda para añadir al final:");
            bandas.push(bandaFinal);
            resultado = `Después de añadir al final: ${bandas.join(", ")}`;
            break;
        case "5":
            let indice = parseInt(prompt("Introduce el índice para borrar o cambiar:"));
            let accion = prompt("¿Quieres borrar o cambiar? (Escribe 'borrar' o 'cambiar'):");
            if (accion === "borrar") {
                bandas.splice(indice, 1);
                resultado = `Después de borrar índice ${indice}: ${bandas.join(", ")}`;
            } else if (accion === "cambiar") {
                let nuevaBanda = prompt("Introduce el nombre de la nueva banda:");
                bandas.splice(indice, 1, nuevaBanda);
                resultado = `Después de cambiar índice ${indice}: ${bandas.join(", ")}`;
            } else {
                resultado = "Acción inválida.";
            }
            break;
        case "6":
            let grupo = prompt("Introduce el nombre del grupo para buscar su índice:");
            let indiceGrupo = bandas.indexOf(grupo);
            resultado = indiceGrupo >= 0
                ? `El índice de "${grupo}" es: ${indiceGrupo}`
                : `"${grupo}" no está en el catálogo.`;
            break;
        case "7":
            let indiceMostrar = parseInt(prompt("Introduce el índice para verificar si existe:"));
            resultado = bandas[indiceMostrar] !== undefined
                ? `El grupo en el índice ${indiceMostrar} es: ${bandas[indiceMostrar]}`
                : `No existe un grupo en el índice ${indiceMostrar}`;
            break;
        default:
            resultado = "Opción inválida.";
    }

    document.getElementById("resultado").innerText = resultado;
}

// Extra: Añadir Países con forEach()
function extraForEach() {
    let bandasConPais = [];
    bandas.forEach((banda) => {
        let pais = prompt(`¿De qué país es "${banda}"?`);
        bandasConPais.push(`${banda} (${pais})`);
    });

    document.getElementById("resultado").innerText = `Bandas con país: ${bandasConPais.join(", ")}`;
}

// Extra: Añadir bandas hasta detener
function bucleAñadir() {
    let continuar = true;
    while (continuar) {
        let nuevaBanda = prompt("Introduce el nombre de una banda (o escribe 'salir' para detener):");
        if (nuevaBanda.toLowerCase() === "salir") {
            continuar = false;
        } else {
            bandas.push(nuevaBanda);
        }
    }

    document.getElementById("resultado").innerText = `Catálogo actualizado: ${bandas.join(", ")}`;
}
