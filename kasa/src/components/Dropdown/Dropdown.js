import {useState} from 'react';
import { useLocation } from 'react-router-dom';
import { ReactComponent as Icon } from '../../assets/arrow.svg';
import styles from './Dropdown.module.css'
export default function Dropdown(props) {
    const [isActive, setIsActive] = useState(false);
    const {pathname} = useLocation();
    let logementPath = `/logement/${props.id}`;
    console.log(pathname);
    console.log(props);
    const handleClick = event => {
        
        setIsActive(!isActive);
      };
    return(
         <div className={`${styles.dropdownCard} ${pathname === logementPath ? styles.dropdownCardRow : ''}`}>
            <div className={`${styles.dropdownBtn} ${pathname === logementPath ? styles.dropdownRowRadius : ''}`} onClick={handleClick}>
                <h2 className={`${styles.dropdownTitle} ${pathname === logementPath ? styles.dropdownTitleRow : ''}`}>{props.title}</h2>
                <Icon className={`${styles.dropdownArrow} ${isActive ? styles.dropdownArrowRot : ''}`}/>
            </div>
            {isActive && ( 
                 <div className={`${styles.dropdownContent} ${pathname === logementPath ? styles.dropdownRowRadius : ''}`}>
                 {props.title === "Equipements" ? <ul className={styles.list}>{Array.isArray(props.array) ? props.array.map(item => 
                    (<li className={`${styles.dropdownArray} ${styles.dropdownTextRow}`} key={item}>{item}</li>)) : []}</ul> : <p className={`${styles.dropdownText} ${styles.dropdownTextRow}`}>{props.content}</p>}
             </div>
            )}
        </div>
    )
}