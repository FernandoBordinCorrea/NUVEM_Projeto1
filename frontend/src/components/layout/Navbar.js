import { Link } from "react-router-dom"

import logo from '../../assets/img/logo.png'
import styles from './Navbar.module.css'

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbar_logo}>
                <img src={logo} alt="Movie"/>
                <h2>Movie List</h2>
            </div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/login">Entrar</Link>
                </li>
                <li>
                    <Link to="/register">Cadastrar</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar