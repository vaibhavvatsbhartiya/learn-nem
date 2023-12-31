// import http from "node:http";  // http ki need nhi hai while we are using express js
import pkg from 'express';
import morgan from 'morgan';
import prodRoute from "./routes/route.js"
// import mongoose from 'mongoose';

// import dotenv from 'dotenv';
 
// dotenv.config();


// created a server using Express js and follow ES6 rules
const express  = pkg;
const server = express();


// db server connection
// main().catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb://127.0.0.1:27017/test');
//   console.log("Database Connected");
// } 


//bodyParser
server.use(express.json());
server.use(morgan('default'))
server.use(express.static('public'));


//Create POST /products     C R U D
server.use('/products', prodRoute)

server.listen(3000, ()=>{
  console.log("Server Started and Hello V2");
})


// error aa rha hai
// and mere according toh import statement ok hai

// Error [ERR_MODULE_NOT_FOUND]: Cannot find module 'C:\Users\Ashish vats\Desktop\learn-nem\controller\products' imported from C:\Users\Ashish vats\Desktop\learn-nem\index.js
// Did you mean to import ../controller/products.js?
//     at new NodeError (node:internal/errors:405:5)
//     at finalizeResolution (node:internal/modules/esm/resolve:324:11)
//     at moduleResolve (node:internal/modules/esm/resolve:943:10)
//     at defaultResolve (node:internal/modules/esm/resolve:1129:11)
//     at nextResolve (node:internal/modules/esm/loader:163:28)
//     at ESMLoader.resolve (node:internal/modules/esm/loader:835:30)
//     at ESMLoader.getModuleJob (node:internal/modules/esm/loader:424:18)
//     at ModuleWrap.<anonymous> (node:internal/modules/esm/module_job:77:40)
//     at link (node:internal/modules/esm/module_job:76:36) {
//   code: 'ERR_MODULE_NOT_FOUND'
// }