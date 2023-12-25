import http from "node:http";
import * as fs from "node:fs";

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