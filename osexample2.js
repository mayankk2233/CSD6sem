const http = require('http');
const os = require('os');
const fs = require('fs').promises;
const path = require('path');

const server = http.createServer(async (req, res) => {
  try {
    if (req.url === '/' || req.url === '/index.html') {
      // HTML serve
      const html = await fs.readFile(
        path.join(__dirname, 'index.html'),
        'utf8'
      );
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(html);
    }

    else if (req.url === '/styles.css') {
      // CSS serve
      const css = await fs.readFile(
        path.join(__dirname, 'styles.css'),
        'utf8'
      );
      res.writeHead(200, { 'Content-Type': 'text/css' });
      res.end(css);
    }

    else if (req.url === '/osinfo') {
      // 🔥 OS INFO SEND TO BROWSER
      const totalMemGB = (os.totalmem() / (1024 ** 3)).toFixed(2);
      const freeMemGB = (os.freemem() / (1024 ** 3)).toFixed(2);

      const osInfo = {
        platform: os.platform(),
        type: os.type(),
        release: os.release(),
        architecture: os.arch(),
        hostname: os.hostname(),
        user: os.userInfo().username,
        homeDir: os.homedir(),
        memory: `${freeMemGB} GB free of ${totalMemGB} GB`
      };

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(osInfo));
    }

    else {
      res.writeHead(404);
      res.end('Not Found');
    }
  } catch (err) {
    res.writeHead(500);
    res.end('Internal Server Error');
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});