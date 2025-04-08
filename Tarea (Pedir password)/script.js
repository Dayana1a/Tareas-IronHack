// 1 - SUMA DE NÚMEROS
function sumaIterativa() {
    let continuar = "S";
  
    while (continuar.toUpperCase() === "S") {
      let num1 = parseFloat(prompt("Ingresa el primer número:"));
      let num2 = parseFloat(prompt("Ingresa el segundo número:"));
  
      let suma = num1 + num2;
      alert("La suma es: " + suma);
  
      continuar = prompt("¿Quieres continuar? (S/N)");
    }
  
    alert("¡Gracias! Hasta la próxima.");
  }
  



  // 2 - ADIVINAR COLOR O SALIR
  function adivinarColor() {
    let colores = ["azul", "rojo", "verde", "amarillo", "morado"];
    let colorCorrecto = "verde";
    let intentos = 0;
    let adivinado = false;
  
    while (!adivinado) {
      let respuesta = prompt("Adivina el color (elige entre: azul, rojo, verde, amarillo, morado) o escribe 'salir':");
      intentos++;
  
      if (respuesta.toLowerCase() === colorCorrecto) {
        alert("¡Correcto! Adivinaste el color en " + intentos + " intento(s).");
        adivinado = true;
      } else if (respuesta.toLowerCase() === "salir") {
        alert("Intentaste " + intentos + " vez/veces y decidiste salir.");
        break;
      } else {
        alert("No es ese color. Intenta otra vez.");
      }
    }
  }
  



  // 3 - PEDIR PASSWORD
  function pedirPassword() {
    const usuarioGuardado = "admin";
    const passwordGuardado = "1234";
    let intentos = 0;
    let accesoConcedido = false;
  
    while (!accesoConcedido && intentos < 3) {
      let user = prompt("Usuario:");
      let pass = prompt("Contraseña:");
  
      if (user === usuarioGuardado && pass === passwordGuardado) {
        alert("¡Bienvenido, acceso concedido!");
        window.open("pagina2.html");
        accesoConcedido = true;
      } else {
        alert("Usuario o contraseña incorrectos.");
        intentos++;
      }
    }
  
    if (!accesoConcedido) {
      alert("Demasiados intentos. Acceso denegado.");
    }
  }
  