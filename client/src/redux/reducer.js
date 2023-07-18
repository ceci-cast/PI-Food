import { GET_ALL_RECIPES } from "./actions-types";

const initialState = {
  allRecipes :[]

}

const rootReducer = (state = initialState, action) => {


  switch (action.type) {

    case GET_ALL_RECIPES:
      return {                             
        ...state,
        allRecipes: action.payload,       
      }


    default:
      return { ...state };
  }
};

export default rootReducer