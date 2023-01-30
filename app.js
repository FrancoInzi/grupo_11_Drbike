const express = require('express');
const path = require('path');

const app = express();
const routerMain = require('./src/routes/main.js');

const port = process.env.PORT || 3030

const publicFolderPath = path.join(__dirname, './Public');
console.log(publicFolderPath);

app.use(express.static(publicFolderPath) );

app.use(routerMain);


app.listen(port,()=>console.log(`servidor escuchando en puerto ${port}`));