//POO
//This hace referencia a los valores del objeto
/**Object Literal */
//Funciones especificas para un tipo de Objeto

const producto = {
    nombre: 'Tablet',
    precio: 500
} 
//Object Constructor
function Cliente(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
}
Cliente.prototype.formatearCliente = function(){
    return`El Cliente ${this.nombre} ${this.apellido}`;
}
function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
}
//Crear funciones que solo se utilizan en un objeto en especifico

Producto.prototype.formatearProducto = function(){
    return `El producto ${this.nombre} tiene un precio de: ${this.precio}`;
}

const producto2 = new Producto('Monitor de 49"',800);
const producto3 = new Producto('Tablet',100);
const cliente = new Cliente('Juan','Velasco');

console.log(producto2);
console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());
console.log(cliente.formatearCliente());
