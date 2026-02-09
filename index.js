import http from "http";
import fs from "fs";
import path from "path";
import {fileURLToPath} from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, "message.txt");

    fs.readFile(filePath, "utf-8", (err, data) => {
            if(err) {
                res.writeHead(500, { "Content-Type": "Text/plain"});
                res.end("Error Reading File");
            } else{
                res.writeHead(200, { "Conetnt-Type": "Text/plain"});
                res.end(data);
            }
    });
});

server.listen(3000, ()=> {
    console.log("Server is running on port 3000");
})