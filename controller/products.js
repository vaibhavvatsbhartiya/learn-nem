import * as fs from "node:fs";
// const index = fs.readFileSync("index.html", "Utf-8");
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const products = data.products;





// in our case createProduct, readProduct and other 3 are controller i.e. here we control the data how much and in which way we share 

const createProduct =  (req, res) => {
    console.log(req.body);
    products.push(req.body);
    res.status(201).json(req.body);
  }
  
  const readProduct = (req, res) => {
    const id = +req.params.id;
    const product = products.find(p=>p.id===id)
    res.json(product);
  }
  
  const updateProduct = (req, res) => {
    const id = +req.params.id;
    const productIndex = products.findIndex(p=>p.id===id)
    products.splice(productIndex,1,{...req.body, id:id})
    res.status(201).json();
  }
  
  const updateProductPatch =  (req, res) => {
    const id = +req.params.id;
    const productIndex = products.findIndex(p=>p.id===id)
    const product = products[productIndex];
    products.splice(productIndex,1,{...product,...req.body})
    res.status(201).json();
  }
  
  const deleteProduct = (req, res) => {
    const id = +req.params.id;
    const productIndex = products.findIndex(p=>p.id===id)
    const product = products[productIndex];
    products.splice(productIndex,1)
    res.status(201).json(product);
  }

  // export default { controllerProduct } ;
  export {updateProduct, createProduct, updateProductPatch, deleteProduct, readProduct};