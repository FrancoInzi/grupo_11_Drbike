const express = require('express');
const {index, login, register, productDetail, productCart, createProduct} = require('../controler/mainControler')

const routerMain = express.Router();


routerMain.get('/', index);

routerMain.get('/login', login );

routerMain.get('/register', register );

routerMain.get('/productDetail',  productDetail);

routerMain.get('/productCart',  productCart);

routerMain.get('/productCart',  createProduct);


module.exports=routerMain;