const express = require('express');
const path = require('path');

const app = express();
app.listen(3000, () => console.log ('Esto fue exitoso'));
app.get('/', function(req, res){
    res.send('Página principal') 
});
app.get('/404', function(req, res){
    res.send("Error página no encontrada")
});