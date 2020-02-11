
// http service
const http = require('http');

// import grtLanding.js
const app = require('./app');

// use default envirnmetn port or 3000
const port = process.env.PORT || 3000;

// make server
const server = http.createServer(app);

// make server accessible through this port 
server.listen(port);



