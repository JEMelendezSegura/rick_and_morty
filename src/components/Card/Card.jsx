import style from "./Card.module.css";

export default function Card(props) {
   return (
      <div className = {style.borde}>
         <button className={style.button} onClick={()=>props.onClose(props.id)}>
            <span className ={style.span}>
               Close Card
            </span>
         </button>
         <h2 className ={style.text}>{props.id}</h2>
         <h2 className ={style.text}>{props.name}</h2>
         <h2 className ={style.text}>{props.status}</h2>
         <h2 className ={style.text}>{props.species}</h2>
         <h2 className ={style.text}>{props.gender}</h2>
         <h2 className ={style.text}>{props.origin}</h2>
         <img src= {props.image} alt={props.name}/>
      </div>
   );
}

