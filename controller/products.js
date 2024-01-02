import * as fs from "node:fs";
// const index = fs.readFileSync("index.html", "Utf-8");

// Ab hum DB k sath work kre g toh data.json k need nhi hai sb kuch DB s render kra jiye ga
// const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
// const products = data.products;

import { Product } from "../model/product.js";

const createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);

    // Adding info to DB directly
    // const product = new Product();
    // product.title = "phone";
    // product.price = 233;
    // res.status(201).json(req.body);

    // ❌ MongooseError: Model.prototype.save() no longer accepts a callback
    // product.save((err,doc) => {
    //   console.log(err, doc);
    // })

    const prod = await product.save();
    console.log(product);
    console.log(prod);
    res.status(201).json(req.body); 
  } catch (err) {
    console.log(err);
  }
};

const readProduct = async (req, res) => {
  try {
    const id = req.params.id;
  const product = await Product.find({_id : id});
  res.json(product);
  } catch (err){
    console.log(err);
  }
};

const updateProduct = (req, res) => {
  const id = req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  products.splice(productIndex, 1, { ...req.body, id: id });
  res.status(201).json();
};

const updateProductPatch = (req, res) => {
  const id = req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  const product = products[productIndex];
  products.splice(productIndex, 1, { ...product, ...req.body });
  res.status(201).json();
};

const deleteProduct = (req, res) => {
  const id = req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  const product = products[productIndex];
  products.splice(productIndex, 1);
  res.status(201).json(product);
};

// export default { controllerProduct } ;
export {
  updateProduct,
  createProduct,
  updateProductPatch,
  deleteProduct,
  readProduct,
};
