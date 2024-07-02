//Objetos
const producto = {
    nombreProducto : "Monitor de 20 Pulgadas",
    precio : 300,
    disponible : true
}

//Forma anterior

//const precioProducto =producto.precio;
//const nombreProducto =producto.nombreProducto;

//console.log(precioProducto);
//console.log(nombreProducto);

//Destructuring (extrae el valor y crea la variable todo en un solo paso)
const{precio, nombreProducto}=producto;

console.log(precio);
console.log(nombreProducto);