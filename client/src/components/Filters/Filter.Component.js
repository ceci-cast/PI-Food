import React from 'react';
import { useDispatch } from "react-redux";
import style from "./Filter.Component.module.css"
import { filterByDiet, filterCreated, orderByName, orderByHealthScore } from '../../redux/actions';



const FilterComponent = () => {

    const dispatch = useDispatch();
    const handleFilterDiet = (event) => {
        dispatch(filterByDiet(event.target.value))
        //setCurrentPage(1)
    }

    const handleFilterCreated = (e) => {
        dispatch(filterCreated(e.target.value))
        //setCurrentPage(1)
    }

    const handleOrderByName = (e) => {
        dispatch(orderByName(e.target.value))
        //setCurrentPage(1)
    }

    const handleOrderByHs = (e) => {
        dispatch(orderByHealthScore(e.target.value))
        //setCurrentPage(1)
    }

    return (

        <div className={style.containerSelect}>


          <div className={style.item}>
            <div className={style.title}>
              Orders by:
            </div>
            <span>
              Name
            </span>
            <div className={style.order}>
              <label htmlFor="as" className={style.input}>
                <input type="radio" name="orderByName" id="as" checked={orderByName === "as"} onChange={(e) => handleOrderByName(e)} />
                A - Z
              </label>
              <br></br>
              <label htmlFor="des" className={style.input}>
                <input type="radio" name="orderByName" id="des" checked={orderByName === "des"} onChange={(e) => handleOrderByName(e)} />
                Z - A
              </label>
              <br></br>
            </div>
            <span>
              HealthScore
              <br></br>
            </span>

            <div className={style.order}>
              <label htmlFor="as" className={style.input}>
                <input type="radio" id="as" name="handleOrderByHs" checked={handleOrderByHs === "as"} onChange={(e)=> handleOrderByHs} />
                Ascending
              </label>
              <br></br>
              <label htmlFor="des" className={style.input}>
                <input type="radio" id="des" name="handleOrderByHs" checked={handleOrderByHs === "des"} onChange={(e)=> handleOrderByHs} />
                Descending
              </label>
            </div>
          </div>


            <select onChange={handleFilterDiet} className={style.selectWrapper}>
                <option value="">Select Diet</option>
                <option value="all">All</option>
                <option value="gluten free">Gluten free</option>
                <option value="dairy free">Dairy free</option>
                <option value="lacto ovo vegetarian">Lacto ovo vegetarian</option>
                <option value="vegan">Vegan</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="paleolithic">Paleolithic</option>
                <option value="primal">Primal</option>
                <option value="whole 30">Whole 30</option>
                <option value="pescatarian">Pescatarian</option>
                <option value="ketogenic">Ketogenic</option>
                <option value="fodmap friendly">Fodmap friendly</option>
            </select>

            <select onChange={handleFilterCreated} className={style.selectWrapper}>
                <option value="">Select Origin</option>
                <option value="all">All</option>
                <option value="api">Recipes Api</option>
                <option value="bdd">Recipes created</option>
            </select>
            
        </div >
        
    )
    
}

export default FilterComponent
