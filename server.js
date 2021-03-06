const http = require("http");
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require("./controllers/productController");

const server = http.createServer((req, res) => {
  if (req.url === "/api/products" && req.method === "GET") {
    getProducts(req, res);
  } else if (req.url.match(/\/api\/products\/([0-9]+)/) && req.method === "GET") {
    const id = req.url.split("/")[3];
    getProduct(req, res, id);
  } else if (req.url === "/api/products" && req.method === "POST") {
    createProduct(req, res);
  } else if (req.url.match(/\/api\/products\/([0-9]+)/) && req.method === "PUT") {
    console.log('update');
    const id = req.url.split("/")[3];
    updateProduct(req, res, id);
  } else if (req.url.match(/\/api\/products\/([0-9]+)/) && req.method === "DELETE") {
    const id = req.url.split("/")[3];
    deleteProduct(req, res, id); 
  }
   else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Route not found" }));
  }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

// const server = http.createServer((req, res) => {
//   if(req.url === '/api/products' && req.method === 'GET') {
//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     res.end(JSON.stringify(products));
//   } else {
//     res.writeHead(404, { 'Content-Type': 'application/json' });
//     res.end(JSON.stringify({ message: 'Route not found'}));
//   }

//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html')
//   res.write('<h1>ullo world</h1>')
//   res.end();

//   res.write(JSON.stringify(products))
//   res.end();

// });
