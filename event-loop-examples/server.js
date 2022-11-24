const http = require("http");

const server = http.createServer((req, res) => {
    console.log("request event");
    res.end("<h1>Hello World</h1>");
});

server.listen(3000, () => {
    console.log("Server is listening to port 3000");
});