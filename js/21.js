//Arrow Functions
const sumar2 = (n1, n2) => console.log (n1 + n2);

sumar2(5 , 15);

const aprendiendo = tecnologia => console.log(`Aprendiendo:${tecnologia}`)

aprendiendo('JavaScript')



//Array Methods

const meses = ['Enero','Febrero,','Marzo','Abril','Mayo'];

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

//forEach
meses.forEach (mes=> {
    if (mes == 'Marzo'){
        console.log('Marzo si existe');
    }
});



//Código anterior
resultado = carrito.some(function(producto){
    return producto.nombre == 'Celular PRO'
})
//Codigo con Arrow Functions
resultado = carrito.some(producto=> producto.nombre == 'Celular PRO')

console.log(resultado);


//Código anterior
resultado = carrito.reduce (function(total,producto){
    return total + producto.precio
}, 0);
//Codigo con Arrow Functions
resultado = carrito.reduce ((total,producto) => total + producto.precio, 0);

console.log(resultado);


//Código Anterior
resultado = carrito.filter(function(producto){
    return producto.precio > 400
});
//Código con Arrow functions
resultado = carrito.filter((producto)=> producto.precio > 400);//Artículos que valen mas de 400

console.log(resultado);


//Código Anterior
resultado = carrito.filter(function(producto){
    return producto.nombre !=='Celular'
});
//Código con Arrow functions
resultado = carrito.filter((producto)=> producto.nombre !=='Celular');//Articulos diferentes al 'Celular'

console.log(resultado);

