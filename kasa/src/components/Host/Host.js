import styles from './Host.module.css'
export default function Host(props) {
    return (
        <div className={styles.hostContainer}>
            <div className={styles.name}>{props.name}</div>
            <div className={styles.profile} style={{ backgroundImage: `url(${props.picture})`}}></div>
        </div>
    )
}