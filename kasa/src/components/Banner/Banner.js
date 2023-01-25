import { useLocation } from 'react-router-dom';
import styles from './Banner.module.css'
export default function Banner(props) {
    const {pathname} = useLocation();
    return(
            <div className={`${pathname === '/' ? styles.bannerHome : ""} ${styles.banner}`}>
                <img src={props.image} alt= {props.imageAlt} className={`${pathname === '/' ? styles.bannerHomeImg : ""} ${styles.bannerImg}`} />
                <span className={styles.bannerText}>{props.text}</span>
            </div>     
    )
}