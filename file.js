const http = require('http');
const fs = require('fs').promises;
const path = require('path');

// assignment style function
async function readFileExample() {
  const filePath = path.join(__dirname, 'myfile.txt');
  return await fs.readFile(filePath, 'utf8');
}

const server = http.createServer(async (req, res) => {
  try {
    if (req.url === '/' || req.url === '/index.html') {
      // HTML file
      const html = await fs.readFile(
        path.join(__dirname, 'index.html'),
        'utf8'
      );
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(html);
    }

    else if (req.url === '/styles.css') {
      // CSS file
      const css = await fs.readFile(
        path.join(__dirname, 'styles.css'),
        'utf8'
      );
      res.writeHead(200, { 'Content-Type': 'text/css' });
      res.end(css);
    }

    else if (req.url === '/data') {
      // TXT data (assignment function)
      const data = await readFileExample();
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(data);
    }

    else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
    }
  } catch (err) {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});