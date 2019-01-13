const { io } = require('../server');

io.on('connection', (client) =>{
     console.log('user connect');

     //emitir de servidor a cliente

     client.emit('enviarMensaje', {
          usuario:'Admin',
          mensaje:'I am admin'
     });

     client.on('disconnect', (client) =>{
          console.log('lose the user');
        });


// escuchar al cliente
        client.on('enviarMensaje', (data,callback) =>{

             console.log(data);

             client.broadcast.emit('enviarMensaje', data);
          /* if(mensaje.usuario){
             callback({
               resp: 'SUCCESFULL'
             });
           }else{
             callback({
               resp: 'ERROR'
             });
           }*/

           });
});
