//Estructuras de contról o código condicional

const puntaje = 1000;
if (puntaje === 1000){
    console.log("El puntaje es igual a 1000");
} else{
    console.log('El puntaje no se cumple');
}

const efectivo = 10.000;
const carrito = 9.000;
if (efectivo > carrito){
    console.log('Transación Existosa');
}else{
    console.log('Fondos insuficientes');
}

const rol = 'Administrador del sistema';

if (rol==='Administrador del sistema'){
console.log('Acceso concedido');
}else if (rol ==='editor'){
    console.log('Acceso concedido con algunas restricciones')
}else {
    console.log('Acceso restringido')
}