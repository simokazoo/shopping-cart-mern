
'use strict';
 
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const data = require('./data');

 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
 
app.get('/api/products', (req, res) => { //lists all  available products
  return res.json(data.products);
});
 
app.post('/api/products', (req, res) => { //generates the list of products in the cart
  let products = [], id = null;
  let cart = JSON.parse(req.body.cart);
  if (!cart) return res.json(products)
  for (var i = 0; i < data.products.length; i++) {
    id = data.products[i].id.toString();
    if (cart.hasOwnProperty(id)) {
      data.products[i].qty = cart[id]
      products.push(data.products[i]);
    }
  }
  return res.json(products);
});
 


 
const PORT = 5000;
 
app.listen(PORT);
console.log('api runnging on port ' + PORT + ': ');