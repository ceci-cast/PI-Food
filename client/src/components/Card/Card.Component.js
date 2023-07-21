import React from 'react';
import { Link } from "react-router-dom";
import style from "./Card.Component.module.css";

// const CardComponent = (props) => {
//     console.log(props.item);
//     return (
//             <div className={style.card}>
//                 <img src={props.item.image} alt="img"/> 
//                 <p>Name:{props.item.title}</p>
//                 <p>Diets:{props.item.diets}</p>
//             </div>
        
//     );
// };
// export default CardComponent;

const CardComponent = ({image, title, diets, id, healthScore})=>{
    return(
        <>
        <div className={style.card}>
        <Link to={`/detail/${id}`}>
             <h1 className={style.name}>{title}</h1>
        </Link>
            <h2 className={style.name}> Diets: {diets}</h2>
            <h2 className={style.name}> HealthScore: {healthScore}</h2>
            <img src={image} alt="img" className={style.image}></img>
        </div>
        </>
    )
    
    };
    
    
    export default CardComponent;
 

