const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('Public'));



app.listen(5500, () => console.log ('servidor exitoso'));

app.get('/', function(req, res){
    res.send('Home') 
});
app.get('/404', function(req, res){
    res.send("Error página no encontrada")
});