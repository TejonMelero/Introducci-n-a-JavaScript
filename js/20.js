//Reproductor de música , Métodos de propiedad
const Reproductor ={
    reproducir : function(id) {
        console.log(`Reproduciendo la canción con el ID:${id}`)
    },
    pausar : function(){
        console.log(`Pausando....`)
    },
    crearPlayList: function(Nombre){
        console.log(`Creando la PlayList:${Nombre}`)
    },
    reproducirPlayList: function(Nombre){
        console.log(`Reproduciendo la PlayList:${Nombre}`)
}
}
Reproductor.borrarcancion = function(id){    //Propiedades por fuera del objeto
console.log(`Eliminando la canción: ${id}`)
}

Reproductor.reproducir(3840);   //Funciones que se le puede dar a la aplicación
Reproductor.pausar();
Reproductor.borrarcancion(20);
Reproductor.crearPlayList('Salsa');
Reproductor.reproducirPlayList('Salsa');
