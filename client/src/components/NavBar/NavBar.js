import style from "../NavBar/NavBar.module.css";
import { NavLink } from "react-router-dom";


const NavBar = () => {

    return (
        <>
            <nav className={style.mainContainer}>
                <div>

                    <NavLink to="/">
                        <button className={style.button}>Foods</button>
                    </NavLink>

                    <NavLink to="/home">
                        <button className={style.button}>
                            Home
                        </button>
                    </NavLink>

                    <NavLink to="/create">
                        <button className={style.button}>Create recipe</button>
                    </NavLink>

                </div>

            </nav>
        </>
    )

}


export default NavBar;