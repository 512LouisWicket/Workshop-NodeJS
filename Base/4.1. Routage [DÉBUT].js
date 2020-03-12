"use strict";

const http = require("http"); /* Récupère le module http */
const server = http.createServer(); /* Crée une nouvelle instance de http.Server */

server.listen(8080, () => console.log("Serveur démarré !")); /* Écoute le port 8080 */

server.on("request", (request, response) => {
    /* Le code à l’intérieur de ce bloc est exécuté à chaque requête */
    
    console.log("url: " + request.url);
    console.log("method: " + request.method);
    console.log(request.headers);
});