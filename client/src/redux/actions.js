import { Get_All } from "../Functions/Recipe";
import { GET_ALL_RECIPES } from "./actions-types";




export const getAllRecipes = () => {
    return async function (dispatch) {
        const json = await Get_All();  //hacemos el pedido a la ruta ppal 
        const data = json.data;

        const action = {
            type: GET_ALL_RECIPES,
            payload: data
        }
        
        return dispatch(action)
    }

};