// =================== SELECCIÓN DE ELEMENTOS DEL DOM ===================
// Estos son todos los elementos que necesitamos de nuestra página web
// Elemento para seleccionar la ciudad de destino
var ciudadSelect = document.getElementById("ciudad");
// Elemento para ingresar el número de personas
var personasInput = document.getElementById("personas");
// Elementos para mostrar los valores individuales por persona
var valorTiqueteInput = document.getElementById("valorTiquete");
var valorComidasInput = document.getElementById("valorComidas");
var valorAlojamientoInput = document.getElementById("valorAlojamiento");
// Elementos para mostrar los totales multiplicados por el número de personas
var totalTiqueteInput = document.getElementById("totalTiquete");
var totalComidasInput = document.getElementById("totalComidas");
var totalAlojamientoInput = document.getElementById("totalAlojamiento");
// Elementos para mostrar los cálculos finales
var descuentoInput = document.getElementById("descuento");
var subtotalInput = document.getElementById("subtotal");
var totalPagoInput = document.getElementById("totalPago");
// Elementos para los controles de la interfaz
var calcularBtn = document.getElementById("calcular");
var efectivoRadio = document.getElementById("efectivo");
var creditoRadio = document.getElementById("credito");
// =================== DATOS DE PRECIOS POR CIUDAD ===================
// Objeto que contiene los precios base para cada ciudad
var valoresPorCiudad = {
    Armenia: {
        tiquete: 100000, // Valor del tiquete por persona
        comidas: 9000, // Valor de comidas diarias por persona
        alojamiento: 15000 // Valor de alojamiento diario por persona
    },
    Bucaramanga: {
        tiquete: 120000,
        comidas: 11000,
        alojamiento: 12000
    },
    Cali: {
        tiquete: 110000,
        comidas: 12000,
        alojamiento: 14000
    },
    Duitama: {
        tiquete: 115000,
        comidas: 10000,
        alojamiento: 17000
    }
};
// =================== FUNCIÓN PRINCIPAL DE CÁLCULO ===================
function calcularValores() {
    // Paso 1: Obtener los datos básicos ingresados por el usuario
    var ciudad = ciudadSelect.value;
    var numPersonas = parseInt(personasInput.value);
    // Validación de datos de entrada
    if (!ciudad || isNaN(numPersonas) || numPersonas <= 0) {
        alert("Por favor, seleccione una ciudad y asegúrese de ingresar un número válido de personas.");
        return;
    }
    // Paso 2: Obtener los valores base de la ciudad seleccionada
    var valores = valoresPorCiudad[ciudad];
    if (!valores)
        return; // Si no hay valores para la ciudad, terminamos
    // Paso 3: Mostrar los valores base por persona
    valorTiqueteInput.value = valores.tiquete.toString();
    valorComidasInput.value = valores.comidas.toString();
    valorAlojamientoInput.value = valores.alojamiento.toString();
    // Paso 4: Calcular los totales multiplicando por el número de personas
    var totalTiquete = valores.tiquete * numPersonas;
    var totalComidas = valores.comidas * numPersonas;
    var totalAlojamiento = valores.alojamiento * numPersonas;
    // Paso 5: Mostrar los totales calculados
    totalTiqueteInput.value = totalTiquete.toString();
    totalComidasInput.value = totalComidas.toString();
    totalAlojamientoInput.value = totalAlojamiento.toString();
    // Paso 6: Calcular el subtotal (suma de todos los totales)
    var subtotal = totalTiquete + totalComidas + totalAlojamiento;
    subtotalInput.value = subtotal.toString();
    // Paso 7: Calcular descuentos según la forma de pago
    var descuento = 0;
    // Descuento por número de personas
    if (numPersonas > 10) {
        descuento = subtotal * 0.15; // 15% para grupos mayores de 10
    }
    else if (numPersonas > 5) {
        descuento = subtotal * 0.10; // 10% para grupos mayores de 5
    }
    // Descuento adicional por ciudad
    if (ciudad === "Armenia" || ciudad === "Bucaramanga") {
        descuento += valores.tiquete * numPersonas * 0.02; // 2% adicional en tiquetes
    }
    else if (ciudad === "Cali" || ciudad === "Duitama") {
        descuento += valores.tiquete * numPersonas * 0.05; // 5% adicional en tiquetes
    }
    // Descuento por forma de pago
    if (efectivoRadio.checked) {
        descuento += subtotal * 0.04; // 4% adicional por pago en efectivo
    }
    // Mostrar el descuento total
    descuentoInput.value = descuento.toString();
    // Paso 8: Calcular el total final
    var totalPago = subtotal - descuento;
    // Si es pago con crédito, agregar 1.5% al total
    if (creditoRadio.checked) {
        totalPago += totalPago * 0.015;
    }
    // Paso 9: Mostrar el total a pagar
    totalPagoInput.value = totalPago.toString();
}
// =================== EVENTOS ===================
// Cuando se hace clic en el botón calcular, ejecutar la función de cálculo
calcularBtn.addEventListener("click", calcularValores);
