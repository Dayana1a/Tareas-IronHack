document.addEventListener("DOMContentLoaded", function () {
    console.log("Documento cargado, asignando eventos...");

    // Asigna eventos a los botones correctamente
    document.querySelector("button[onclick='mostrarDescendentes()']").addEventListener("click", mostrarDescendentes);
    document.querySelector("button[onclick='mostrarPares()']").addEventListener("click", mostrarPares);
    
    // Asegurar que solo se asigna un evento al botón del carrito
    document.getElementById("carrito-btn").addEventListener("click", calcularCarrito);
});

// 1 Mostrar números descendentes de 50 a 20
function mostrarDescendentes() {
    console.log("Función mostrarDescendentes ejecutada");
    let resultado = "";
    for (let i = 50; i >= 20; i--) {
        resultado += i + " ";
    }
    document.getElementById("descendentes").textContent = resultado;
}

// 2️ Mostrar números pares entre dos valores ingresados
function mostrarPares() {
    console.log("Función mostrarPares ejecutada");
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, ingrese ambos números.");
        return;
    }

    if (num1 > num2) {
        [num1, num2] = [num2, num1]; // Intercambiar si están en orden inverso
    }

    let resultado = "";
    for (let i = num1; i <= num2; i++) {
        if (i % 2 === 0) {
            resultado += i + " ";
        }
    }

    document.getElementById("pares").textContent = resultado || "No hay números pares en este rango.";
}

// 3️ Carrito de compra con descuento
function calcularCarrito() {
    console.log("Función calcularCarrito ejecutada");
    let total = 0;

    for (let i = 1; i <= 5; i++) {
        let precio = parseFloat(prompt(`Ingrese el precio del producto ${i}:`));
        if (isNaN(precio) || precio < 0) {
            alert("Ingrese un precio válido.");
            return;
        }
        total += precio;
    }

    let mensaje = `Total a pagar: ${total.toFixed(2)}€`;

    if (total >= 100) {
        let descuento = total * 0.15;
        let precioFinal = total - descuento;
        mensaje = `Precio original: ${total.toFixed(2)}€\nDescuento aplicado: ${descuento.toFixed(2)}€\nPrecio final con descuento: ${precioFinal.toFixed(2)}€`;
    }

    document.getElementById("carrito").textContent = mensaje;
}
