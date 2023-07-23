const axios = require('axios');

const getCharById = (res, id)=>{
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response)=>{
        const {name, gender, species, origin, image, status } = response.data;
        res.writeHead(200,{"Content-Type":"application/json"})
        res.end(JSON.stringify({id, name, gender, species, origin, image, status}))

    })
    .catch((err)=>{
        res.writeHead(500, {"Content-Type":"text/plain"})
        res.end(err.message)
    })
}

module.exports = getCharById;

         