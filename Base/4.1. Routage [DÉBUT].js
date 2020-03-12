"use strict";

const http = require("http");
const server = http.createServer();

server.listen(8080, () => console.log("le serveur a démarré !"));

server.on("request", (request, response) => {
    console.log(request.url);
    console.log(request.method);
    response.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
    response.write("<p>Salut</p>");
    response.end("<p>ça va ?</p>");
});