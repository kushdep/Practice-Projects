import { NavLink } from "react-router-dom"
import classes from './mainNavigation.module.css'

function MainNavigation() {
    return <header className={classes.header}>
        <nav>
            <ul className={classes.list}>
                <li>
                    <NavLink to="/" className={({ isActive }) => isActive ? classes.active : undefined} end={true}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/products" className={({ isActive }) => isActive ? classes.active : undefined} end={true}>Products</NavLink>
                </li>
            </ul>
        </nav>
    </header>
}

export default MainNavigation