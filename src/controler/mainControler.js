const express = require('express');
const path = require('path');

const mainControler = express();

const publicFolderPath = path.join(__dirname, './Public');
console.log(publicFolderPath);

mainControler.use(express.static(publicFolderPath) );

const index = (req,res) => {
    res.sendFile(path.join(__dirname, './views/index.html'));
}
const login = (req,res) => {
    res.sendFile(path.join(__dirname, './views/login.html'));
}
const register = (req,res) => {
    res.sendFile(path.join(__dirname, './views/register.html'));
}
const productDetail = (req,res) => {
    res.sendFile(path.join(__dirname, './views/productDetail.html'));
}
const productCart = (req,res) => {
    res.sendFile(path.join(__dirname, './views/productCart.html'));
}
const createProduct = (req,res) => {
    res.sendFile(path.join(__dirname, './views/createProduct.html'));
}

module.exports = {
    index,
    login,
    register,
    productDetail,
    productCart,
    createProduct
}