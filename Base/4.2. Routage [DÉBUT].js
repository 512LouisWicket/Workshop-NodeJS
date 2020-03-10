"use strict";

// Ton code ici

const http = require("http");
const fs = require("fs");
const server = http.createServer();

server.listen(8080, () => console.log("serveur a démarré"));

server.on("request", (req, res) => {
    console.log(req);
    console.log(req.url);
    console.log(req.method);
    res.writeHead(200, {"Content-Type": "text/html; charset=UTF-8"});
    res.end("<h1>Hello World</h1>");
});