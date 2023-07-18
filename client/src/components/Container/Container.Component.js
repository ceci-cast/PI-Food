import React from 'react';
import CardComponent from '../Card/Card.Component';
import style from "./Container.Component.module.css"
import { useSelector } from "react-redux"

const ContainerComponent = () => {
    const recipes = useSelector(state=>state.allRecipes)
    return (
        <>
            <div className={style.container}>
                {
                     recipes.map((e, index) => 
                        <CardComponent 
                        key={index} 
                        image={e.image}
                        title={e.title}
                        diets={e.diets}
                        id={e.id}
                        healthScore={e.healthScore}
                        />
                    )
                }
            </div>
        </>);
}

export default ContainerComponent;


  