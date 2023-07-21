import React, { useEffect, useState } from 'react';
import ContainerComponent from '../../components/Container/Container.Component';
import { getAllRecipes } from '../../redux/actions';
import { useDispatch } from "react-redux";
import NavBar from '../../components/NavBar/NavBar';
import SearchBar from "../../components/Search/Search.Component"
//import Paginado from "../../components/Paginado/Paginado";
import style from "./Home.module.css"
import FilterComponent from '../../components/Filters/Filter.Component';


const Home = () => {

    const dispatch = useDispatch();   //REDUX
    // const allRecipes = useSelector((state) => state.recipes)


    //const [recipes, setRecipes] = useState([])
    const [var1, setVar1] = useState(false)


    // const [currentPage, setCurrentPage] = useState(1);
    // const [recipePerPage, setRecipePerPage] = useState(9);
    // const indexOfLastRecipe = currentPage * recipePerPage;
    // const indexOfFirstRecipe = indexOfLastRecipe - recipePerPage;
    // const currentRecipes = allRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe) // array que tiene las recetas que se muestran por pagina



    // const paginado = (pageNumber) => {
    //     setCurrentPage(pageNumber)
    // }


    useEffect(() => {
        //if (recipes.length === 0){
        // if (var1 == true) {
        //     //get_recipes()
        // }
        dispatch(getAllRecipes())     //REDUX
    }, [dispatch]);

    // const handleClick = (e)=>{
    //     dispatch(getAllRecipes(e))
    //    }

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


    // const handleOnSearch = (e) => {
    //     dispatch(getRecipeByTitle(e.target.value));
    //     //setCurrentPage(1);
    // }


    // const handleNextPage = () => {
    //     const totalPages = Math.ceil(allRecipes.length / recipePerPage)
    //     if (currentPage < totalPages)
    //         setCurrentPage(currentPage + 1);
    // };

    // const handlePrevPage = () => {
    //     if (currentPage > 1) {
    //         setCurrentPage(currentPage - 1);
    //     }
    // };


    return (
        <>
            <div className={style.container}>
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
                    <button onClick={() => dispatch(getAllRecipes())}>
                        Traer Recipes
                    </button>/
                </div>

                <div className={style.name}>
                    <h1>Welcome to Food App</h1>
                    <SearchBar />
                    <div>
                        <FilterComponent />
                    </div>

                </div>
                <div>
                    <ContainerComponent />
                </div>


            </div>


            {/* <Paginado recipePerPage={recipePerPage} allRecipes={allRecipes.length} paginado={paginado} />


            <div className={style.contpag}>
                <p className={style.name}>Actual page: {currentPage}</p>
            </div>
            <div className={style.btnPyN}>
                <button onClick={handlePrevPage} className={style.button}>Previous Page</button>
                <button onClick={handleNextPage} className={style.button}>Next Page</button>
            </div> */}

            {/* <div className={style.card}>
                {
                    currentRecipes?.map((r) => (
                        <ContainerComponent key={r.id} title={r.title} image={r.image} diets={r.diets} id={r.id} healthScore={r.healthScore} className={style.card} />
                    ))

                }
            </div> */}



        </>
    )
}


export default Home;