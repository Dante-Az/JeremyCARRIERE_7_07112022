import styles from "./Rating.module.css"
import { ReactComponent as Icon } from '../../assets/starIcon.svg';

export default function Rating(props) {
    return(
           <Icon className={styles.stars} style={{fill: props.fill}}  alt = "etoile"/>
    )
}
