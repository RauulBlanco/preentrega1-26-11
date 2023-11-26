// Es una funcion pára calcular el descuento de una compra segun el monto//


function calcularDescuento() {
    var totalGastos = 0;

    while (true) {
        var montoProducto = prompt("Ingrese el monto del producto (o ingrese 'fin' para finalizar):");

        if (montoProducto.toLowerCase() === "fin") {
            break;
        }

        montoProducto = parseFloat(montoProducto);

        if (isNaN(montoProducto)) {
            alert("Valor inválido. Intente nuevamente.");
        continue;
        }

        totalGastos += montoProducto;
    }

    var descuento = 0;

    if (totalGastos > 15000) {
        if (totalGastos > 25000) {
        descuento = 0.2; // 20% de descuento
        } else if (totalGastos > 20000) {
        descuento = 0.15; // 15% de descuento
        } else {
        descuento = 0.1; // 10% de descuento
        }
    }

    var porcentajeDescuento = descuento * 100;
    var montoAPagar = totalGastos - (totalGastos * descuento);

    alert("Monto a pagar después del descuento: $" + montoAPagar.toFixed(2) + "\nPorcentaje de descuento: " + porcentajeDescuento + "%");
    }

  // Llamar a la función para calcular el descuento
    calcularDescuento();
