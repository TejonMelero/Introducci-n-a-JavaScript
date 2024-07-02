//"use strict";//Correr JS en modo estricto 

//Objetos

const producto = {
    nombreProducto : "Monitor de 20 Pulgadas",
    precio : 300,
    disponible : true
}
Object.seal(producto);//no permite agregar ni eliminar pero si modificar

//Object.freeze(producto); //no se puede modificar el objeto ni agregar propiedades

producto.imagen = 'imagen.jpg';

console.log(Object.isSealed(producto));

console.log(producto);