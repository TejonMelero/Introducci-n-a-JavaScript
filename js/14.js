//Arreglos o Arrays

const numeros = [10,20,30,40,50];//Corchetes en JS es un arreglo

//console.table(numeros);//Muestra los números en una tabla




//Acceder a los valores de un arreglo
//console.log(numeros[4]);
//console.log(numeros[2]);
//console.log(numeros[40]);

//Conocer la extensión de un arreglo

//console.log(meses.length);//Cuantos elementos hay en el arreglo meses

//numeros.push(60);            //Agrega al final del arreglo
//numeros.unshift(-10,-20,-30);//Agrega al inicio del arreglo
console.table(numeros);
const meses = ['Enero','Febrero,','Marzo','Abril','Mayo'];

meses.pop();  //elimina el último elemento
meses.shift(); //Elimina el primer elemento

meses.splice(2,1);
console.table(meses);

//Rest Operator o Spread Operator

const nuevoArreglo=['Junio',...meses];
console.log(nuevoArreglo);