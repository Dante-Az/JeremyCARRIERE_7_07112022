import {Link} from "react-router-dom"
import styles from './Erreur.module.css'

export default function Erreur() {
    return(
        <div className={styles.errorBlock}>
            <h1 className={styles.errorNumber}>404</h1>
            <h2 className={styles.errorText}>Oups! La page que vous demandez n'existe pas.</h2>
            <p>
                <Link to="/" className={styles.errorLink}>Retourner sur la page d’accueil</Link>
            </p>
        </div>
    )
}