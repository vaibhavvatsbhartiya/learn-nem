import http from "node:http";
import * as fs from "node:fs";

const index = fs.readFileSync("index.html", "Utf-8");

// Create a local server to receive data from
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" }); // Header ko define kr ja rha hai
  // Node bhout dumb hai so we use "JSON.stringify" method
  // To set data as string otherwise vo error d deta apne ko

  //   res.end(JSON.stringify({
  //     data: 'Hello World!',
  //   }));
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(index);
});

server.listen(8000);


// Reference
// https://nodejs.org/docs/latest/api/http.html#httpcreateserveroptions-requestlistener
