//Promises en JS
const usuarioAutenticado =new Promise( (resolve, reject) => {        //resolve, reject= son funciones
    const auth = true;

    if(auth){
            resolve('Usuario Autenticado'); //El promise se cumple
    }else{
             reject('Fallo en el inicio de sesión'); //El promise no se cumple
    }
});

usuarioAutenticado
.then( resultado => console.log(resultado))      //Arround Fuctions
.catch(error => console.log(error))



//En los Promises existen 3 valores
//Pending :No se ha cumplido pero tampoco se ha rechazado
//Fulfilled: Ya se cumplió
//Rejected: Se ha rechazado o no se pudo cumplir
