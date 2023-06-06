import React from "react";
import Card from "./Card";

export default function Cards(props) {
   return (
   <div>
         <ul>
         {props.characters.map((pj) => (
            <Card
            key={pj.id}
            id={pj.id}
            name={pj.name}
            status={pj.status}
            species={pj.species}
            gender={pj.gender}
            origin={pj.origin.name}
            image={pj.image}
            onClose={() => window.alert('Emulamos que se cierra la card')}/>
         ))}
         </ul>
   </div>
   );
}


