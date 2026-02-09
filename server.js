const http = require("http")

const server = http.createServer((req, res) => {
    res.write("This is a response from the server")
    res.end();
})

server.listen((3000), () => {
    console.log("Server is running");
})