import styles from './Banner.module.css'
export default function Banner(props) {
    return(
            <div className={styles.banner}>
                <img src={props.image} alt= {props.imageAlt} className={styles.bannerImg}  />
                <span className={styles.bannerText}>{props.text}</span>
            </div>     
    )
}