import React, { useEffect, useState } from 'react';
import SearchComponent from '../../components/Search/Search.Component';
import ContainerComponent from '../../components/Container/Container.Component';
// import { Get_All } from '../../Functions/Recipe';
// import { GET_ALL_RECIPES } from '../../redux/actions-types';
import { getAllRecipes } from '../../redux/actions';
import { useDispatch } from "react-redux";
import NavBar from '../../components/NavBar/NavBar';
//import Paginado from "../../components/Paginado/Paginado";


const Home = () => {

     const dispatch = useDispatch();   //REDUX

    //const [recipes, setRecipes] = useState([])
    const [var1, setVar1] = useState(false)

    useEffect(() => {
        //if (recipes.length === 0){
        // if (var1 == true) {
        //     //get_recipes()
        // }
        dispatch(getAllRecipes())     //REDUX
    }, [dispatch]);


    // const get_recipes = async () => {
    //     //const recipesdata = await Get_All();

    //     //setRecipes(recipesdata.data)        // actualizo la variable con el nvo valor
    // }

    const mostrarNavBar = (mostrar) => {
        setVar1(mostrar)
        // if (mostrar == true) {
        //     //get_recipes()
        // }
        // else {
        //     //setRecipes([])
        // }
    }

    return (
        <>
            <div>
                {
                    var1 === true ? <NavBar /> : null
                }
                <button onClick={() => mostrarNavBar(true)}>
                    Mostrar Barra de Navegación
                </button>

                <button onClick={() => mostrarNavBar(false)}>
                    Ocultar Barra de Navegación
                </button>
                <button onClick={() => setVar1(true)}>
                    Traer Recipes
                </button>/
            </div>

            <SearchComponent />
            <ContainerComponent />

            {/* {
                recipes.length > 0 ? <ContainerComponent allrecipes={recipes} /> : null
            } */}


        </>

    );
}

export default Home;