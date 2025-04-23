// Ejercicio 1
function stockPapaNoel() {
    let stock = parseInt(prompt("¿Cuántos regalos hay disponibles? (más de 100)"));
    while (stock > 0) {
      let repartido = parseInt(prompt("¿Cuántos regalos repartiste hoy?"));
      if (repartido > stock) {
        alert("¡No puedes repartir más de los que quedan!");
      } else {
        stock -= repartido;
        alert("Quedan " + stock + " regalos.");
        if (stock < 100 && stock > 0) {
          alert("Ojo, quedan menos de 100 regalos.");
        }
      }
    }
    alert("¡Misión cumplida. Hasta el año que viene!");
  }


  
  // Ejercicio 2
  function tiendaMuebles() {
    let esSilla = prompt("¿Es una silla? (s/n)").toLowerCase();
    if (esSilla === "s") {
      let esMackintosh = prompt("¿Es Mackintosh? (s/n)").toLowerCase();
      if (esMackintosh === "s") {
        alert("Elegiste: Silla Mackintosh");
      } else {
        alert("Elegiste: Silla IKEA");
      }
    } else {
      let esRoble = prompt("¿Es de roble? (s/n)").toLowerCase();
      if (esRoble === "s") {
        alert("Elegiste: Mesa Roble");
      } else {
        alert("Elegiste: Mesa IKEA");
      }
    }
  }

  
  // Ejercicio 3
  function tablasMultiplicar() {
    let resultado = "";
    for (let i = 1; i <= 10; i++) {
      for (let j = 1; j <= 10; j++) {
        resultado += `${i} x ${j} = ${i * j}<br>`;
      }
      resultado += "<br>";
    }
    document.getElementById("resultado").innerHTML = resultado;
  }
  
  
  // Ejercicio 4
  function domLoco() {
    let personaje = prompt("Elige un personaje: Quijote / Batman / Elsa").toLowerCase();
    let lugar = prompt("Elige un lugar: playa / montaña / ciudad").toLowerCase();
    let estado = prompt("¿Cómo está? (feliz / estresado / cansado)").toLowerCase();
  
    let frase = `¡Estaba ${personaje} en la ${lugar} muy ${estado}!`;
    document.getElementById("resultado").innerHTML = frase;
  }
  