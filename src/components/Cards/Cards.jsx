
import Card from "../Card/Card";
import style from "./Cards.module.css";

export default function Cards(props) {
   return (
   <div className ={style.divFondo}>
         <ul className = {style.unorderedList}>
         {props.characters.map((pj) => (
            <Card
            id={pj.id}
            name={pj.name}
            status={pj.status}
            species={pj.species}
            gender={pj.gender}
            origin={pj.origin.name}
            image={pj.image}
            onClose={props.onClose}/>
         ))}
         </ul>
   </div>
   );
}


