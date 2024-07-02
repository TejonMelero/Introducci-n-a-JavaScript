//For Loop
//    for(let i = 0; i <= 10; i++){  //Código para imprimir números menores o igual a 10 (Autoincrementador = i valor del índice)
 //   console.log(i);
//    }

//    for(let i = 1; i <= 100; i++){            //Código para imprimir números pares menor a 100 
//    if (i % 2 === 0){  
//    console.log(`El número ${i} es Par`);
//    }else{
//    console.log(`El número ${i} es Impar`);
//    }
//    }

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

for (let i = 0; i < carrito.length; i++){
    console.log(carrito[i]);
}

//While Loop (La condición se cumpla para que se pueda ejecutar)

//let i = 1;                               //indice
//while(i < carrito.length) {              //Condición
//      console.log(carrito[i].nombre)
//    i++;                                 //Incremento
//}


//Do while Loop (se ejecuta al menos una vez aunque la condición no se cumpla)

let i = 100;
do{
    console.log(i);
    i++;
}while (i <10);