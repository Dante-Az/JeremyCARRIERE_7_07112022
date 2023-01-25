import styles from './Cards.module.css'
import {Link} from 'react-router-dom'
export default function Cards(props) {
    return(
        <Link to={`/logement/${props.id}`} className={styles.cardsBox}>
        <div className={styles.cards}>
            <img src={props.cover} alt="photos d'appartement" className={styles.cardsImage} />
            <span className={styles.cardsText}>{props.title}</span>
            <div className={styles.cardsFilter}></div>
        </div>
        </Link>
    )
}