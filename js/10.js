//Objetos

const nombreProducto = "Monitor de 20 Pulgadas";
const precio= 300;
const disponible = true;

//Misma función pero diferente forma de código

const producto = {
    nombreProducto : "Monitor de 20 Pulgadas",
    precio : 300,
    disponible : true
}

//Mostrar información de los productos
console.log(producto);

//console.log(producto.precio);      
//console.log(producto.nombreProducto);
//console.log(producto.disponible);

//Código para mostrar la información de distinta manera
//console.log(producto["precio"]);

//Agregar nuevas propiedades
producto.imagen = 'imagen.jpg';
//Eliminar propiedades
delete producto.disponible;
console.log(producto);