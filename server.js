const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.listen(3000,function(){
    console.log('server on port 3000');
});
//se encarga de ejecutar express y enviarle a nuestro
//cliente todo lo que esta en la carpeta public