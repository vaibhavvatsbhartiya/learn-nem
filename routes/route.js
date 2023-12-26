import pkg from 'express';
import * as controllerProduct from '../controller/products';
import { Router } from 'express';

// created a server using Express js and follow ES6 rules
const express  = pkg;

 export const productRouter = express.Router();


productRouter
  .post('/products', controllerProduct.createProduct)
  .get('/products/:id', controllerProduct.readProduct)
  .put('/products/:id', controllerProduct.updateProduct)
  .patch('/products/:id', controllerProduct.updateProductPatch)
  .delete('/products/:id', controllerProduct.deleteProduct);
