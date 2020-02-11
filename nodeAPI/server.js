
// http service
const http = require("http");

// use default envirnmetn port or 3000
const port = process.env.PORT || 3000

// make server
const server = http.createServer()

// make server accessible through this port 
server.listen(port);



