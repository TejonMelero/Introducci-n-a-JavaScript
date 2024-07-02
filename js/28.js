//Clases (las clases siempre van con mayúsculas en cualquier lenguaje de programación)
class Producto {
    constructor (nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
//Primera Clase
    formatearProducto(){
        return `El producto ${this.nombre} tiene un precio de: ${this.precio}`;
    }
}

const producto2 = new Producto('Monitor de 49"',800);
const producto3 = new Producto('Tablet',100);

//Herencia

class Bicicleta extends Producto {             //Toma los valores de la primera clase(producto)para no repetir
    constructor(nombre, precio, rin, color){
        super (nombre, precio);                //Se coloca los valores de arriba
        this.rin=rin;
        this.color=color;
    }
}
const bicicleta = new Bicicleta('Venzo', '$2.000', 29, 'Rojo');
console.log(bicicleta)

console.log(producto2);
console.log(producto3);