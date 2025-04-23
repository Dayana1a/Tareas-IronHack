function calcularIMC() {
    let altura = parseFloat(document.getElementById("altura").value);
    let peso = parseFloat(document.getElementById("peso").value);
  
    if (!altura || !peso) {
      document.getElementById("resultado").innerText = "Por favor, introduce tu altura y tu peso.";
      return;
    }
  
    let imc = peso / (altura * altura);
    imc = imc.toFixed(2);
  
    let mensaje = `Para la altura ${altura}m y el peso ${peso}kg, tu IMC es: ${imc}.`;
  
    if (imc < 18.5) {
      mensaje += " Estás por debajo del peso recomendado.";
    }
  
    document.getElementById("resultado").innerText = mensaje;
  }



  
  
  function rellenarTicket() {
    let nombre = document.getElementById("nombre").value;
    let fecha = document.getElementById("fecha").value;
    let fila = document.getElementById("fila").value;
    let asiento = document.getElementById("asiento").value;
  
    document.getElementById("mostrarNombre").innerText = "Nombre: " + nombre;
    document.getElementById("mostrarFecha").innerText = "Fecha: " + fecha;
    document.getElementById("mostrarButaca").innerText = "Butaca: Fila " + fila + ", Asiento " + asiento;
  }
  