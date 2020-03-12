"use strict";

const http = require("http");
const server = http.createServer();
const fs = require("fs");

server.listen(8080, () => console.log("le serveur a démarré !"));

server.on("request", (request, response) => {
    console.log(request.url);
    console.log(request.method);

    switch (request.method) {
        case "GET":
            if (request.url === "/") {
                response.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
                fs.createReadStream(__dirname + "/public" + "/index.html").pipe(response)
            } else if (request.url === "/connection") {
                fs.readFile(__dirname + "/public/connection.html", (erreur, data) => {
                    if (erreur) throw erreur;
                    else {
                        response.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
                        response.end(data);
                    }
                });
            } else {
                response.writeHead(404, { "Content-Type": "text/html; charset=UTF-8" });
                response.end("<h1>Erreur 404</h1>");
            }
            break;
    }
});