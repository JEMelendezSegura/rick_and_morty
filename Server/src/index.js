const data = require ('./utils/data.js');
const http = require('http');

http.createServer(function(req, res){
    res.setHeader('Access-Control-Allow-Origin', '*');
    if(req.url.includes('/rickandmorty/character')){
        let characterId= req.url.split('/').pop();
        let id = parseInt(characterId);     
        let character = data[id-1];
        if(character){
            res.writeHead(200, { "Content-type": "application/json" });
            res.end(JSON.stringify(character));
        } else {
            res.writeHead(404, { "Content-type": "text/plain" });
            res.end("Personaje no encontrado");
        }
    } 
}).listen(3001, 'localhost');