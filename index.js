// import http from "node:http";  // http ki need nhi hai while we are using express js
import pkg from 'express';
import * as fs from "node:fs";

// file stracture s related hai yeh kooch
const index = fs.readFileSync("index.html", "Utf-8");
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const products = data.products;


// created a server using Express js and follow ES6 rules
const express  = pkg;
const server = express();
server.listen(3000, ()=>{
  console.log("Server Started and Hello V2");
})