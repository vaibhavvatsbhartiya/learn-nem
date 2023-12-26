// import http from "node:http";  // http ki need nhi hai while we are using express js
import pkg from 'express';
import * as fs from "node:fs";
import morgan from 'morgan';

// file stracture s related hai yeh kooch
const index = fs.readFileSync("index.html", "Utf-8");
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const products = data.products;


// created a server using Express js and follow ES6 rules
const express  = pkg;
const server = express();

// Middleware 
// ----------------uses----------------
// 1. Execute any code.
// 2. Make changes to the request and the response objects.
// 3. End the request-response cycle.
// 4. Call the next middleware in the stack.

// server.use((req, res, next) => {
//   console.log(req.method, req.ip); //agr itna likha toh yeh chalta hr rahe ga but
//   next() // ab aage wale functions ka use kr lega 
// })


//bodyParser
server.use(express.json());
// server.use(express.urlencoded());
server.use(morgan('default'));


// server.use(express.static('public')); // ab public folder m jo bhi hai usko direct access kra ja skta hai 
// server.use((req, res, next) => {
//   console.log(
//     req.method,
//     req.ip,
//     req.hostname,
//     new Date(),
//     req.get('User-Agent')
//   );
//   next();
// });

const auth = (req, res, next) => {
  // console.log(req.query);

  // if (req.body.password == '123') {
  //   next();
  // } else {
  //   res.sendStatus(401);
  // }
  next()
 
};

// Modified ho and data ko get krene k lie parameter k need ho tb use kr skte hai
server.get('/', (req, res)=>{
  res.json({"type":"GET"})
})

// AB YEH APN DEKH SKTE HAI K IK HE URL PR 5 ALG ALG *RESPONSE* GENERATE KRA JA RHA HAI
// ALSO ISKO APN *API*-endpoint ya route bhi bolte hai
server.get('/', (req, res)=>{
  res.json({"type":"GET"})
})
server.post('/', (req, res)=>{
  res.json({"type":"POST"})
})
server.put('/', (req, res)=>{
  res.json({"type":"PUT"})
})
server.get('/', (req, res)=>{
  res.delete({"type":"DELETE"})
})
server.patch('/', (req, res)=>{
  res.json({"type":"PATCH"})
})
// Postman ka use kr k in ko ache s smza ja skta hai

// res cmd used 
server.get('/', (req, res) => { 
  // res.send('<h1>Home page</h1>'); 
  // res.json(products);
  res.status(201).send('<h1>Home page</h1>');
}); 





server.listen(3000, ()=>{
  console.log("Server Started and Hello V2");
})