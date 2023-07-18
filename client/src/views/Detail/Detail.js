import React from 'react';
import style from "../Detail/Detail.module.css";

const Detail = () => {
    return (
        <div className={style.content}>
        <div>
             <Link to="/home">
        <button className={style.button}>Home</button>
        </Link>

       <hr />

            {
                  recipes.length > 0
                   ? 
                 <div className={style.contenedor}>
                 <h1 className={style.title}>{recipes.title}</h1>
                 <img src={recipes.image} className={style.img}/>
                 <hr />
                 <h2 className={style.text}>Summary: {recipes.summary?.replace(/<[^>]*>/g, "")}</h2>
                 <hr />
                 <h2 className={style.text}>Health Score: {recipes.healthScore}</h2>
                 <hr />
                 <h2 className={style.text}>Instructions: {recipes.instructions?.replace(/<[^>]*>/g, "")}</h2>
                 <hr />
                 <h3 className={style.text}>Diets: {recipes.diets && Array.isArray(recipes.diets) ?
                     recipes.diets.map(el => el.name).join(" ,") :
                     recipes.diets || "no se encontraron dietas"
                        }
                        </h3>
                 </div>
                : 
                <p>Loading</p>

                    }  
            
    <hr />
       
        </div>
        
             </div>

    )

}
  



export default Detail;
