// import http from "node:http";  // http ki need nhi hai while we are using express js
import pkg from 'express';
import morgan from 'morgan';
import prodRoute from "./routes/route.js"
import mongoose from 'mongoose';
 
// import dotenv from 'dotenv';
 
// dotenv.config();


// created a server using Express js and follow ES6 rules
const express  = pkg;
const server = express();


// db server connection
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
  console.log("Database Connected");
} 

//bodyParser
server.use(express.json());
server.use(morgan('default'))
server.use(express.static('public'));


//Create POST /products     C R U D
server.use('/products', prodRoute)

server.listen(3000, ()=>{
  console.log("Server Started and Hello V2");
})

