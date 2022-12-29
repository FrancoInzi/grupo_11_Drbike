const express = require('express');
const path = require('path');

app.use(express.static('Public'))

const app = express();


app.listen(3000, () => console.log ('servidor exitoso'));
app.get('/', function(req, res){
    res.send('Página principal') 
});
app.get('/404', function(req, res){
    res.send("Error página no encontrada")
});