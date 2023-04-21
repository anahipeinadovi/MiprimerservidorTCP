# Mi primer servidor TCP
En este repositorio se encuentra código de la implementacion de un servidor y un cliente TCP en nodejs.
Se hace el uso del modulo 'net' para crear y conectarse a un servidor en cierta direccion IP y un puerto,en este caso seria la direccion IP '127.0.0.1' y el puerto 3000.

### Prerequisites

Se deberan tener instaladas las dependencias correspondientes (nodejs y npm) 

### Installing

1.Asegurarse de tener instaladas las dependencias correspondientes: https://midu.dev/como-instalar-node-en-mac-y-windows/
2. Clonar este repositorio en tu computadora
3. Abrir dos terminales y posicionarse en el directorio donde se encuentra el archivo del servidor y del cliente
4. En una terminarl ejecutar el servidor con el siguiente comando: 
    node server.js
5.En la segunda terminal ejecutar el código del cliente con el siguiente comando para que se conecte con el servidor :
    node client.jsj
6.Cuando se establece la conexión aparecerá un mensaje de éxito en la consola y cuando envíe datos desde el cliente al servidor, los datos se mostrarán en la consola del servidor. 
Cuando el servidor envíe datos al cliente, los datos se mostrarán en la consola del cliente. Cuando cierre la conexión, verá un mensaje de desconexión en la consola del cliente.

## Built With

Node js
npm 
Javascript


## Authors

Anahí Peinado Villalobos 353262 

## License

No cuenta con licencia 
