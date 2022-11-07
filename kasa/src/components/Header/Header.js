import logo from "../../assets/LOGO.svg"
import styles from "./Header.module.css"
import {Link} from "react-router-dom"

export default function Header() {
    return(
        <nav>
            <img src={logo} alt="logo" className={styles.green} />
            <Link to="/">Accueil</Link>
            <Link to="/about">A propos</Link>
        </nav>
    )
}