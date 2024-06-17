
let total = 0;
let descuentoAplicado = false;
const tasaDeDescuento = 0.2; 
const productos = [
  { nombre: 'Cafe', precio: 12 },
  { nombre: 'Leche', precio: 5 },
  { nombre: 'Arroz', precio: 4 },
  { nombre: 'Azucar', precio: 4 },
  { nombre: 'Atun', precio: 6 }
];

let recuentoDeProducto = 0;

for (let i = 0; i < productos.length; i++) {
  let cantidad = prompt(`¿Cuántas unidades de ${productos[i].nombre} deseas? (Precio por unidad es ${productos[i].precio})`);
  
  if(cantidad !== null && cantidad !== '' && !isNaN(cantidad)) {
    cantidad = Number(cantidad);
    if (cantidad > 0) {
      recuentoDeProducto++;
    }
    total += cantidad * productos[i].precio;
  } else {
    alert('Entrada no válida, se asumirá como 0.');
  }
}

if (recuentoDeProducto >= 3 && !descuentoAplicado) {
  total -= total * tasaDeDescuento;
  descuentoAplicado = true;

}

alert(`El precio final es: $${total}`);

