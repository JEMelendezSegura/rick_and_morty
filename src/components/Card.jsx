import React from "react";
import Cards from "./Cards";

export default function Card(props) {
   return (
      <div>
         <button onClick={props.onClose}>X</button>
         <h2>{props.name}</h2>
         <h2>{props.satus}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <h2>{props.origin}</h2>
         <img src= {props.image} alt='imagén de Personaje' />
      </div>
   );
}
