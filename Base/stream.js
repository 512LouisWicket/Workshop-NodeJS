"use strict";
const fs = require('fs');
const {Transform} = require('stream');

const readingStream = fs.createReadStream('fichierAlire', {
    //option
    highWaterMark : 7
});

const transformationStream = new Transform({
    transform(chunk, encoding, end){
        let finalData = "lol"
        this.push(finalData) // ce que l'on push dans le stream de sortie
        end(); // callback à appeler pour passer au chunk suivant

        // Autre version:
        end(finalData); // => Le callback enverra ces données dans le stream également
    }
})

const writingStream = fs.createWriteStream('fichierAEcrire', {
    // option
})

// Appel du stream:

// S'assure que le fichier a bien été ouvert
readingStream.on('open', ()=>{
    // Connecte les streams les uns aux autres
    readingStream.pipe(transformationStream).pipe(writingStream);
})
