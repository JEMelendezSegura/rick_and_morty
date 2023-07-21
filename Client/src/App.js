import './App.css';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import About from './components/about/About';
import Detail from './components/Detail/Detail';
import Error404 from './components/error404/Error404';
import Form from "./components/Form/Form";


function App() {
   const { pathname } = useLocation()
   const navigate = useNavigate()

   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false)
   
   const EMAIL = 'esaums@gmail.com';
   const PASSWORD = 'pastelito1'
   
   function login({ email, password }){
      if(email === EMAIL && password === PASSWORD){
        setAccess(true);
        navigate('/home')
      }
    }

    useEffect(()=>{
      !access && navigate('/')
    },[access])

    function logOut(){
        setAccess(false);
        navigate('/')
    }

    



   const onSearch = (id) => {
      if(!id) alert('Ingresa un ID')
      if(characters.find(char => char.id === parseInt(id) )){
        alert(`Ya existe el personaje con el id ${id}`)
        return;
      }
     axios(`http://localhost:3001/rickandmorty/character/${id}`)
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
        {pathname !== "/" && <Nav onSearch={onSearch} logOut={logOut}/>}
         <Routes>
            <Route path="/" element={<Form login={login}/>}/>
            <Route path="/home" element={  <Cards characters={characters} onClose={onClose} />} />
            <Route path="/about" element={  <About/>} />
            <Route path="/detail/:id" element={  <Detail/>} />
            <Route path="*" element={<Error404/>}/>


         </Routes>
      </div>
   );
}

export default App;
