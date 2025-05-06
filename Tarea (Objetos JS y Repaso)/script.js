// 1. OBJETOS
const perrera = [
    { nombre: "Max", raza: "Labrador", edad: 4, ubicacion: "Madrid", dueño: "Lucía" },
    { nombre: "Bella", raza: "Caniche", edad: 2, ubicacion: "Sevilla", dueño: "Carlos" },
    { nombre: "Thor", raza: "Pastor Alemán", edad: 5, ubicacion: "Valencia", dueño: "Ana" }
  ];
  
  function mostrarPropiedad() {
    const propiedad = prompt("¿Qué propiedad quieres mostrar? (nombre, raza, edad, ubicación, dueño)").toLowerCase();
    if (propiedad in perrera[0]) {
      perrera.forEach(perro => {
        alert(`${propiedad}: ${perro[propiedad]}`);
      });
    } else {
      alert("Propiedad no válida");
    }
  }
  
  // 2. FUNCIONES
  function buscarPalabra() {
    const texto = prompt("Escribe un texto:");
    const palabra = prompt("¿Qué palabra quieres buscar?");
    if (texto.includes(palabra)) {
      alert(`La palabra "${palabra}" está presente en el texto`);
    } else {
      alert(`La palabra "${palabra}" NO está presente en el texto`);
    }
  }
  
  // 3. ARRAYS
  function generarTabla() {
    const numero = parseInt(prompt("Introduce un número:"));
    const tabla = [];
    for (let i = 1; i <= 10; i++) {
      tabla.push(`${numero} x ${i} = ${numero * i}`);
    }
    alert(tabla.join("\n"));
  }
  
  // 4. DOM y colores
  const coloresTexto = ["red", "blue", "green", "purple", "orange"];
  const coloresFondo = ["lightblue", "lightgreen", "pink", "yellow", "beige"];
  const coloresDiv = ["black", "white", "cyan", "magenta", "lime"];
  
  function cambiarColores() {
    const colorTexto = coloresTexto[Math.floor(Math.random() * coloresTexto.length)];
    const colorFondo = coloresFondo[Math.floor(Math.random() * coloresFondo.length)];
    const colorDiv = coloresDiv[Math.floor(Math.random() * coloresDiv.length)];
  
    document.body.style.color = colorTexto;
    document.body.style.backgroundColor = colorFondo;
    document.getElementById("colorDiv").style.backgroundColor = colorDiv;
  }
  