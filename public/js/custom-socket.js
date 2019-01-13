var socket = io();

socket.on('connect', function(){
     console.log('server connect');
});

socket.on('disconnect', function(){
     console.log('lose the server :(');
});




// emitir data al servidor

socket.emit('enviarMensaje',{
      usuario:'parzival',
      mensaje:'hello word'
}
);




// escuchar servidor
socket.on('enviarMensaje', function(mensaje){
     console.log('el mensaje es:', mensaje);
});
