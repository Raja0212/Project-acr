// Require the HTTP module
const http = require('http');

// Create a server object
const server = http.createServer((req, res) => {
  // Set the response header
  res.setHeader('Content-Type', 'text/plain');

  // Write the response body
  res.write('Hello, world!');

  // End the response
  res.end();
});

// Start the server and listen on port 3000
server.listen(3000, () => {
  console.log('Server started on port 3000');
});