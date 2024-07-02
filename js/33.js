async function obtenerEmpleados(){

    const archivo ='empleados.json';

    //fetch(archivo)
    //.then(resultado => resultado.json())
    //.then(datos=>{
    //console.log(datos.empleados);
        
    //const {empleados}=datos;
        
    //console.log(empleados);
    //console.log(empleados);

    //document.querySelector('.contenido').textContent +=empleado.nombre; Si quieres que el contenido aparezca en el documento HTMl en el bloque contenido
            
    //});
const resultado = await fetch(archivo);       //Código con Async Away para utilizar Json
const datos = await resultado.json();
console.log(datos);
}
obtenerEmpleados();