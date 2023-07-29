
// const http = require('http');
// const getCharById = require('./controllers/getCharById')

// http.createServer(function(req, res){
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     if (req.url.includes('/rickandmorty/character')){
//         let id= req.url.split('/').at(-1);
//         getCharById(res, id);
//     }

// }).listen(3001, 'localhost');


const express = require('express');
const router = require('./routes/index')
const morgan = require('morgan');
const server = express();
const PORT = 3001;
server.use(morgan('dev'));
server.use(cors());
server.use(express.json());

server.use('/rickandmorty', router  ) // aqui se elnaza servidor con rutas 

server.listen(PORT, ()=>{
    console.log(`Server raised in port: ${PORT}`);
})

module.exports = server;

// if(req.url.includes('/rickandmorty/character')){
//     let characterId= req.url.split('/').pop();
//     let id = parseInt(characterId);     
//     let character = data[id-1];
//     if(character){
//         res.writeHead(200, { "Content-type": "application/json" });
//         res.end(JSON.stringify(character));
//     } else {
//         res.writeHead(404, { "Content-type": "text/plain" });
//         res.end("Personaje no encontrado"); 
//     }
// } 