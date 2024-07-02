//This (palabra reservada que no se puede crear una función o una variable)

const reservacion ={
    nombre: 'Juan',
    apellido: 'Velasco',
    total: 5000,
    pagado: false,
    informacion: function(){
        console.log(`El cliente ${this.nombre} ${this.apellido} reservó y su cantidad a pagar es de ${this.total}`);
    }

}



const reservacion2 ={
    nombre: 'Carlos',
    apellido: 'Bastidas',
    total: 3000,
    pagado: false,
    informacion: function(){
        console.log(`El cliente ${this.nombre} ${this.apellido} reservó y su cantidad a pagar es de ${this.total}`);
    }

}
reservacion.informacion() //Código para llamar la función
reservacion2.informacion() //Código para llamar la función