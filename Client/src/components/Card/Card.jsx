import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import {connect} from 'react-redux';
import { useState, useEffect } from "react";

function Card({id, name, status, species, gender, origin, image, onClose, addFav, removeFav, allCharacters}) {
   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      let character = {
        id,
        name,
        status,
        species,
        gender,
        origin,
        image,
      };
  
      if (isFav) {
        setIsFav(false);
        removeFav(id);
      } else {
        setIsFav(true);
        addFav(character);
      }
    };

    useEffect(() => {
      allCharacters?.forEach((fav) => {
        if (fav.id === id) {
          setIsFav(true);
        }
      });
    }, [allCharacters]);



   return (
      <div className = {style.borde}>
         <button className={style.button} onClick={()=>onClose(id)}>
            <span className ={style.span}>
               Close Card
            </span>
         </button>
         {isFav ? (
          <button onClick={handleFavorite}>
            ❤️
          </button>
        ) : (
          <button onClick={handleFavorite}>
            🤍
          </button>
        )}
            <h2 className ={style.text}>{id}</h2>
         <Link to={`/detail/${id}`}>
            <h2 className ={style.text}>{name}</h2>
         </Link>
            <h2 className ={style.text}>{status}</h2>
            <h2 className ={style.text}>{species}</h2>
            <h2 className ={style.text}>{gender}</h2>
            <h2 className ={style.text}>{origin}</h2>
            <img src= {image} alt={name}/>
      </div>
   );
}

export const mapDispatchToProps = (dispatch) => {
   return {
     addFav: (character) => {
       dispatch(addFav(character));
     },
 
     removeFav: (id) => {
       dispatch(removeFav(id));
     },
   };
 };
 
 export const mapStateToProps = (state) => {
   return {
     allCharacters: state.allCharacters,
   };
 };
 
 export default connect(mapStateToProps, mapDispatchToProps)(Card);
