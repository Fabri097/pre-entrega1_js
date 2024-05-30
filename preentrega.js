let producto = "mayonesa";
let cantidad = 0;
let articulo = 0;
let precio = 8;
let descuento = 0;

console.log("Este producto es:", producto);

cantidad = prompt("Ingrese cuantos productos quieres:");

function calcularPrecioFinal( precio , descuento){
    return precio - (precio * descuento /100);
}

if (cantidad == 0) {
  console.log("agregue un producto 😟");
  precio = precio * cantidad;
} 
else if (cantidad >= 1 && cantidad <= 4) {
  console.log("Se agrego al carrito 🛒");
  articulo = articulo + parseInt(cantidad);
  precio = precio * cantidad;
} 
else if(cantidad == 5){
  console.log("adquirio un cupon de 25% descuento en esta compra 🎉")
  articulo = articulo + parseInt(cantidad);
  descuento = 25;
  precio = calcularPrecioFinal(precio * cantidad, descuento)
}
else { 
  console.log(" No puede llevar esta cantidad 🥹");
  precio = precio * 0
}


console.log("producto:",producto);
console.log("cant:",articulo);
console.log("precio: $",precio);