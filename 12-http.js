const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("Welcome to our Home Page");
    }
    if (req.url === "/about") {
        res.end("Welcome to our about page");
    }
    res.end(`
    <h1> Oops <h1>
    <p> We don't have that page link </p>`);
});

server.listen(5000);