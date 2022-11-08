import {ReactComponent as Logo} from '../../assets/LOGO.svg';
import styles from "./Header.module.css"
import {Link} from "react-router-dom"

export default function Header() {
    return(
        <header className={styles.header}>
            <Logo className={styles.salmon} />
            <nav>
                <ul className={styles.navList}>
                    <li className={styles.navItems}>
                        <Link to="/" className={styles.navLink}>Accueil</Link>
                    </li>
                    <li className={styles.navItems}>
                        <Link to="/about" className={styles.navLink}>A propos</Link>
                    </li>  
                </ul>    
            </nav>
        </header>
    )
}