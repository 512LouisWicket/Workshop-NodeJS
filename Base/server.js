"use strict";

// Part 1
const http = require('http');
// crée le serveur et l'on obtient un objet serveur dans la variable server que l'on peut ensuite manipuler.
const server = http.createServer();
// créée bien plus tard après avoir rooté les premiers liens
const fs = require('fs');
// crée pour trouver l'extension des requêtes
const path = require('path');
const MIMEType = MIMETypes[extension] || "application/octet-stream";
const MIMETypes = {
    ".png": "image/png",
    ".html": "text/html",
    ".ico": "image/x-icon",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".js": "application/javascript",
    ".json": "application/json",
    ".css": "text/css"
};

// écoute le port 8080 pour recevoir les requetes 
server.listen(8080, () => console.log("The server has been initiated"));

// Part 2
// "on" permet d'élaborer une réponse pour un évènement.
server.on("request", (req, res) => {
    // console.log(req.url);
    // console.log(req.method);
    // Parler de status code ici !!!
    // res.writeHead(200, "Everything went fine",{"Content-Type": "text/html; charset=UTF-8"});
    // Ecriture du body de la réponse
    // res.write("<h1>Hello World</h1>")
    // .end envoie la réponse et l'argument passé est le dernier chunk.
    // res.end("<p>La noisette </p>");
    // part 3
    switch (req.method) {
        case "GET":
            // if(req.url === "/"){
            //     res.writeHead(200, {"Content-Type": "text/html; charset=UTF-8"});
            //     res.write("<h1>Hello World 2 </h1>");
            //     res.end("<p>La noisette </p>");
            // } else if(req.url === "/connection"){
            //     res.writeHead(200, {"Content-Type": "text/html; charset=UTF-8"})
            //     res.end();
            // } else {
            //     res.writeHead(404, {"Content-Type": "text/html; charset=UTF-8"})
            //     res.end("404 MA GUEULE !");
            // }
            // break;

            // part 4 && 5

            // 5 : EST CE UN MYMETYPE ?????
            const extension = path.extname(req.url);
            if (extension !== "") {
                // Définition du mimetype si type connu sinon application du mimetype général
                const MIMEType = MIMETypes[extension] || "application/octet-stream";
                // 
                fs.readFile(__dirname + req.url);
            } else if (req.url === "/") {
                res.writeHead(200, {
                    "Content-Type": "text/html; charset=UTF-8"
                });
                fs.readFile(__dirname + '/public/index.html', (err, data) => {
                    if (err) throw err;
                    else {
                        res.writeHead(200, {
                            "Content-Type": "text/html; charset=UTF-8"
                        });
                        res.write(data);
                        res.end();
                    }
                });
            } else if (req.url === "/stream") {
                res.writeHead(200, {
                    "Content-Type": "text/html; charset=UTF-8"
                });
                fs.createReadStream(__dirname + "/public/index.html").pipe(res);
            } else {
                res.writeHead(404, {
                    "Content-Type": "text/html; charset=UTF-8"
                })
                res.end("404 MA GUEULE !");
            }
            break;

    }
});

// Méthode HTTP