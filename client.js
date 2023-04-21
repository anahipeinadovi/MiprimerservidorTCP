const net = require('net');


const client = new net.Socket(); //instanciar un objeto de laclase socket 

client.connect(3000,'127.0.0.1', ()=>{
    console.log("------conexion tcp exitosa------");

});
// puerto al que nos queremos conectar , direccion ip ,funcion flecha (que es lo que quiero que pase cuando la funcion se realice de manera exitosa )

client.on('close', ()=>{
    console.log("--------conexion terminada-----");
});


client.on('data', (data)=>{
    console.log(`INFO: ${data}`); //para que el buffer lo convierta en una cadena 
});















