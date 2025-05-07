// Ejercicio 1: Predicciones Zodiacales
function mostrarPrediccion() {
    let signo = document.getElementById("signo").value.toLowerCase();
    let mensaje;

    switch (signo) {
        case "capricornio":
            mensaje = "Capricornio: Tendrás éxito en tus proyectos esta semana.";
            break;
        case "leo":
            mensaje = "Leo: Prepárate para un giro positivo e inesperado.";
            break;
        case "geminis":
            mensaje = "Géminis: Enfócate en tus relaciones y cosecharás armonía.";
            break;
        case "acuario":
            mensaje = "Acuario: La creatividad será tu mejor aliada para resolver esos desafíos que se avecinan.";
            break;
        case "piscis":
            mensaje = "Piscis: Prepárate para recibir noticias inesperadas que alegrarán tu día.";
            break;
        case "aries":
            mensaje = "Aries: Tu energía y entusiasmo te abrirán nuevas puertas esta semana.";
            break;
        case "tauro":
            mensaje = "Tauro: Con paciencia y persistencia, lograrás superar cualquier obstáculo que encuentres.";
            break;
        case "cancer":
            mensaje = "Cáncer: Conecta con tus emociones y encontrarás fuerza en tu intuición.";
            break;
        case "virgo":
            mensaje = "Virgo: Tu atención al detalle será clave para resolver problemas pendientes.";
            break;
        case "libra":
            mensaje = "Libra: El equilibrio que buscas llegará si te permites confiar en los demás.";
            break;
        case "escorpio":
            mensaje = "Escorpio: Una pasión olvidada se reactivará y te llenará de inspiración.";
            break;
        case "sagitario":
            mensaje = "Sagitario: La aventura llama, ¡lánzate con confianza y descubre algo nuevo!";
            break;
        default:
            mensaje = "Lo siento, no reconozco ese signo. Inténtalo nuevamente.";
    }

    document.getElementById("resultadoSwitch").innerText = mensaje;
}

// Ejercicio 2: Adivina el Número
function adivinaNumero() {
    let numeroSecreto = Math.floor(Math.random() * 10) + 1;
    let intentos = 0;
    let numeroUsuario;

    do {
        numeroUsuario = parseInt(prompt("Adivina el número (entre 1 y 10):"));
        intentos++;

        if (numeroUsuario === numeroSecreto) {
            alert(`¡Felicidades, has acertado! Lo hiciste en ${intentos} intento(s).`);
        } else if (numeroUsuario > numeroSecreto) {
            alert("Muy alto, intenta de nuevo.");
        } else {
            alert("Muy bajo, intenta de nuevo.");
        }
    } while (numeroUsuario !== numeroSecreto);
}

// Ejercicio 3: Lanzar los Dados
let resultados = {};

function lanzarDado(jugador) {
    let dado = Math.floor(Math.random() * 6) + 1;
    resultados[jugador] = dado;

    document.getElementById(`resultado${jugador === 'player1' ? 1 : 2}`).innerText =
        `${jugador.toUpperCase()} sacó un ${dado}`;

    if (resultados.player1 && resultados.player2) {
        determinarGanador();
    }
}

function determinarGanador() {
    let mensaje;
    if (resultados.player1 > resultados.player2) {
        mensaje = "PLAYER 1 gana!";
    } else if (resultados.player1 < resultados.player2) {
        mensaje = "PLAYER 2 gana!";
    } else {
        mensaje = "¡Es un empate!";
    }
    document.getElementById("ganador").innerText = mensaje;
}
