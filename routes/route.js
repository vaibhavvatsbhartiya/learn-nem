import pkg from "express";
import * as controllerProduct from "../controller/products.js";
// import { Router } from "express";

// created a server using Express js and follow ES6 rules
const express = pkg;

const prodRoute = express.Router();

prodRoute
  .post("/", controllerProduct.createProduct)
  .get("/:id", controllerProduct.readProduct)
  .put("/:id", controllerProduct.updateProduct)
  .patch("/:id", controllerProduct.updateProductPatch)
  .delete("/:id", controllerProduct.deleteProduct);

export default prodRoute;
