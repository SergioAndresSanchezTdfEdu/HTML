// alert("Aca 1");
// let itemInput = document.getElementById("item");
// console.log(itemInput);
// let montoInput = document.getElementById("monto");
// console.log(montoInput);
// const nuevoDiv = document.getElementById('nuevo');
// console.log(nuevoDiv);
// const newDiv = document.createElement('div');
// console.log(newDiv);
// newDiv.textContent = "Hola!" + itemInput.value;
// newDiv.className = "item col-sm-8";
// console.log(newDiv);
// nuevoDiv.appendChild(newDiv);
// console.log(nuevoDiv);   
// const newDiv2 = document.createElement('div');
// console.log(newDiv2);
// newDiv2.textContent = "$ 1,00" + montoInput.value;
// newDiv2.className = "monto col-sm-4";
// console.log(newDiv2);
// nuevoDiv.appendChild(newDiv2);
// console.log(nuevoDiv); 

 document.getElementById('agregar').addEventListener("click", agregarItemMonto);
 document.getElementById('calcular').addEventListener("click", calcularMontoTotal);
//  document.getElementById("agregar").addEventListener("click", () => {
//     let itemInput = document.getElementById("item");
// console.log(itemInput);
// let montoInput = document.getElementById("monto");
// console.log(montoInput);
// const nuevoDiv = document.getElementById('nuevo');
// console.log(nuevoDiv);
// const newDiv = document.createElement('div');
// console.log(newDiv);
// newDiv.textContent = "Hola!" + itemInput.value;
// newDiv.className = "item col-sm-8";
// console.log(newDiv);
// nuevoDiv.appendChild(newDiv);
// console.log(nuevoDiv);   
// const newDiv2 = document.createElement('div');
// console.log(newDiv2);
// newDiv2.textContent = "$ 1,00" + montoInput.value;
// newDiv2.className = "monto col-sm-4";
// console.log(newDiv2);
// nuevoDiv.appendChild(newDiv2);
// console.log(nuevoDiv);
//     let nuevoDiv = document.getElementById('nuevo');
//     // console.log(nuevoDiv);
//     let newDivItem = document.createElement('div');
//     // console.log(newDiv);
//     newDivItem.textContent = document.getElementById('item').value;
//     newDivItem.className = "item col-sm-8";
//     // console.log(newDiv);
//     nuevoDiv.appendChild(newDivItem);
//     // console.log(nuevoDiv);
//     let newDivMonto = document.createElement('div');
//     // console.log(newDiv);
//     newDivMonto.textContent = document.getElementById('monto').value;
//     newDivMonto.className = "monto col-sm-4";
//     // console.log(newDiv);
//     nuevoDiv.appendChild(newDivMonto);
// });

function agregarItemMonto () {
    let itemInput = document.getElementById("item").value;
    console.log(itemInput);
    let montoInput = document.getElementById("monto").value;
    console.log(montoInput);
    const nuevoTR = document.getElementById("body");
    console.log(nuevoTR);
    nuevoTR.innerHTML += `
    <tr>
        <td class="col-sm-8">${itemInput}</td>
        <td class="col-sm-4">${montoInput}</td>
    </tr>`;
}

// function agregarItemMonto () {
//     let itemInput = document.getElementById("item");
//     console.log(itemInput);
//     let montoInput = document.getElementById("monto");
//     console.log(montoInput);
//     const nuevoDiv = document.getElementById('nuevo');
//     console.log(nuevoDiv);
//     const newDiv = document.createElement('div');
//     console.log(newDiv);
//     newDiv.textContent = itemInput.value;
//     newDiv.className = "item col-sm-8";
//     console.log(newDiv);
//     nuevoDiv.appendChild(newDiv);
//     console.log(nuevoDiv);   
//     const newDivMonto = document.createElement('div');
//     console.log(newDivMonto);
//     newDivMonto.textContent = "$ " + montoInput.value;
//     newDivMonto.className = "monto col-sm-4";
//     console.log(newDivMonto);
//     nuevoDiv.appendChild(newDivMonto);
//     console.log(nuevoDiv);
// }

// function agregarItemMonto () {
//     let itemInput = document.getElementById("item").value;
//     console.log(itemInput);
//     let montoInput = document.getElementById("monto").value;
//     console.log(montoInput);
//     const nuevoDiv = document.getElementById('nuevo');
//     console.log(nuevoDiv);
//     nuevoDiv.innerHTML = `<div class="item col-sm-8">${itemInput}</div>
//     <div class="monto col-sm-4">${montoInput}</div>`;
// }

function calcularMontoTotal() {

}
//function agregarItemMonto () {
//    alert("Aca 1");
//    let itemInput = document.getElementById("item");
//    alert("itemInput: "+itemInput);
//    let itemClass = document.getElementsByClassName("item");
//    alert("item: "+itemClass[0].value);
//    document.getElementsByClassName("item").innerHTML = itemInput;
// }
//<div class="row renglon">
//    <div class="item col-sm-8">Item</div>
//    <div class="monto col-sm-4">Monto</div>
//</div>