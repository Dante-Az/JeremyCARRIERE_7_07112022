import {ReactComponent as Logo} from '../../assets/LOGO.svg';
import styles from "./Footer.module.css"
export default function Footer() {
    return(
        <footer className={styles.footer}>
            <Logo className={styles.footerLogo}/>
            <div className={styles.footerText}>
            © 2020 Kasa. All rights reserved
            </div>
        </footer>
    )
}