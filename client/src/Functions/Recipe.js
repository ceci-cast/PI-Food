import axios from "axios";



export const Get_All = async () => {

    const url= "http://localhost:3001/recipes"
    const recipes = await axios.get(url);

    // const recipes = [
    //     {
    //         title:"Pasta a la carbonara",
    //         image:"not found",
    //         summary:"pasta con carne molida",
    //         healthScore:"90",
    //         diets:""
    //     },
    //     {
    //         title:"arroz con atun",
    //         image:"not found",
    //         summary:"arroz y atun",
    //         healthScore:"40",
    //         diets:""
    //     },
    //     {
    //         title:"Berry Banana Breakfast Smoothie",
    //         image:"not found",
    //         summary:"This recipe serves 1 and costs $2.07 per serving",
    //         healthScore:"70",
    //         diets:""
    //     }
    // ];

    return recipes;
}
