document.getElementById("formulario").addEventListener("submit", function(event) {
  event.preventDefault();

  let cliente = document.getElementById("cliente").value.trim();
  let producto = document.getElementById("producto").value;
  let cantidad = Number(document.getElementById("cantidad").value);
  let precio = Number(document.getElementById("precio").value);

  if (cliente === "" || producto === "" || cantidad === 0 || precio === 0) {
    alert("Por favor, complete todos los campos.");
    return;
  }

  if (cantidad <= 0 || precio <= 0) {
    alert("La cantidad y el precio deben ser mayores que cero.");
    return;
  }

  let total = cantidad * precio;

  let tabla = document.getElementById("tablaDatos");
  let fila = tabla.insertRow();

  fila.insertCell(0).textContent = cliente;
  fila.insertCell(1).textContent = producto;
  fila.insertCell(2).textContent = cantidad;
  fila.insertCell(3).textContent = "S/ " + precio.toFixed(2);
  fila.insertCell(4).textContent = "S/ " + total.toFixed(2);

  document.getElementById("formulario").reset();
});
