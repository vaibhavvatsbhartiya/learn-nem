import http from "node:http";
import * as fs from "node:fs";
import { threadId } from "node:worker_threads";

const index = fs.readFileSync("index.html", "Utf-8");

const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));

const products = data.products;



// Create a local server to receive data from
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);


  if(req.url.startsWith('/product')){
    const id = req.url.split('/')[2]
    const product = products.find(p=>p.id===(+id)) // yeh higher order function yaha use kra ja raha hai
    console.log(product)
    res.setHeader('Content-Type', 'text/html');
          let modifiedIndex = index.replace('**title**', product.title)
          .replace('**url**', product.thumbnail)
          .replace('**price**', product.price)
          .replace('**rating**', product.rating)
          res.end(modifiedIndex);
          return;
  }


//   '/product':
//       res.setHeader('Content-Type', 'text/html');
//       let modifiedIndex = index.replace('**title**', product.title)
//       .replace('**url**', product.thumbnail)
//       .replace('**price**', product.price)
//       .replace('**rating**', product.rating)
//       res.end(modifiedIndex);
//       break;



switch (req.url) {
  case '/':
    res.setHeader('Content-Type', 'text/html');
    res.end(index);
    break;
  case '/api':
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(data));
    break;

  default:
    res.writeHead(404);
    res.end();
}

console.log('server started  ');
//   res.setHeader('Dummy', 'DummyValue');

//
});

server.listen(8000);


//  Hala ki mane code copy kr k use krne ka try kra but ik baat toh smz m aa giyee k 
// node js k help s server create krna complex hai bhout


// 1. Unexpected token 'export'
// 2. Cannot use import statement outside a module (at VM6:5:1)
// 3. loadTimeData is not defined at HTMLDocument.onDocumentLoad (VM7:265:31)

// error kaise hata pta nhi
// bs style.css ko hata k sb index.html m he css ko kr diya add because 

// error aa rha tha

// /product/style.css GET
// undefined
// file:///C:/Users/Ashish%20vats/Desktop/learn-nem/index.js:22
//           let modifiedIndex = index.replace('**title**', product.title)
//                                                                  ^

// TypeError: Cannot read properties of undefined (reading 'title')
//     at Server.<anonymous> (file:///C:/Users/Ashish%20vats/Desktop/learn-nem/index.js:22:66)
//     at Server.emit (node:events:514:28)
//     at parserOnIncoming (node:_http_server:1107:12)
//     at HTTPParser.parserOnHeadersComplete (node:_http_common:119:17)

// Node.js v18.17.0
// [nodemon] app crashed - waiting for file changes before starting...