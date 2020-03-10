"use strict";

// Ton code ici

const http = require("http");
const fs = require("fs");
const server = http.createServer();
const {parse} = require("url");
let index = fs.readFileSync('index.html', 'utf8');
const path = require("path");

server.listen(8080, () => console.log("serveur a démarré"));

const MIMEtypes = {'.css': 'text/css', '.jpg': 'image/png'}

server.on("request", (req, res) => {
    const url = parse(req.url);
    const uri = url.pathname;
    console.log(req.url);
    switch (req.method) {
        case 'GET':
        const extension = path.extname(uri);
        if (!extension)
        {
            if (req.url === '/')
            {
                res.writeHead(200, {"Content-Type": "text/html; charset=UTF-8"});
                fs.createReadStream(path.join(__dirname, 'public', 'index.html')).pipe(res);
            }
            else
            {
                res.writeHead(404, {'Content-Type': 'text/html; charset=UTF-8'});
                res.end('<h1>404</h1>')
            }
        }
        else
        {
            console.log(req.url);
            const MIMEtype = MIMEtypes[extension] || 'application/octet-stream';
            
            fs.readFile(path.join(__dirname, 'public', uri), (erreur,data) => {
                if (erreur)
                {
                    console.error(erreur);
                    res.statusCode = 404;
                    res.end("cannot find" + uri);
                    
                }
                else
                {
                    res.writeHead(200, {'Content-type': MIMEtype + "; charset=UTF-8"});
                    res.end(data);
                }
            })
        }
    }
});