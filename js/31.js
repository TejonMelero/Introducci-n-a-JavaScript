//Notificacion API o mostrar permisos
const boton = document.querySelector('#boton');
boton.addEventListener('click', ()=> {
    Notification.requestPermission()    //Pedir permiso para administrar notoficaciones
    .then(resultado => console.log(`El resultado es ${resultado}`))
});

if(Notification.permission == 'granted'){            //Cuando el usuario nos da permiso
    new Notification('Esta es una notificación',{
        icon: 'img/imagen.jgp',
        body: 'Codigo con Juan'
    })
}