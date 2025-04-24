// Invitados
let invitados = ["Roberto", "Laura", "Carlos", "Julia"];
let copiaInvitados = [];

function actualizarLista() {
  document.getElementById("listaInvitados").innerText = invitados.join(", ");
}

function añadirJuaniAlex() {
  invitados.push("Juani", "Alex");
  actualizarLista();
}

function colarMarta() {
  invitados.splice(2, 0, "Marta");
  actualizarLista();
}

function eliminarRoberto() {
  invitados = invitados.filter(nombre => nombre !== "Roberto");
  actualizarLista();
}

function fiestaVecinos() {
  let vecinos = ["María", "Pepe", "Luna", "Óscar"];
  invitados = invitados.concat(vecinos);
  actualizarLista();
}

function ordenarLista() {
  copiaInvitados = [...invitados].map(i => i.toUpperCase()).sort();
  document.getElementById("listaInvitados").innerText += `\n\nLista definitiva:\n${copiaInvitados.join(", ")}`;
}

// Objeto ordenador
const ordenador1 = {
  marca: "HP",
  procesador: "i7",
  ram: "16Gb",
  hd: "1Tb",
  precio: 1500,
  extras: ["cámara HD", "micrófono estéreo", "disco rápido"],
  maletin: true
};

function mostrarFrase() {
  document.getElementById("infoOrdenador").innerText =
    `Mi ordenador es un ${ordenador1.marca}, con procesador ${ordenador1.procesador} y ${ordenador1.ram} de RAM.`;
}

function mostrarForIn() {
  let resultado = "";
  for (let clave in ordenador1) {
    resultado += `${clave}: ${ordenador1[clave]}\n`;
  }
  document.getElementById("infoOrdenador").innerText = resultado;
}

function mostrarExtra() {
  document.getElementById("infoOrdenador").innerText = `Tercer extra: ${ordenador1.extras[2]}`;
}

