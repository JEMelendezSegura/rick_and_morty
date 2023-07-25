import { Link } from "react-router-dom";
import style from "./Card.module.css";
import {connect} from 'react-redux';
import { addFav, removeFav } from "../../redux/actions";
import { useState } from "react";

function Card({id, name, status, species, gender, origin, image, onClose, addFav, removeFav}) {
   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () =>{
      if(isFav){
         setIsFav(false)
         removeFav(id)
      } else {
         setIsFav(true)
         addFav({id, name, status, species, gender, origin, image})
      }
   }



   return (
      <div className = {style.borde}>
         <button className={style.button} onClick={()=>onClose(id)}>
            <span className ={style.span}>
               Close Card
            </span>
         </button>
         {
            isFav ? 
            <button onClick={handleFavorite}>❤️</button>
          : 
            <button onClick={handleFavorite}>🤍</button>
         
}
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

export function mapDispatchToProps(dispatch){
   return {
      addFav: function(character){
         dispatch(addFav(character))
      },
      removeFav: function(id){
         dispatch(removeFav(id))
      }
   }
}

export default connect(null, mapDispatchToProps)(Card);

