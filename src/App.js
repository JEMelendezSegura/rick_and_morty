import './App.css';
import axios from 'axios';
import { Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';


function App() {
   
   const [characters, setCharacters] = useState([]);
      
   const onSearch = (id) => {
      if(!id) alert('Ingresa un ID')
      if(characters.find(char => char.id === parseInt(id) )){
        alert(`Ya existe el personaje con el id ${id}`)
        return;
      }
     axios(`https://rickandmortyapi.com/api/character/${id}`)
     .then(({data}) => {
        if(data.name){
          setCharacters((oldChars)=> [...oldChars, data])
        }
     })
     .catch(err => alert(err.response.data.error))
    }

   //! por si sale en el checkpoint. hacer el onSearch con Fetch

   // function onSearchD(id) {
   //    fetch(`https://rickandmortyapi.com/api/character/${id}`)
   //    .then(res => res.json())
   //    .then(data => {
   //       if(data.name){

   //       } else {
   //          alert("¡No se encontró ningún personaje!");
   //       }
   //    })
   // }

   
  const onClose =(id) =>{
   setCharacters(characters.filter(char => char.id !== id))
 }


   return (
      <div className='App'>
            <Nav onSearch={onSearch}/>
            <Cards characters={characters} onClose={onClose} />
   
      </div>
   );
}

export default App;
