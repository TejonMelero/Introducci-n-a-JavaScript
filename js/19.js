//function sumar (n1 , n2){
//return n1 + n2;
//}

//const resultado = sumar(2 , 5);
//console.log(resultado);



let total = 0;

function agregarCarrito(precio) {
    return total += precio;
}
function calcularEnvio(total){
    return 1.09 * total;
}
total = agregarCarrito(200);
total = agregarCarrito(500);
total = agregarCarrito(100);

console.log(total);

const totalApagar = calcularEnvio(total);

console.log(`El total a pagar con envío es de: $${totalApagar}`); //Mensaje para que aparezca con texto



