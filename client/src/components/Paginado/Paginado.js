import React from 'react';
import style from "../Paginado/Paginado.module.css"

// const Paginado = ({ recipesPerPage, allRecipes, paginado }) => {

//     const pageNumbers = [];

//     for (let i = 0; i <= Math.ceil(allRecipes / recipesPerPage - 1); i++) {
//         pageNumbers.push(i + 1)
//     }

//     return (
//         <nav>
//             <div >
//                 {pageNumbers && pageNumbers.map(num => {
//                     return <div className={style.div}> <button key={num} onClick={() => paginado(num)} className={style.paginado}> {num} </button> </div>
//                 })}
//             </div>
//         </nav>
//     )

// }



// export default Paginado;

function Paginado({recipesPerPage , allRecipes , paginado}) {
    const pageNumbers = []

    for ( let i=1; i<=Math.ceil(allRecipes/recipesPerPage); i++ ){
        pageNumbers.push(i)
    }

  

  return (
    <nav>
        <div className={style.paginado}>
            { pageNumbers && pageNumbers.map(num => {
               return <button key={num} className={style.number} onClick={()=>paginado(num)}> {num} </button>
            }) }
        </div>
    </nav>
  )
}

export default Paginado




