const carrito =[
    {nombre: 'Monitor de 20 Pulgadas', precio: 500 },
    {nombre: 'Televisión 50 Pulgadas',precio: 700 },
    {nombre: 'Tablet',precio: 500 },
    {nombre: 'Audifonos',precio: 200 },
    {nombre: 'Teclado',precio: 50 },
    {nombre: 'Celular',precio: 500 },
    {nombre: 'Bocinas',precio: 300 },
    {nombre: 'Laptop',precio: 800 },
];

//Foreach
carrito.forEach(producto => console.log(producto.nombre)); //Solo para enviar elementos a la consola
//map
const arreglo2 = carrito.map(producto => `${producto.nombre} - ${producto.precio}`);     //Sirve para crear un nuevo arreglo y asignarlo a una nueva variable
console.log(arreglo2);