// Agrego los eventos para cada Botón, esperando que le hagan Click para ejecutar la función
// correspondiente.
document.getElementById('agregar').addEventListener("click", agregarItemMonto);
document.getElementById('calcular').addEventListener("click", calcularMontoTotal);

// Función llmada por el Botón Agregar
function agregarItemMonto () {
    // Tomo los valores del Formulario
    let itemInput = document.getElementById("item").value;
    let montoInput = document.getElementById("monto").value;

    // Agrego los valores a la tabla en una fila
    document.getElementById("body").innerHTML += `
    <tr>
        <td class="col-sm-8">${itemInput}</td>
        <td class="col-sm-4">${montoInput}</td>
    </tr>`;
}

// Función llamada por el Botón Calcular
function calcularMontoTotal() {
    let total = 0;
    // Tomo todos los TD + TD que tengo para armar el arreglo y poder sumar los Montos
    let arregloMontos = document.querySelectorAll("td + td");
    console.log(arregloMontos);

    // Sumo los montos en cada celda
    [].forEach.call(arregloMontos, (celda) => {
        if (parseFloat(celda.firstChild.data)) {
            total += parseFloat(celda.firstChild.data);
        }
    });

    // Modifico el Monto TOTAL de la tabla.
    document.getElementById("total").innerHTML = `
    <td class="col-sm-4" id="total">$ ${total}</td>
    `;
}