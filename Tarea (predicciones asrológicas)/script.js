// Ejercicio 1
function predecir() {
    const signo = document.getElementById("signo").value.toLowerCase();
    let mensaje = "";
  
    switch(signo) {
      case "aries":
        mensaje = "Semana intensa, pero lograrás tus objetivos.";
        break;
      case "tauro":
        mensaje = "Momento de ahorrar y reflexionar.";
        break;
      case "geminis":
        mensaje = "Una sorpresa agradable llegará pronto.";
        break;
      case "cancer":
        mensaje = "Escucha a tu corazón, pero piensa con la cabeza.";
        break;
      case "leo":
        mensaje = "Brillarás en todo lo que hagas.";
        break;
      case "virgo":
        mensaje = "Organiza tus ideas, y todo saldrá bien.";
        break;
      case "libra":
        mensaje = "El equilibrio será tu mejor aliado.";
        break;
      case "escorpio":
        mensaje = "Pasión y energía desbordante esta semana.";
        break;
      case "sagitario":
        mensaje = "Viajes y aventuras te esperan.";
        break;
      case "capricornio":
        mensaje = "Trabajo duro, pero muchas recompensas.";
        break;
      case "acuario":
        mensaje = "Tu creatividad está en su punto más alto.";
        break;
      case "piscis":
        mensaje = "Confía en tus intuiciones, no fallarán.";
        break;
      default:
        mensaje = "Eso no es un signo del zodiaco válido.";
    }
  
    document.getElementById("resultadoSigno").textContent = mensaje;
  }
  
  // Ejercicio 2
  function jugarAdivina() {
    let numeroSecreto = Math.floor(Math.random() * 10) + 1;
    let intentos = 0;
    let adivinado = false;
  
    do {
      let intento = parseInt(prompt("¿Qué número es (entre 1 y 10)?"));
      intentos++;
  
      if (intento === numeroSecreto) {
        adivinado = true;
        alert(`¡Felicidades, has acertado! Lo lograste en ${intentos} intentos.`);
      } else {
        alert("No es correcto, sigue intentando...");
      }
  
    } while (!adivinado);
  }
  

  