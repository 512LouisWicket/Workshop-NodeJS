"use strict";

// Ton code ici

const http = require("http");
const fs = require("fs");
const server = http.createServer();
let index = fs.readFileSync('index.html', 'utf8');

server.listen(8080, () => console.log("serveur a démarré"));

server.on("request", (req, res) => {
    console.log(req.url);
    switch (req.method) {
        case 'GET':
            if (req.url === '/')
            {
                res.writeHead(200, {"Content-Type": "text/html; charset=UTF-8"});
                res.end(index);
            }
            else
            {
                res.writeHead(404, {'Content-Type': 'text/html; charset=UTF-8'});
                res.end('<h1>404</h1>')
            }
    }
    
});