const axios = require('axios');

const URL = "https://rickandmortyapi.com/api/character/";


const getCharById = ((req, res)=>{
    const {id} = req.params;
    axios(`${URL}${id}`)
    .then((response)=>{
        const character = {
            id: response.data.id,
            status: response.data.status,
            name: response.data.name,
            species: response.data.species,
            origin: response.data.origin,
            image: response.data.image,
            gender: response.data.gender,
        }
        return character.name ? res.status(200).json(character) : res.status(404).send("Not found");
    })
    .catch((err)=>{
        res.status(500).json({err: error.message})
    })
});


module.exports = getCharById;

