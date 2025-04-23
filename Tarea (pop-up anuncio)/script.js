// 1. Ventana Emergente
const emergente = document.getElementById("emergente");
document.getElementById("btnMostrar").addEventListener("click", () => {
  emergente.style.display = "block";
});
setTimeout(() => {
  emergente.style.display = "block";
}, 5000);
emergente.addEventListener("click", () => {
  emergente.style.display = "none";
});





// 2. Mover Cajas
const cajas = [
  document.getElementById("caja1"),
  document.getElementById("caja2"),
  document.getElementById("caja3"),
];
let enMovimiento = false;
let timerCajas;

function moverCajas() {
  if (!enMovimiento) {
    cajas.forEach((caja, i) => {
      caja.style.transform = `translateX(${100 + i * 30}px)`;
    });
    enMovimiento = true;
    timerCajas = setTimeout(() => {
      pararCajas();
    }, 4000);
  } else {
    pararCajas();
  }
}

function pararCajas() {
  cajas.forEach(caja => {
    caja.style.transform = "translateX(0)";
  });
  enMovimiento = false;
  clearTimeout(timerCajas);
}

document.getElementById("palanca").addEventListener("click", moverCajas);
cajas.forEach(caja => caja.addEventListener("click", pararCajas));





// 3. Semáforo
const luces = [
    { id: "rojo", color: "red" },
    { id: "amarillo", color: "yellow" },
    { id: "verde", color: "green" },
  ];
  
  let indice = 0;
  let semaforoInterval;
  
  document.getElementById("startSemaforo").addEventListener("click", () => {
    clearInterval(semaforoInterval);
    semaforoInterval = setInterval(() => {
      // Apagar todos
      luces.forEach(luz => {
        document.getElementById(luz.id).style.backgroundColor = "grey";
      });
  
      // Encender el actual
      let actual = luces[indice];
      document.getElementById(actual.id).style.backgroundColor = actual.color;
  
      // Avanzar al siguiente
      indice = (indice + 1) % luces.length;
    }, 1000);
  });