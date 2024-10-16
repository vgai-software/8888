const http = require('http'); // Require the http module
const fs = require('fs'); // Require the fs module
const port = 3000; // Define the port

// Create the HTTP server
const server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' }); // Set response header for HTML
    fs.readFile('index.html', function(error, data) {
        if (error) {
            res.writeHead(404); // File not found
            res.write('Error: File Not Found'); // Write error message
        } else {
            res.write(data); // Write the HTML file data
        }
        res.end(); // End the response
    });
});

// Server listens on the defined port
server.listen(port, () => {
    console.log(`Server running at http://127.0.0.1:${port}/`); // Log server status
});
