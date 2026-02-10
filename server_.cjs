const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    let filePath = '';

    if (req.url === '/' || req.url === '/index.html') {
        filePath = path.join(__dirname, 'index.html');
        res.setHeader('Content-Type', 'text/html');
    } 
    else if (req.url === '/styles.css') {
        filePath = path.join(__dirname, 'styles.css');
        res.setHeader('Content-Type', 'text/css');
    } 
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 - Page Not Found');
        return;
    }

    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.error(err); // 👈 terminal me error dikhega
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
            return;
        }
        res.writeHead(200);
        res.end(data);
    });
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});