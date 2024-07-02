//Async  /await

function descargarNuevosclientes(){
    return new Promise (resolve => {
        console.log('Descargando clientes.........espere......');

        setTimeout( ()=>{
            resolve('Los datos de los clientes se descargaron');
        }, 5000 ); //5 Segundos
    });
}
function descargarPedidos(){
    return new Promise (resolve => {
        console.log('Descargando pedidos.........espere......');

        setTimeout( ()=>{
            resolve('Los pedidos se descargaron');
        }, 3000 ); //3 Segundos
    });
}
 async function app(){
    try {
    //    const resultado = await descargarNuevosclientes();
    //    const pedidos = await descargarPedidos();
    //    console.log(resultado);
    //    console.log(pedidos);

    const resultado = await Promise.all([descargarNuevosclientes(),descargarPedidos()]);
    console.log(resultado[0]);
    console.log(resultado[1]);
    } catch (error){
        console,log(error);
    }
 }
 app();
