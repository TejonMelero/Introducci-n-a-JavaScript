const tweet='Monitor de 20 Pulgadas Full HD'; //String o cadena de texto//
const producto2='Monitor HD'; //String o cadena de texto//
const email='correo@correo';

console.log(tweet.length);//length sirve para saber cuantos caracteres se están escribiendo
console.log(producto2);

console.log(tweet.indexOf('Pulgadas'));//indexOf para mirar en qué posición se encuentra la palabra que se está seleccionando en una cadena de texto
console.log(producto2.indexOf('Mouse'));//Si una palabra no está, el resultado es negativo
console.log(email.indexOf('@'));//Si una palabra no está, el resultado es negativo

console.log(tweet.includes('Pulgadas'));//Includes (retorna true o false si lo encuentra o no lo encuentra)
console.log(producto2.includes('Mouse'));//False porque no hay el caracter que se esta solicitando

